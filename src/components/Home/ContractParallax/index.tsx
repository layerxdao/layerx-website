import type { ReactElement } from 'react'
import ContractParallaxElement from './ContractParallaxElement'
import ParallaxText, { type ParallaxTextProps } from '@/components/Wallet/ParallaxText'

const ContractParallax = (props: ParallaxTextProps): ReactElement => {
  return (
    <div>
      <ParallaxText {...props}>
        <ContractParallaxElement />
      </ParallaxText>
    </div>
  )
}

export default ContractParallax
