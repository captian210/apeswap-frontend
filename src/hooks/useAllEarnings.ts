import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import masterChefABI from 'config/abi/masterchef.json'
import miniChefABI from 'config/abi/miniApeV2.json'
import { dualFarmsConfig, farmsConfig } from 'config/constants'
import { CHAIN_ID } from 'config/constants/chains'
import multicall from 'utils/multicall'
import { getMasterChefAddress, getMiniChefAddress } from 'utils/addressHelper'
import useRefresh from './useRefresh'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([])
  const { account, chainId } = useWeb3React()
  const { fastRefresh } = useRefresh()
  const masterChefAddress = getMasterChefAddress(chainId)
  const miniChefAddress = getMiniChefAddress(chainId)

  useEffect(() => {
    const fetchAllBSCBalances = async () => {
      try {
        const calls = farmsConfig.map((farm) => ({
          address: masterChefAddress,
          name: 'pendingCake',
          params: [farm.pid, account],
        }))

        const res = await multicall(chainId, masterChefABI, calls)

        setBalance(res)
      } catch (e) {
        console.warn(e)
      }
    }

    const fetchAllMiniChefBalances = async () => {
      try {
        const filteredDualFarms = dualFarmsConfig.filter((farm) => farm.network === chainId)
        const calls = filteredDualFarms.map((farm) => ({
          address: miniChefAddress,
          name: 'pendingBanana',
          params: [farm.pid, account],
        }))

        const res = await multicall(chainId, miniChefABI, calls)

        setBalance(res)
      } catch (e) {
        console.warn(e)
      }
    }

    if (account) {
      if (chainId === CHAIN_ID.BSC) {
        fetchAllBSCBalances()
      }
      if (chainId === CHAIN_ID.MATIC) {
        fetchAllMiniChefBalances()
      }
    }
  }, [account, fastRefresh, masterChefAddress, chainId, miniChefAddress])

  return balances
}

export default useAllEarnings
