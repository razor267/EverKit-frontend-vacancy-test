import React, { useEffect, useState } from 'react'
import styles from './TokenItem.module.css'
import usersLogo from './users.svg'
import arrowLogo from './arrow.svg'
import cn from 'classnames'
import { useNavigate } from 'react-router-dom'
import { changeColor, numberSeparator } from '../../../helpers/helpers'

type PropsType = {
  item: {
    id: number,
    name: string
    symbol: string
    address: string
    logoURI: string
    categories: string[]
    description: string
    price: number
    priceChange: {
      hours24: number
      days7: number
      days365: number
    },
    volume: number
    volumeChangePercentage: number
    tvl: number
    tvlChangePercentage: number
    users: number
  }
}
export const TokenItem: React.FC<PropsType> = (props) => {
  const {
    id, name, symbol, logoURI, price, priceChange,
    volume, volumeChangePercentage, tvl, tvlChangePercentage, users, description,
  } = props.item

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
  }, [props])

  const navigate = useNavigate()

  return (
    <div className={styles.wrapper}>
      <div className={styles.id}>#{id}</div>
      <div onClick={() => navigate(`/token/${symbol}`)} className={styles.logo}><img src={logoURI} alt={name} /></div>
      <div className={styles.title}>
        <div onClick={() => navigate(`/token/${symbol}`)} className={styles.name}>{name}</div>
        <div onClick={() => navigate(`/token/${symbol}`)} className={styles.symbol}>{symbol}</div>
      </div>
      <div className={styles.priceWrapper}>
        <div className={styles.price}>{numberSeparator(price)} $</div>
        <div>
          <span className={styles.hours24}>{changeColor(priceChange.hours24)}<span className={styles.dot}>•</span>
          </span>
          <span className={styles.days7}>{changeColor(priceChange.days7)}<span className={styles.dot}>•</span></span>
          <span className={styles.days365}>{changeColor(priceChange.days365)}</span>
        </div>
      </div>
      <div className={styles.volumeWrapper}>
        <span>{numberSeparator(volume)}$</span>
        <span className={styles.volumeChangePercentage}>{volumeChangePercentage}%</span>
      </div>
      <div className={styles.tvlWrapper}>
        <span className={styles.tvl}>{numberSeparator(tvl)}$</span>
        <span className={styles.tvlChangePercentage}>{tvlChangePercentage}%</span>
      </div>
      <div className={styles.usersWrapper}>
        <span className={styles.usersLogo}><img src={usersLogo} alt='users' /></span>
        <span>{numberSeparator(users)}</span>
      </div>
      <div
        className={cn(styles.arrow, {
          [styles.arrowRotate]: visible,
        })} onClick={() => setVisible(!visible)}><img src={arrowLogo} alt='arrow' />
      </div>
      {visible && <div className={styles.description}>{description}</div>}
    </div>
  )
}