import React from 'react'
import styles from './Token.module.css'
import { useMatch } from 'react-router-dom'
import { tokens } from '../../tokens'
import { ErrorPage } from '../ErrorPage/ErrorPage'
import usersLogo from '../Tokens/TokenItem/users.svg'
import { changeColor, numberSeparator } from '../../helpers/helpers'

export const Token: React.FC = () => {

  const match = useMatch('/token/:tokenId')

  const token = tokens.filter(item => item.symbol === match?.params.tokenId)[0]

  const categoriesList = (items: string[]) => {
    let itemList = ''
    for (let i = 0; i < items.length; i++) {
      if (i === 0) {
        itemList = items[i]
      } else {
        itemList = `${itemList}, ${items[i]}`
      }
    }
    return itemList
  }

  return (
    <>
      {!token ? <ErrorPage /> :
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <img src={token.logoURI} alt={token.symbol} className={styles.logo} />
            <div className={styles.name}>{token.name}</div>
            <div className={styles.symbol}>{token.symbol}</div>
            <div className={styles.categories}><span className={styles.bold}>Categories: </span>{categoriesList(token.categories)}</div>
            <div className={styles.description}>{token.description}</div>
            <div className={styles.users}><img src={usersLogo} alt='users' />{numberSeparator(token.users)}</div>
          </div>
          <div className={styles.content}>
            <div className={styles.div}>
              <div className={styles.priceWrapper}>
                <span className={styles.bold}>Price: </span><span className={styles.primary}>{numberSeparator(token.price)} $</span>
              </div>
              <div><span className={styles.bold}>Price change last 24 hours: </span>{changeColor(token.priceChange.hours24)}</div>
              <div><span className={styles.bold}>Price change last 7 days: </span>{changeColor(token.priceChange.days7)}</div>
              <div><span className={styles.bold}>Price change last 365 days: </span>{changeColor(token.priceChange.days365)}</div>
            </div>
            <div className={styles.div}>
              <div>
                <span className={styles.bold}>Total Value Locked (TVL): </span><span className={styles.primary}>{numberSeparator(token.tvl)}</span>
              </div>
              <div>
                <span className={styles.bold}>Total Value Locked (TVL) change percentage: </span>{changeColor(token.tvlChangePercentage)}
              </div>
            </div>
            <div className={styles.div}>
              <div>
                <span className={styles.bold}>Volume: </span><span className={styles.primary}>{numberSeparator(token.volume)}</span>
              </div>
              <div><span className={styles.bold}>Volume change percentage: </span>{changeColor(token.volumeChangePercentage)}</div>
            </div>
          </div>
        </div>
      }
    </>
  )
}