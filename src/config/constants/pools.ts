import { BANANA_PER_BLOCK } from 'config'
import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'BANANA',
    stakingTokenName: QuoteToken.BANANA,
    stakingTokenAddress: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    }, // BANANA token address
    contractAddress: {
      97: '0xbbC5e1cD3BA8ED639b00927115e5f0e0040aA613', // MasterApe
      56: '0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://apeswap.finance/',
    harvest: true,
    tokenPerBlock: `${BANANA_PER_BLOCK.toNumber() * 0.25}`,
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 1,
    tokenName: 'BNB',
    stakingTokenName: QuoteToken.BANANA,
    stakingTokenAddress: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    },
    contractAddress: {
      // BNBRewardsApe
      97: '0x88777a814946cd8eb80e7029eedf05cc6cf34168',
      56: '0x0245c697a96045183048cdf18e9abae5b2237ff6',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://research.binance.com/en/projects/bnb',
    harvest: true,
    tokenPerBlock: '0.00069444',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
    displayDecimals: 5,
  },
  {
    sousId: 2,
    tokenName: 'SOUL',
    stakingTokenName: 'BANANA-SOUL',
    image: 'SOUL.png',
    stakingTokenAddress: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0xa48271ff51900007d3b21cecf30fdc8ccb63fee6', // BANANA-SOUL LP
    },
    contractAddress: {
      // BEP20RewardApe
      97: '0xb1108939748A635C5ed982a17FF5C6E7D79ECF62',
      56: '0xf5Cb9F954D3Ea26Bb503A6996a4b2B0aAdC8c969',
    },
    poolCategory: PoolCategory.APEZONE,
    projectLink: 'https://apoyield.com',
    harvest: true,
    tokenPerBlock: '1384',
    sortOrder: 2,
    isFinished: true,
    tokenDecimals: 8,
    lpStaking: true,
  },
  {
    sousId: 3,
    tokenName: 'SOUL',
    stakingTokenName: 'BANANA-SOUL',
    image: 'SOUL.png',
    stakingTokenAddress: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0xa48271ff51900007d3b21cecf30fdc8ccb63fee6', // BANANA-SOUL LP
    },
    contractAddress: {
      // BEP20RewardApe
      97: '0xb1108939748A635C5ed982a17FF5C6E7D79ECF62',
      56: '0x82576dB7685418CBDD5A9f4721D605C125E4569c',
    },
    poolCategory: PoolCategory.APEZONE,
    projectLink: 'https://apoyield.com',
    harvest: true,
    tokenPerBlock: '396',
    sortOrder: 6,
    isFinished: false,
    tokenDecimals: 8,
    lpStaking: true,
  },
  {
    sousId: 4,
    tokenName: 'NUTS',
    stakingTokenName: 'BANANA-NUTS',
    image: 'NUTS.svg',
    stakingTokenAddress: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x44baf117d79d5313bea1fbba416e4067436e4bbe', // BANANA-NUTS LP
    },
    contractAddress: {
      // BEP20RewardApe
      97: '0xb1108939748A635C5ed982a17FF5C6E7D79ECF62',
      56: '0x3523cE00C9f82FfafC850C0Acccb78341239028b',
    },
    poolCategory: PoolCategory.APEZONE,
    projectLink: 'https://squirrel.finance/',
    harvest: true,
    tokenPerBlock: '0.08680555556',
    sortOrder: 2,
    isFinished: true,
    tokenDecimals: 18,
    lpStaking: true,
  },
  {
    sousId: 5,
    tokenName: 'BANANA',
    stakingTokenName: 'BANANA-NUTS',
    image: 'BANANA.svg',
    stakingTokenAddress: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x44baf117d79d5313bea1fbba416e4067436e4bbe', // BANANA-NUTS LP
    },
    contractAddress: {
      // BEP20RewardApe
      97: '0xb1108939748A635C5ed982a17FF5C6E7D79ECF62',
      56: '0xdb28A11Fe950C9979A8050E6cBA76D187D5C3b70',
    },
    poolCategory: PoolCategory.APEZONE,
    projectLink: 'https://squirrel.finance/',
    harvest: true,
    tokenPerBlock: '0.1446527778',
    sortOrder: 3,
    isFinished: true,
    tokenDecimals: 18,
    lpStaking: true,
  },
  {
    sousId: 6,
    tokenName: 'CRX',
    stakingTokenName: 'BANANA-CRX',
    image: 'CRX.svg',
    stakingTokenAddress: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0xbd896f59baf9a624a7587de5d28b7ad3459342ba', // BANANA-CRX LP
    },
    contractAddress: {
      // BEP20RewardApe
      97: '0xb1108939748A635C5ed982a17FF5C6E7D79ECF62',
      56: '0x084beaa501dB448869001BA49913c9aD009b1694',
    },
    poolCategory: PoolCategory.APEZONE,
    projectLink: 'https://cryptexlock.me/',
    harvest: true,
    tokenPerBlock: '0.002604166666667000',
    sortOrder: 4,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
  },
  {
    sousId: 7,
    tokenName: 'NAUT',
    stakingTokenName: 'BNB-NAUT',
    image: 'NAUT.png',
    stakingTokenAddress: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x288ea5437c7aad045a393cee2f41e548df24d1c8', // BNB-NAUT LP
    },
    contractAddress: {
      // BEP20RewardApe
      97: '0xb1108939748A635C5ed982a17FF5C6E7D79ECF62',
      56: '0x114d54e18eb4A7Dc9bB8280e283E5799D4188E3f',
    },
    poolCategory: PoolCategory.APEZONE,
    projectLink: 'https://astronaut.to',
    harvest: true,
    tokenPerBlock: '0.28935185',
    sortOrder: 2,
    isFinished: false,
    tokenDecimals: 8,
    lpStaking: true,
  },
  {
    sousId: 8,
    tokenName: 'NUTS',
    stakingTokenName: 'BANANA-NUTS',
    image: 'NUTS.svg',
    stakingTokenAddress: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x44baf117d79d5313bea1fbba416e4067436e4bbe', // BANANA-NUTS LP
    },
    contractAddress: {
      // BEP20RewardApe
      97: '0xb1108939748A635C5ed982a17FF5C6E7D79ECF62',
      56: '0x6Fd37f3F83F11100f9f501e2690E96F6fAC37E94',
    },
    poolCategory: PoolCategory.APEZONE,
    projectLink: 'https://squirrel.finance/',
    harvest: true,
    tokenPerBlock: '0.024965277777778',
    sortOrder: 5,
    isFinished: false,
    tokenDecimals: 18,
    lpStaking: true,
  },
  /* {
    sousId: 45,
    tokenName: 'LINA',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    contractAddress: { // SupportApe
      97: '',
      56: '0x212bb602418C399c29D52C55100fD6bBa12bea05',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://linear.finance/',
    harvest: true,
    tokenPerBlock: '0.983',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 44,
    tokenName: 'LINA',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x04aE8ca68A116278026fB721c06dCe709eD7013C',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://linear.finance/',
    harvest: true,
    tokenPerBlock: '0.0983',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 43,
    tokenName: 'LIT',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x1714bAAE9DD4738CDEA07756427FA8d4F08D9479',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.litentry.com/',
    harvest: true,
    tokenPerBlock: '0.231',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 42,
    tokenName: 'HGET',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xcCD0b93cC6ce3dC6dFaA9DB68f70e5C8455aC5bd',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.hedget.com/',
    harvest: true,
    tokenPerBlock: '0.0138',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 6,
  },
  {
    sousId: 41,
    tokenName: 'BDO',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x9cB24e9460351bC51d4066BC6AEd1F3809b02B78',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://bdollar.fi/',
    harvest: true,
    tokenPerBlock: '0.075',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 40,
    tokenName: 'EGLD',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x2dcf4cDFf4Dd954683Fe0a6123077f8a025b66cF',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://elrond.com/',
    harvest: true,
    tokenPerBlock: '0.001215',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 39,
    tokenName: 'UST',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x6EFa207ACdE6e1caB77c1322CbdE9628929ba88F',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://mirror.finance/',
    harvest: true,
    tokenPerBlock: '0.1157',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 38,
    tokenName: 'wSOTE',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xD0b738eC507571176D40f28bd56a0120E375f73a',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://soteria.finance/#/',
    harvest: true,
    tokenPerBlock: '0.23',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 37,
    tokenName: 'FRONT',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xf7a31366732F08E8e6B88519dC3E827e04616Fc9',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://frontier.xyz/',
    harvest: true,
    tokenPerBlock: '0.2546',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 36,
    tokenName: 'Helmet',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x9F23658D5f4CEd69282395089B0f8E4dB85C6e79',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.helmet.insure/',
    harvest: true,
    tokenPerBlock: '0.81',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 35,
    tokenName: 'BTCST',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xB6fd2724cc9c90DD31DA35DbDf0300009dceF97d',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.1-b.tc/',
    harvest: true,
    tokenPerBlock: '0.011574',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 34,
    tokenName: 'BSCX',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x108BFE84Ca8BCe0741998cb0F60d313823cEC143',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://bscex.org/',
    harvest: true,
    tokenPerBlock: '0.17361',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 33,
    tokenName: 'TEN',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x4A26b082B432B060B1b00A84eE4E823F04a6f69a',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.tenet.farm/',
    harvest: true,
    tokenPerBlock: '0.05787',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 32,
    tokenName: 'bALBT',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x3cc08B7C6A31739CfEd9d8d38b484FDb245C79c8',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://allianceblock.io/',
    harvest: true,
    tokenPerBlock: '0.4166',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 31,
    tokenName: 'ASR',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xd18E1AEb349ef0a6727eCe54597D98D263e05CAB',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.chiliz.com',
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 2,
  },
  {
    sousId: 30,
    tokenName: 'ATM',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x68C7d180bD8F7086D91E65A422c59514e4aFD638',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.chiliz.com',
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 2,
  },
  {
    sousId: 29,
    tokenName: 'OG',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xbE65d7e42E05aD2c4ad28769dc9c5b4b6EAff2C7',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.chiliz.com',
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 2,
  },
  {
    sousId: 28,
    tokenName: 'REEF',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x1500fa1afbfe4f4277ed0345cdf12b2c9ca7e139',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://reef.finance/',
    harvest: true,
    tokenPerBlock: '115.74',
    sortOrder: 5,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 27,
    tokenName: 'DITTO',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x624ef5C2C6080Af188AF96ee5B3160Bb28bb3E02',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://ditto.money/',
    harvest: true,
    tokenPerBlock: '0.01157',
    sortOrder: 5,
    isFinished: false,
    tokenDecimals: 9,
  },
  {
    sousId: 26,
    image: 'CAKETWT',
    tokenName: 'CAKE',
    stakingTokenName: QuoteToken.TWT,
    stakingTokenAddress: '0x4b0f1812e5df2a09796481ff14017e6005508003',
    stakingLimit: 1000,
    contractAddress: {
      97: '',
      56: '0x0554a5D083Abf2f056ae3F6029e1714B9A655174',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://trustwallet.com/',
    harvest: true,
    tokenPerBlock: '0.248',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 24,
    tokenName: 'JUV',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x543467B17cA5De50c8BF7285107A36785Ab57E56',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.chiliz.com',
    harvest: true,
    tokenPerBlock: '0.02',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 2,
  },
  {
    sousId: 25,
    tokenName: 'PSG',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x65aFEAFaec49F23159e897EFBDCe19D94A86A1B6',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.chiliz.com',
    harvest: true,
    tokenPerBlock: '0.02',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 2,
  },
  {
    sousId: 22,
    tokenName: 'JUV',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x27Bd41E77cab966a57232915292410ACfD2761Ac',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.chiliz.com',
    harvest: true,
    tokenPerBlock: '0.02',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 2,
  },
  {
    sousId: 23,
    tokenName: 'PSG',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x1DA236Ec18D80ADd7740baD2A74cdA2ADb9E17bE',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.chiliz.com',
    harvest: true,
    tokenPerBlock: '0.02',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 2,
  },
  {
    sousId: 21,
    tokenName: 'VAI',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x1AD34D8d4D79ddE88c9B6b8490F8fC67831f2CAe',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://venus.io/',
    harvest: true,
    tokenPerBlock: '0.104',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 20,
    image: 'CAKEBNB',
    tokenName: 'CAKE',
    stakingTokenName: QuoteToken.BNB,
    stakingLimit: 10,
    contractAddress: {
      97: '',
      56: '0x555Ea72d7347E82C614C16f005fA91cAf06DCB5a',
    },
    poolCategory: PoolCategory.BINANCE,
    projectLink: 'https://pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 19,
    tokenName: 'BNB',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x326D754c64329aD7cb35744770D56D0E1f3B3124',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '0.0041',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 18,
    tokenName: 'BLK',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x42Afc29b2dEa792974d1e9420696870f1Ca6d18b',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://blink.wink.org',
    harvest: true,
    tokenPerBlock: '23.14',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 6,
  },
  {
    sousId: 17,
    tokenName: 'BLK',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://blink.wink.org',
    harvest: true,
    tokenPerBlock: '23.14',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 16,
    tokenName: 'UNFI',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xFb1088Dae0f03C5123587d2babb3F307831E6367',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://unifiprotocol.com',
    harvest: true,
    tokenPerBlock: '0.02893',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 15,
    tokenName: 'TWT',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x9c4EBADa591FFeC4124A7785CAbCfb7068fED2fb',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://trustwallet.com/',
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 14,
    tokenName: 'HARD',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x90F995b9d46b32c4a1908A8c6D0122e392B3Be97',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://hard.kava.io',
    harvest: true,
    tokenPerBlock: '0.346',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 6,
  },
  {
    sousId: 13,
    tokenName: 'bROOBEE',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xdc8c45b7F3747Ca9CaAEB3fa5e0b5FCE9430646b',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://roobee.io/',
    harvest: true,
    tokenPerBlock: '12.5',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 12,
    tokenName: 'STAX',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xFF02241a2A1d2a7088A344309400E9fE74772815',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'http://stablexswap.com/',
    harvest: true,
    tokenPerBlock: '0.2',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 11,
    tokenName: 'NAR',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xDc938BA1967b06d666dA79A7B1E31a8697D1565E',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://narwhalswap.org/',
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 10,
    tokenName: 'NYA',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x07a0A5B67136d40F4d7d95Bc8e0583bafD7A81b9',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://nyanswop.org/',
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '10',
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 9,
    tokenName: 'CTK',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0x21A9A53936E812Da06B7623802DEc9A1f94ED23a',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.certik.foundation/',
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 6,
  },
  {
    sousId: 8,
    tokenName: 'TWT',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xe7f9A439Aa7292719aC817798DDd1c4D35934aAF',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://trustwallet.com/',
    harvest: true,
    tokenPerBlock: '20',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 7,
    tokenName: 'INJ',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xcec2671C81a0Ecf7F8Ee796EFa6DBDc5Cb062693',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://injectiveprotocol.com/',
    harvest: true,
    tokenPerBlock: '0.25',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 6,
    tokenName: 'CTK',
    stakingTokenName: QuoteToken.SYRUP,
    stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xF35d63Df93f32e025bce4A1B98dcEC1fe07AD892',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.certik.foundation/',
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 5,
    tokenName: 'CTK',
    stakingTokenName: QuoteToken.SYRUP,
    stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.certik.foundation/',
    tokenPerBlock: '0.5',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 6,
  },
  {
    sousId: 4,
    tokenName: 'SXP',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xD32B30b151a6aDB2e0Fa573a37510C097DaBD2F3',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://swipe.io/',
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 3,
    tokenName: 'INJ',
    stakingTokenName: QuoteToken.SYRUP,
    stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0x92E8CeB7eAeD69fB6E4d9dA43F605D2610214E68',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://injectiveprotocol.com/',
    harvest: true,
    tokenPerBlock: '0.25',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 2,
    tokenName: 'ALPHA',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73c83bd1646991cBca3e6b83ca905542FE07C57A',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://alphafinance.io/',
    harvest: true,
    tokenPerBlock: '20',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 1,
    tokenName: 'TWT',
    stakingTokenName: QuoteToken.SYRUP,
    stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://trustwallet.com/',
    harvest: true,
    tokenPerBlock: '20',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: -1,
    tokenName: 'XVS',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x6ab8463a4185b80905e05a9ff80a2d6b714b9e95',
    },
    tokenPerBlock: '0',
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://venus.io/',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  }, */
]

export default pools
