import React from 'react'
import styles from './ErrorPage.module.css'

export const ErrorPage = () => {
  return (
    <div className={styles.error}>
      <div className={styles.title}>404</div>
      <div className={styles.description}>Такой страницы не существует</div>
    </div>
  )
}