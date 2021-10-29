import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'
import {
  updateUserStakedBalance,
  updateUserBalance,
  updateUserPendingReward,
  updateUserNfaStakingStakedBalance,
  updateNfaStakingUserBalance,
  updateUserNfaStakingPendingReward,
} from 'state/actions'
import { updateVaultUserBalance, updateVaultUserStakedBalance } from 'state/vaults'
import track from 'utils/track'
import {
  unstake,
  sousUnstake,
  sousEmegencyWithdraw,
  nfaUnstake,
  vaultUnstake,
  vaultUnstakeAll,
  miniChefUnstake,
} from 'utils/callHelpers'
import { updateFarmUserStakedBalances, updateFarmUserTokenBalances, updateFarmUserEarnings } from 'state/farms'
import {
  updateDualFarmUserEarnings,
  updateDualFarmUserStakedBalances,
  updateDualFarmUserTokenBalances,
} from 'state/dualFarms'
import { useNetworkChainId } from 'state/hooks'
import {
  useMasterchef,
  useMiniChefContract,
  useMulticallContract,
  useNfaStakingChef,
  useSousChef,
  useVaultApe,
} from './useContract'
import { useMasterChefAddress, useMiniChefAddress, useNonFungibleApesAddress, useVaultApeAddress } from './useAddress'

const useUnstake = (pid: number) => {
  const dispatch = useDispatch()
  const { account, chainId } = useWeb3React()
  const masterChefContract = useMasterchef()
  const masterChefAddress = useMasterChefAddress()
  const multicallContract = useMulticallContract()

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      dispatch(updateFarmUserStakedBalances(multicallContract, pid, masterChefAddress, account))
      dispatch(updateFarmUserTokenBalances(multicallContract, pid, chainId, account))
      dispatch(updateFarmUserEarnings(multicallContract, masterChefAddress, pid, account))
      track({
        event: 'farm',
        chain: chainId,
        data: {
          cat: 'unstake',
          amount,
          pid,
        },
      })
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid, chainId, masterChefAddress, multicallContract],
  )

  return { onUnstake: handleUnstake }
}

// TODO remove legacy code we don't need to support
const SYRUPIDS = []

export const useSousUnstake = (sousId) => {
  const dispatch = useDispatch()
  const { account, chainId } = useWeb3React()
  const masterChefContract = useMasterchef()
  const sousChefContract = useSousChef(sousId)
  const isOldSyrup = SYRUPIDS.includes(sousId)
  const multicallContract = useMulticallContract()

  const handleUnstake = useCallback(
    async (amount: string) => {
      if (sousId === 0) {
        const txHash = await unstake(masterChefContract, 0, amount, account)
        console.info(txHash)
      } else if (isOldSyrup) {
        const txHash = await sousEmegencyWithdraw(sousChefContract, account)
        console.info(txHash)
      } else {
        const txHash = await sousUnstake(sousChefContract, amount, account)
        console.info(txHash)
      }
      dispatch(updateUserStakedBalance(multicallContract, chainId, masterChefContract, sousId, account))
      dispatch(updateUserBalance(multicallContract, chainId, sousId, account))
      dispatch(updateUserPendingReward(multicallContract, chainId, masterChefContract, sousId, account))
      track({
        event: 'pool',
        chain: chainId,
        data: {
          cat: 'unstake',
          amount,
          sousId,
        },
      })
    },
    [account, dispatch, isOldSyrup, masterChefContract, sousChefContract, sousId, multicallContract, chainId],
  )

  return { onUnstake: handleUnstake }
}

export const useSousEmergencyWithdraw = (sousId) => {
  const dispatch = useDispatch()
  const { account, chainId } = useWeb3React()
  const masterChefContract = useMasterchef()
  const sousChefContract = useSousChef(sousId)
  const multicallContract = useMulticallContract()
  const handleEmergencyWithdraw = useCallback(async () => {
    const txHash = await sousEmegencyWithdraw(sousChefContract, account)
    console.info(txHash)
    dispatch(updateUserStakedBalance(multicallContract, chainId, masterChefContract, sousId, account))
    dispatch(updateUserBalance(multicallContract, chainId, sousId, account))
    dispatch(updateUserPendingReward(multicallContract, chainId, masterChefContract, sousId, account))
  }, [account, dispatch, masterChefContract, sousChefContract, sousId, multicallContract, chainId])
  return { onEmergencyWithdraw: handleEmergencyWithdraw }
}

export const useNfaUnstake = (sousId) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const multicallContract = useMulticallContract()
  const chainId = useNetworkChainId()
  const nfaAddress = useNonFungibleApesAddress()
  const nfaStakeChefContract = useNfaStakingChef(sousId)

  const handleUnstake = useCallback(
    async (ids: number[]) => {
      await nfaUnstake(nfaStakeChefContract, ids, account)
      dispatch(updateUserNfaStakingStakedBalance(multicallContract, chainId, sousId, account))
      dispatch(updateNfaStakingUserBalance(multicallContract, nfaAddress, sousId, account))
      dispatch(updateUserNfaStakingPendingReward(multicallContract, chainId, sousId, account))
      track({
        event: 'nfa',
        chain: chainId,
        data: {
          cat: 'unstake',
          ids,
        },
      })
    },
    [account, dispatch, nfaStakeChefContract, sousId, nfaAddress, chainId, multicallContract],
  )

  return { onUnstake: handleUnstake }
}

export const useVaultUnstake = (pid: number) => {
  const { account, chainId } = useWeb3React()
  const vaultApeContract = useVaultApe()
  const dispatch = useDispatch()
  const multicallContract = useMulticallContract()
  const vaultApeAddress = useVaultApeAddress()

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await vaultUnstake(vaultApeContract, pid, amount, account)
      track({
        event: 'vault',
        chain: chainId,
        data: {
          cat: 'unstake',
          amount,
          pid,
        },
      })
      dispatch(updateVaultUserBalance(multicallContract, account, chainId, pid))
      dispatch(updateVaultUserStakedBalance(multicallContract, vaultApeAddress, account, chainId, pid))
      console.info(txHash)
    },
    [account, vaultApeContract, dispatch, pid, chainId, multicallContract, vaultApeAddress],
  )
  return { onUnstake: handleUnstake }
}

export const useVaultUnstakeAll = (pid: number) => {
  const { account } = useWeb3React()
  const vaultApeContrct = useVaultApe()

  const handleUnstake = useCallback(async () => {
    const txHash = await vaultUnstakeAll(vaultApeContrct, pid, account)
    console.info(txHash)
  }, [account, vaultApeContrct, pid])

  return { onUnstakeAll: handleUnstake }
}

export const useMiniChefUnstake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const miniChefContract = useMiniChefContract()
  const miniChefAddress = useMiniChefAddress()
  const multicallContract = useMulticallContract()

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await miniChefUnstake(miniChefContract, pid, amount, account)
      dispatch(updateDualFarmUserEarnings(multicallContract, miniChefAddress, pid, account))
      dispatch(updateDualFarmUserStakedBalances(multicallContract, miniChefAddress, pid, account))
      dispatch(updateDualFarmUserTokenBalances(multicallContract, pid, account))
      console.info(txHash)
    },
    [account, dispatch, miniChefContract, pid, miniChefAddress, multicallContract],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
