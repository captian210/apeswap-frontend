import React, { useState } from 'react'
import styled from 'styled-components'
import Web3 from 'web3'
import { useWeb3React } from '@web3-react/core'
import { Button, Input, Modal, Text } from '@apeswapfinance/uikit'
import { Nft } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import { useNonFungibleApes } from 'hooks/useContract'
import InfoRow from './InfoRow'

interface TransferNftModalProps {
  nft: Nft
  tokenId: number
  onSuccess: () => any
  onDismiss?: () => void
}

const Value = styled(Text)`
  font-weight: 300;
`

const ModalContent = styled.div`
  margin-bottom: 16px;
`

const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
`

const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  display: block;
  margin-bottom: 8px;
  margin-top: 24px;
`

const TransferNftModal: React.FC<TransferNftModalProps> = ({ nft, tokenId, onSuccess, onDismiss }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)
  const TranslateString = useI18n()
  const { account } = useWeb3React()
  const nonFungibleApesContract = useNonFungibleApes()

  const handleConfirm = async () => {
    try {
      const isValidAddress = Web3.utils.isAddress(value)

      if (!isValidAddress) {
        setError(TranslateString(999, 'Please enter a valid wallet address'))
      } else {
        setIsLoading(true)
        await nonFungibleApesContract.methods
          .safeTransferFrom(account, value, tokenId)
          .send({ from: account })
          .on('transactionHash', (tx) => {
            onDismiss()
            onSuccess()
            return tx
          })
          .on('error', () => {
            console.warn(error)
            setError('Unable to transfer NFT')
            setIsLoading(false)
          })
      }
    } catch (err) {
      console.warn('Unable to transfer NFT:', err)
      setIsLoading(false)
    }
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = evt.target
    setValue(inputValue)
  }

  return (
    <Modal title={TranslateString(999, 'Transfer NFT')} onDismiss={onDismiss}>
      <ModalContent>
        {error && (
          <Text color="failure" mb="8px">
            {error}
          </Text>
        )}
        <InfoRow>
          <Text>{TranslateString(999, 'Transferring')}:</Text>
          <Value>{`1x "${nft.name}" NFT`}</Value>
        </InfoRow>
        <Label htmlFor="transferAddress">{TranslateString(999, 'Receiving address')}:</Label>
        <Input
          id="transferAddress"
          name="address"
          type="text"
          placeholder={TranslateString(999, 'Paste address')}
          value={value}
          onChange={handleChange}
          isWarning={error}
          disabled={isLoading}
        />
      </ModalContent>
      <Actions>
        <Button fullWidth variant="secondary" onClick={onDismiss}>
          {TranslateString(462, 'Cancel')}
        </Button>
        <Button fullWidth onClick={handleConfirm} disabled={!account || isLoading || !value}>
          {TranslateString(464, 'Confirm')}
        </Button>
      </Actions>
    </Modal>
  )
}

export default TransferNftModal
