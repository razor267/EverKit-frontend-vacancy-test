import styles from '../components/Tokens/TokenItem/TokenItem.module.css'
import React from 'react'

export const numberSeparator = (number: number): string => {
  const str = number.toString()
  const index = str.indexOf('.')
  if (index === -1) {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }
  let strStart = str.substring(0, index)
  strStart = strStart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  const strEnd = str.substring(index, str.length)
  return `${strStart}${strEnd}`
}

export const changeColor = (percent: number) => {
  if (percent < 0) {
    return <span className={styles.minus}>{percent}%</span>
  } else if (percent > 0) {
    return <span className={styles.plus}>+{percent}%</span>
  } else return <span className={styles.zero}>{percent}%</span>
}
