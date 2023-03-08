import { styled } from '../../styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  lineHeight: 0,
  cursor: 'pointer',

  color: '$grayScale',

  top: '1.5rem',
  right: '1.5rem'
})

export const Title = styled(Dialog.Title, {
  fontSize: '1rem',
  marginBottom: '2rem'
})

export const Content = styled(Dialog.Content, {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  padding: '3rem',
  width: 420,
  background: '$gray800',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0
})

export const QuantityOfItems = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '.5rem'
})

export const TotalValue = styled('div', {
  display: 'flex',
  justifyContent: 'space-between'
})

export const CheckoutButton = styled('button', {
  background: '$green500',
  color: '$white',
  fontWeight: 'bold',
  border: 0,
  borderRadius: 6,
  width: '100%',
  padding: '1.25rem 2rem',
  cursor: 'pointer'
})
