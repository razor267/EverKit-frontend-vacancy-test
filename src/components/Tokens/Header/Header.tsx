import React, { Dispatch, SetStateAction } from 'react'
import styles from './Header.module.css'
import { Categories } from './Categories/Categories'

type PropsType = {
  category: {
    id: string
    title: string
  }
setCategory: Dispatch<SetStateAction<{ id: string; title: string; }>>
}
export const Header:React.FC<PropsType> = ({category,setCategory}) => {
  return (
    <div className={styles.header}>
      <span className={styles.title}>Токены Everscale</span>
      <Categories
        category={category}
        setCategory={setCategory}
      />
    </div>
  )
}