import React, { useEffect, useState } from 'react'
import { categories, tokens } from '../../tokens'
import styles from './Tokens.module.css'
import { Header } from './Header/Header'
import { TokenItem } from './TokenItem/TokenItem'
import { useSearchParams } from 'react-router-dom'

export const Tokens = () => {

  const [category, setCategory] = useState(categories[0])
  let [filterParams, setFilterParams] = useSearchParams()

  const filterQuery = filterParams.get('filter') || ''

  useEffect(() => {
    if (category.id !== 'all') {
      setFilterParams({ filter: category.id })
    } else {
      setFilterParams('')
    }
  }, [category, setFilterParams])

  useEffect(() => {
    if (filterQuery !== '') {
      setCategory({ id: filterQuery, title: '' })
    }
  }, [filterQuery])

  return (
    <div className={styles.wrapper}>
      <Header
        category={category}
        setCategory={setCategory}
      />
      {tokens.map(item => {
        if (item.categories.includes(category.id) || category.id === 'all') {
          return <TokenItem item={item} key={item.id} />
        } else return null
      })}
    </div>
  )
}