import React, { useCallback } from 'react'
import { ChainId, Currency, Token } from '@apeswapfinance/sdk'
import styled from 'styled-components'
import { Button, Text, ErrorIcon, Flex, Link, Modal, InjectedModalProps } from '@apeswapfinance/uikit'
import { registerToken } from 'utils/wallet'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { wrappedCurrency } from 'utils/wrappedCurrency'
import { RowFixed } from '../layout/Row'
import { AutoColumn, ColumnCenter } from '../layout/Column'

const Wrapper = styled.div`
  width: 100%;
`
const Section = styled(AutoColumn)`
  padding: 24px;
`

const ConfirmedIcon = styled(ColumnCenter)`
  padding: 24px 0;
`

function ConfirmationPendingContent({ pendingText }: { pendingText: string }) {
  return (
    <Wrapper>
      <ConfirmedIcon><></></ConfirmedIcon>
      <AutoColumn gap="12px" justify="center">
        <Text fontSize="20px">Waiting For Confirmation</Text>
        <AutoColumn gap="12px" justify="center">
          <Text bold small textAlign="center">
            {pendingText}
          </Text>
        </AutoColumn>
        <Text small color="textSubtle" textAlign="center">
          Confirm this transaction in your wallet
        </Text>
      </AutoColumn>
    </Wrapper>
  )
}

function TransactionSubmittedContent({
  onDismiss,
  chainId,
  hash,
  currencyToAdd,
}: {
  onDismiss: () => void
  hash: string | undefined
  chainId: ChainId
  currencyToAdd?: Currency | undefined
}) {
  const { library } = useActiveWeb3React()

  const token: Token | undefined = wrappedCurrency(currencyToAdd, chainId)

  return (
    <Wrapper>
      <Section>
        <ConfirmedIcon>
          <></>
        </ConfirmedIcon>
        <AutoColumn gap="12px" justify="center">
          <Text fontSize="20px">Transaction Submitted</Text>
          {chainId && hash && (
            <Link external small href="https://google.com">
              View on BscScan
            </Link>
          )}
          {currencyToAdd && library?.provider?.isMetaMask && (
            <Button variant="tertiary" mt="12px" onClick={() => console.log('clicked')}><></></Button>
          )}
          <Button onClick={onDismiss} mt="20px">
            Close
          </Button>
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export function ConfirmationModalContent({
  bottomContent,
  topContent,
}: {
  topContent: () => React.ReactNode
  bottomContent: () => React.ReactNode
}) {
  return (
    <Wrapper>
      <div>{topContent()}</div>
      <div>{bottomContent()}</div>
    </Wrapper>
  )
}

export function TransactionErrorContent({ message, onDismiss }: { message: string; onDismiss: () => void }) {
  return (
    <Wrapper>
      <AutoColumn justify="center">
        <ErrorIcon color="failure" width="64px" />
        <Text color="failure" style={{ textAlign: 'center', width: '85%' }}>
          {message}
        </Text>
      </AutoColumn>

      <Flex justifyContent="center" pt="24px">
        <Button onClick={onDismiss}>Dismiss</Button>
      </Flex>
    </Wrapper>
  )
}

interface ConfirmationModalProps {
  title: string
  customOnDismiss?: () => void
  hash: string | undefined
  content: () => React.ReactNode
  attemptingTxn: boolean
  pendingText: string
  currencyToAdd?: Currency | undefined
}

const TransactionConfirmationModal: React.FC<InjectedModalProps & ConfirmationModalProps> = ({
  title,
  onDismiss,
  customOnDismiss,
  attemptingTxn,
  hash,
  pendingText,
  content,
  currencyToAdd,
}) => {
  const { chainId } = useActiveWeb3React()

  const handleDismiss = useCallback(() => {
    if (customOnDismiss) {
      customOnDismiss()
    }
    onDismiss()
  }, [customOnDismiss, onDismiss])

  if (!chainId) return null

  return (
    <Modal title={title} onDismiss={handleDismiss}>
      {attemptingTxn ? (
        <ConfirmationPendingContent pendingText={pendingText} />
      ) : hash ? (
        <TransactionSubmittedContent
          chainId={chainId}
          hash={hash}
          onDismiss={onDismiss}
          currencyToAdd={currencyToAdd}
        />
      ) : (
        content()
      )}
    </Modal>
  )
}

export default TransactionConfirmationModal
