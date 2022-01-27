import { getApePriceGetterAddress, getNativeWrappedAddress } from 'utils/addressHelper'
import apePriceGetterABI from 'config/abi/apePriceGetter.json'
import { getBalanceNumber } from 'utils/formatBalance'
import multicall from 'utils/multicall'

export const getTokenUsdPrice = async (
  chainId: number,
  tokenAddress: string,
  tokenDecimal: number,
  lp?: boolean,
  isNative?: boolean,
) => {
  const apePriceGetterAddress = getApePriceGetterAddress(chainId)
  const nativeTokenAddress = getNativeWrappedAddress(chainId)
  if ((tokenAddress || isNative) && tokenDecimal) {
    const call = lp
      ? {
          address: apePriceGetterAddress,
          name: 'getLPPrice',
          params: [tokenAddress, 18],
        }
      : {
          address: apePriceGetterAddress,
          name: 'getPrice',
          params: [isNative ? nativeTokenAddress : tokenAddress, tokenDecimal],
        }

    const tokenPrice = await multicall(chainId, apePriceGetterABI, [call])
    const filterPrice = getBalanceNumber(tokenPrice[0], tokenDecimal)
    return filterPrice
  }
  return null
}
