import React from 'react'
import { BaseLayout, Card, Heading, Text } from '@apeswapfinance/uikit'
import styled from 'styled-components'
import { TranslateString } from 'utils/translateTextHelpers'
import { useWeb3React } from '@web3-react/core'
import Divider from './components/Divider'
import BuyCard from './components/BuyCard'
import SellCard from './components/SellCard'
import Iao from './components/IAO/CurrentIao'
import Description from './components/Description/Description'
import Pools from './components/Pools/Pools'

const StyledHeroSection = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

const MarginContainer = styled.div`
  margin: 53px 30px;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin: 32px 0px;
  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`
const PaddedCard = styled(Card)`
  padding: 26px;
`

const Zone = () => {
  const { account } = useWeb3React()

  return (
    <>
      <Description />
      <StyledHeroSection>
        <MarginContainer>
          <Heading size="xl" mb="26px" color="primary">
            {TranslateString(999, 'Buy Golden Banana')}
          </Heading>
          <PaddedCard>
            <Heading size="lg" fontFamily="poppins" color="warning">
              WARNING
            </Heading>
            <Text fontFamily="poppins">
              Buying GNANA involves paying a 28% burn fee and a 2% reflect fee for a total cost of 30%.
            </Text>
            <Text fontFamily="poppins">
              This means that for every 1 BANANA you trade in, you will receive 0.7 GNANA
            </Text>
          </PaddedCard>
          <Cards>
            <BuyCard account={account} />
            <SellCard account={account} />
          </Cards>
        </MarginContainer>
      </StyledHeroSection>
      <Iao />
      <Divider />
      <Pools />
    </>
  )
}
export default Zone
