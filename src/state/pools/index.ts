/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import poolsConfig from 'config/constants/pools'
import { useFetchPoolsBlockLimits, useFetchPoolsTotalStatking, useFetchPoolTokenStatsAndApr } from './fetchPools'
import {
  useFetchPoolsAllowance,
  useFetchUserBalances,
  useFetchUserStakeBalances,
  useFetchUserPendingRewards,
} from './fetchPoolsUser'
import { PoolsState, Pool, TokenPrices } from '../types'

const initialState: PoolsState = { data: [...poolsConfig] }

export const PoolsSlice = createSlice({
  name: 'Pools',
  initialState,
  reducers: {
    setPoolsPublicData: (state, action) => {
      const livePoolsData: Pool[] = action.payload
      state.data = state.data.map((pool) => {
        const livePoolData = livePoolsData.find((entry) => entry.sousId === pool.sousId)
        return { ...pool, ...livePoolData }
      })
    },
    setPoolsUserData: (state, action) => {
      const userData = action.payload
      state.data = state.data.map((pool) => {
        const userPoolData = userData.find((entry) => entry.sousId === pool.sousId)
        return { ...pool, userData: userPoolData }
      })
    },
    updatePoolsUserData: (state, action) => {
      const { field, value, sousId } = action.payload
      const index = state.data.findIndex((p) => p.sousId === sousId)
      state.data[index] = { ...state.data[index], userData: { ...state.data[index].userData, [field]: value } }
    },
  },
})

// Actions
export const { setPoolsPublicData, setPoolsUserData, updatePoolsUserData } = PoolsSlice.actions

// Thunks
export const fetchPoolsPublicDataAsync = (tokenPrices: TokenPrices[]) => async (dispatch) => {
  const blockLimits = await useFetchPoolsBlockLimits()
  const totalStakings = await useFetchPoolsTotalStatking()
  const tokenStatsAndAprs = await useFetchPoolTokenStatsAndApr(tokenPrices, totalStakings)
  const liveData = await Promise.all(
    poolsConfig.map(async (pool) => {
      const blockLimit = blockLimits.find((entry) => entry.sousId === pool.sousId)
      const totalStaking = totalStakings.find((entry) => entry.sousId === pool.sousId)
      const tokenStatsAndApr = tokenStatsAndAprs.find((entry) => entry.sousId === pool.sousId)
      // const lpData = pool.lpStaking ? await fetchReserveData(pool.stakingTokenAddress[CHAIN_ID]) : null
      return {
        ...blockLimit,
        ...totalStaking,
        ...tokenStatsAndApr,
      }
    }),
  )
  dispatch(setPoolsPublicData(liveData))
}

export const fetchPoolsUserDataAsync = (account) => async (dispatch) => {
  const allowances = await useFetchPoolsAllowance(account)
  const stakingTokenBalances = await useFetchUserBalances(account)
  const stakedBalances = await useFetchUserStakeBalances(account)
  const pendingRewards = await useFetchUserPendingRewards(account)

  const userData = poolsConfig.map((pool) => ({
    sousId: pool.sousId,
    allowance: allowances[pool.sousId],
    stakingTokenBalance: stakingTokenBalances[pool.sousId],
    stakedBalance: stakedBalances[pool.sousId],
    pendingReward: pendingRewards[pool.sousId],
  }))
  dispatch(setPoolsUserData(userData))
}

export const updateUserAllowance = (sousId: string, account: string) => async (dispatch) => {
  const allowances = await useFetchPoolsAllowance(account)
  dispatch(updatePoolsUserData({ sousId, field: 'allowance', value: allowances[sousId] }))
}

export const updateUserBalance = (sousId: string, account: string) => async (dispatch) => {
  const tokenBalances = await useFetchUserBalances(account)
  dispatch(updatePoolsUserData({ sousId, field: 'stakingTokenBalance', value: tokenBalances[sousId] }))
}

export const updateUserStakedBalance = (sousId: string, account: string) => async (dispatch) => {
  const stakedBalances = await useFetchUserStakeBalances(account)
  dispatch(updatePoolsUserData({ sousId, field: 'stakedBalance', value: stakedBalances[sousId] }))
}

export const updateUserPendingReward = (sousId: string, account: string) => async (dispatch) => {
  const pendingRewards = await useFetchUserPendingRewards(account)
  dispatch(updatePoolsUserData({ sousId, field: 'pendingReward', value: pendingRewards[sousId] }))
}

export default PoolsSlice.reducer
