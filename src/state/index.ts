import { configureStore } from '@reduxjs/toolkit'
import farmsReducer from './farms'
import toastsReducer from './toasts'
import poolsReducer from './pools'
import profileReducer from './profile'
import statsReducer from './stats'
import statsOverallReducer from './statsOverall'
import auctionReducer from './auction'
import vaultReducer from './vaults'
import tokenPricesReducer from './tokenPrices'
import iazosReducer from './iazos'
import networkReducer from './network'
import nfaStakingPoolsReducer from './nfaStakingPools'
import dualFarmsReducer from './dualFarms'

export default configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    farms: farmsReducer,
    toasts: toastsReducer,
    pools: poolsReducer,
    profile: profileReducer,
    stats: statsReducer,
    statsOverall: statsOverallReducer,
    auctions: auctionReducer,
    vaults: vaultReducer,
    tokenPrices: tokenPricesReducer,
    iazos: iazosReducer,
    network: networkReducer,
    nfaStakingPools: nfaStakingPoolsReducer,
    dualFarms: dualFarmsReducer,
  },
})
