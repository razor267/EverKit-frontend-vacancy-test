import React from 'react'
import styles from './Menu.module.css'
import logoIcon from './logo.svg'
import { menu } from '../../menu'
import { Button } from './Button/Button'
import { useNavigate } from 'react-router-dom'

export const Menu = () => {

  const navigate = useNavigate()

  return (
    <div className={styles.menu}>
        <img className={styles.logo} onClick={() => navigate('/tokens')}src={logoIcon} alt='logo' />
      {menu.map((item) => (
        <Button
          id={item.id}
          name={item.title}
          icon={item.icon}
          key={item.id}
        />
      ))}
      <div className={styles.language}>Русский</div>
    </div>
  )
}