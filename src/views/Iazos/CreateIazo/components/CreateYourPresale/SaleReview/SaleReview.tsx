import React from 'react'
import { getBalanceNumber } from 'utils/formatBalance'
import BigNumber from 'bignumber.js'
import DonutChart from '../DonutChart'
import { TokenSaleDetails, LiquidityLockDetails, ExtendedERC20Details } from '../types'

interface SaleReviewProps {
  presaleDetails: TokenSaleDetails
  postsaleDetails: LiquidityLockDetails
  pairDetails: ExtendedERC20Details
}

const SaleReview: React.FC<SaleReviewProps> = ({ presaleDetails, postsaleDetails, pairDetails }) => {
  const { tokensForSale, pricePerToken } = presaleDetails
  const { liquidityPercent } = postsaleDetails
  const { totalSupply, tokenDecimals, quoteToken } = pairDetails

  // Tokenomics chart details
  const formatedTotalSupply = getBalanceNumber(new BigNumber(totalSupply), tokenDecimals)

  // Tokens for sale after subtracting liquidity and fees
  const tokensForLiquidity = parseFloat(tokensForSale) * liquidityPercent
  const tokensForFees = 0.018 * parseFloat(tokensForSale)
  const tokensForOther = formatedTotalSupply - parseFloat(tokensForSale) - tokensForLiquidity - tokensForFees

  // Amount raised chart details
  const amountRaisedInQuoteToken = parseFloat(pricePerToken) * parseFloat(tokensForSale)
  const quoteTokenForLiqudity = amountRaisedInQuoteToken * liquidityPercent
  const quoteTokenForFees = 0.018 * amountRaisedInQuoteToken
  const amountForOther =
    liquidityPercent === 1 ? 0 : amountRaisedInQuoteToken - quoteTokenForLiqudity - quoteTokenForFees

  return (
    <>
      <DonutChart
        items={[
          {
            label: 'For Sale',
            value: parseFloat(tokensForSale),
            color: 'rgba(255, 179, 0, 1)',
          },
          {
            label: 'Liquidity',
            value: tokensForLiquidity,
            color: 'rgba(56, 166, 17, 1)',
          },
          {
            label: 'Fees',
            value: tokensForFees,
            color: 'rgba(122, 122, 122, 1)',
          },
          { label: 'Dev/Other', value: tokensForOther, color: 'rgba(161, 101, 82, 1)' },
        ]}
        title="SS-IAO's Tokenomics"
      />
      <DonutChart
        items={[
          {
            label: 'Liquidity',
            value: quoteTokenForLiqudity,
            color: 'rgba(56, 166, 17, 1)',
          },
          {
            label: 'Fees',
            value: quoteTokenForFees,
            color: 'rgba(122, 122, 122, 1)',
          },
          { label: 'Dev/Other', value: amountForOther, color: 'rgba(161, 101, 82, 1)' },
        ]}
        title={`${quoteToken} Raised`}
      />
    </>
  )
}

export default SaleReview
