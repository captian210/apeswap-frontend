import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import { Text } from '@apeswapfinance/uikit'
import { QuoteToken, PoolCategory } from 'config/constants/types'
import { getBalanceNumber } from 'utils/formatBalance'
import BigNumber from 'bignumber.js'
import useBlock from 'hooks/useBlock'
import { useFetchPoolsHome } from 'state/strapi/fetchStrapi'

import { BLOCKS_PER_YEAR, BANANA_PER_BLOCK, BANANA_POOL_PID } from 'config'
import { useFarms, usePriceBnbBusd, usePriceEthBusd, usePoolFromPid, useStatsOverall } from 'state/hooks'
import PoolCardForHome from './PoolCardForHome'

const CoolPoolsWrapper = styled.div`
  position: relative;
  height: 321px;
  width: 336px;
  background-image: ${({ theme }) =>
    theme.isDark ? 'url(/images/ape-home-cool-pools-dark.svg)' : 'url(/images/ape-home-cool-pools-light.svg)'};
  border-radius: 30px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 40px;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 718px;
    height: 203px;
  }
`

const CoolPoolsText = styled(Text)`
  margin-top: 10px;
  font-size: 38px;
  text-align: center;
  color: #ffffff;
`

const PoolWrapper = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: space-between;
    padding-left: 25px;
    padding-right: 25px;
    flex-direction: row;
    margin-top: 20px;
  }
`

const CoolPools = () => {
  const { poolsData, loading } = useFetchPoolsHome()
  let poolsToDisplay = []
  // if (!loading) {
  //   const sousId1 = poolsData[0]?.sousId1
  //   const sousId2 = poolsData[0]?.sousId2
  //   poolsToDisplay = [usePoolFromPid(1), usePoolFromPid(2)]
  // }
  poolsToDisplay = [usePoolFromPid(1), usePoolFromPid(2)]
  const farms = useFarms()
  const block = useBlock()
  const { statsOverall } = useStatsOverall()
  const bnbPriceUSD = usePriceBnbBusd()
  const priceToBnb = (tokenName: string, tokenPrice: BigNumber, quoteToken: QuoteToken): BigNumber => {
    const tokenPriceBN = new BigNumber(tokenPrice)
    if (tokenName === 'BNB') {
      return new BigNumber(1)
    }
    if (tokenPrice && quoteToken === QuoteToken.BUSD) {
      return tokenPriceBN.div(bnbPriceUSD)
    }
    return tokenPriceBN
  }

  const poolsFetched = poolsToDisplay.map((pool) => {
    const isBnbPool = pool.poolCategory === PoolCategory.BINANCE
    const rewardTokenFarm = farms.find((f) => f.tokenSymbol === pool.tokenName)
    const stakingTokenFarm = farms.find((s) => s.tokenSymbol === pool.stakingTokenName)
    const stats = statsOverall?.incentivizedPools?.find((x) => x.id === pool.sousId)
    let rewardTokenPrice = stats?.rewardTokenPrice

    let stakedTokenPrice
    let stakingTokenPriceInBNB
    let rewardTokenPriceInBNB

    if (pool.lpData) {
      const rewardToken = pool.lpData.token1.symbol === pool.tokenName ? pool.lpData.token1 : pool.lpData.token0
      stakingTokenPriceInBNB = new BigNumber(pool.lpData.reserveETH).div(new BigNumber(pool.lpData.totalSupply))
      rewardTokenPriceInBNB = new BigNumber(rewardToken.derivedETH)
      stakedTokenPrice = bnbPriceUSD.times(stakingTokenPriceInBNB).toNumber()
    } else if (rewardTokenPrice) {
      stakingTokenPriceInBNB = priceToBnb(pool.stakingTokenName, new BigNumber(stats?.price), QuoteToken.BUSD)
      rewardTokenPriceInBNB = priceToBnb(pool.tokenName, new BigNumber(rewardTokenPrice), QuoteToken.BUSD)
      stakedTokenPrice = bnbPriceUSD.times(stakingTokenPriceInBNB).toNumber()
    } else {
      // /!\ Assume that the farm quote price is BNB
      stakingTokenPriceInBNB = isBnbPool ? new BigNumber(1) : new BigNumber(stakingTokenFarm?.tokenPriceVsQuote)
      rewardTokenPriceInBNB = priceToBnb(
        pool.tokenName,
        rewardTokenFarm?.tokenPriceVsQuote,
        rewardTokenFarm?.quoteTokenSymbol,
      )
      rewardTokenPrice = bnbPriceUSD.times(rewardTokenPriceInBNB).toNumber()
      stakedTokenPrice = bnbPriceUSD.times(stakingTokenPriceInBNB).toNumber()
    }

    const totalRewardPricePerYear = rewardTokenPriceInBNB.times(pool.tokenPerBlock).times(BLOCKS_PER_YEAR)
    const totalStakingTokenInPool = stakingTokenPriceInBNB.times(getBalanceNumber(pool.totalStaked))
    const apr = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)

    return {
      ...pool,
      isFinished: pool.sousId === 0 ? false : pool.isFinished || block > pool.endBlock,
      apr,
      rewardTokenPrice,
      stakedTokenPrice,
    }
  })

  return (
    <>
      <CoolPoolsWrapper>
        <CoolPoolsText>Cool Pools</CoolPoolsText>
        <PoolWrapper>{loading ? <></> : poolsFetched.map((pool) => <PoolCardForHome pool={pool} />)}</PoolWrapper>
      </CoolPoolsWrapper>
    </>
  )
}

export default CoolPools
