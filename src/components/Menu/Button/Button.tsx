import React from 'react'
import styles from './Button.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import cn from 'classnames'

type PropsType = {
  id: string
  name: string
  icon: JSX.Element
}
export const Button: React.FC<PropsType> = ({ id, name, icon }) => {

  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div
      className={cn(styles.button, {
        [styles.buttonActive]: location.pathname.substring(1) === id ||
        (location.pathname === '/' && id === 'tokens'),
      })}>
      <div onClick={() => navigate(id === 'tokens' ? '/' : '/search')} className={styles.href}>
        <div
          className={cn(styles.icon, {
            [styles.iconActive]: location.pathname.substring(1) === id ||
            (location.pathname === '/' && id === 'tokens'),
          })}>{icon}</div>
        <span
          className={cn(styles.name, {
            [styles.nameActive]: location.pathname.substring(1) === id ||
            (location.pathname === '/' && id === 'tokens'),
          })}>{name}</span>
      </div>
    </div>


  )
}