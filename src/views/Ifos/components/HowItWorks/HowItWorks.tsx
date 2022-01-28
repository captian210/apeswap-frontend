import React from 'react'
import { Button } from '@apeswapfinance/uikit'
import useTheme from 'hooks/useTheme'

import { IconBox, FeatureBox, B, Frame, SectionHeading, CenteredImage, Container, StyledText } from './styles'

interface IconProps {
  name: string
}

const Icon = ({ name }: IconProps) => {
  const { isDark } = useTheme()

  return (
    <IconBox>
      <CenteredImage src={`/images/ifos/${name}-${isDark ? 'dark' : 'light'}.svg`} alt={name} />
    </IconBox>
  )
}

interface Props {
  onParticipate: () => boolean
}

const HowItWorks = ({ onParticipate }: Props) => {
  const handleParticipateClick = () => {
    const isSwitching = onParticipate()
    const scroll = () =>
      window.scrollTo({
        top: 360,
        behavior: 'smooth',
      })

    if (isSwitching) {
      setTimeout(scroll, 500)
    } else {
      scroll()
    }
  }

  return (
    <Container>
      <SectionHeading size="lg">HOW IT WORKS</SectionHeading>
      <Frame>
        <FeatureBox>
          <Icon name="time-circle" />
          <div>
            <SectionHeading>CONTRIBUTION WINDOW</SectionHeading>
            <StyledText>
              IAOs run anywhere from 12-24 hours to ensure everyone across the globe has time to enter with ease.
            </StyledText>
          </div>
        </FeatureBox>
        <FeatureBox>
          <Icon name="calendar" />
          <div>
            <SectionHeading>VESTING SCHEDULE</SectionHeading>
            <StyledText>25% of tokens unlock immediately and the remaining 75% vest linearly over 90 days.</StyledText>
          </div>
        </FeatureBox>
        <FeatureBox>
          <Icon name="bnb-gnana" />
          <div>
            <SectionHeading>2 WAYS TO PARTICIPATE</SectionHeading>
            <StyledText>
              <B>Option 1</B>: Commit with <B>BNB</B>.
            </StyledText>
            <StyledText>
              <B>Option 2</B>: Commit with <B>GNANA</B>.
            </StyledText>
          </div>
        </FeatureBox>
        <FeatureBox>
          <Icon name="overflow-dollars" />
          <div>
            <SectionHeading>OVERFLOW MODEL</SectionHeading>
            <StyledText>
              Your token allocation is based on your percentage of the total raise. All overflow contributions will be
              returned post-raise.
            </StyledText>
          </div>
        </FeatureBox>
      </Frame>
      <Button variant="yellow" onClick={handleParticipateClick}>
        PARTICIPATE NOW
      </Button>
    </Container>
  )
}

export default HowItWorks
