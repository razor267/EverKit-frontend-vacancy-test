import React, { Dispatch, SetStateAction } from 'react'
import styles from './Categories.module.css'
import cn from 'classnames'
import { categories } from '../../../../tokens'

type PropsType = {
  category: {
    id: string
    title: string
  }
  setCategory: Dispatch<SetStateAction<{ id: string; title: string; }>>
}
export const Categories: React.FC<PropsType> = ({ category, setCategory }) => {

  return (
    <div className={styles.wrapper}>
      {categories.map(c => <div
        className={cn(styles.item, {
          [styles.itemActive]: c.id === category.id,
        })}
        key={c.id}
        onClick={() =>setCategory(c)}
      >{c.title}</div>)}
    </div>
  )
}