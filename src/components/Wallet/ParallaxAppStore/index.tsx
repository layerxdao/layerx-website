import ParallaxAppStoreElement from '@/components/Wallet/ParallaxAppStore/ParallaxAppStoreElement'
import ParallaxText, { type ParallaxTextProps } from '@/components/Wallet/ParallaxText'

const ParallaxAppStore = (props: ParallaxTextProps) => {
  return (
    <ParallaxText {...props}>
      <ParallaxAppStoreElement />
    </ParallaxText>
  )
}

export default ParallaxAppStore
