import { useRef } from 'react'
import clsx from 'clsx'
import css from './styles.module.css'

const ThreeSquareAnimation = () => {
  const rectTr = useRef<HTMLDivElement>(null)
  const rectCenter = useRef<HTMLDivElement>(null)
  const rectBl = useRef<HTMLDivElement>(null)

  return (
    <div className={css.box}>
      <div className={clsx(css.rect, css.rectTr)} ref={rectTr} />
      <div className={clsx(css.rect, css.rectCenter)} ref={rectCenter} />
      <div className={clsx(css.rect, css.rectBl)} ref={rectBl} />

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="square-gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default ThreeSquareAnimation
