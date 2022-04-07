import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './Search.module.css'
import { menu } from '../../menu'
import { tokens } from '../../tokens'
import { TokenItem } from '../Tokens/TokenItem/TokenItem'
import { useSearchParams } from 'react-router-dom'

export const Search = () => {
  let [searchStr, setSearchStr] = useState('')
  let [items, setItems] = useState<TokenType[] | null>(null)
  let [searchParams, setSearchParams] = useSearchParams()

  const searchQuery = searchParams.get('search') || ''

  useEffect(() => {
    if (searchQuery !== '') {
      setItems(tokens.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.symbol.toLowerCase().includes(searchQuery.toLowerCase())))
    }
  }, [searchQuery])

  const search = (str: string) => {
    let searchResults: TokenType[] = []
    searchResults = tokens.filter(item => item.name.toLowerCase().includes(str.toLowerCase()) ||
      item.symbol.toLowerCase().includes(str.toLowerCase()))
    setItems(searchResults)
    setSearchParams({ search: searchStr })
    setSearchStr('')
  }

  return (
    <div className={styles.search}>
      <div className={styles.title}>Поиск</div>
      <div>
        <span><input
          className={styles.input}
          placeholder='Поиск...'
          value={searchStr}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchStr(e.currentTarget.value)}
          onKeyDown={(e: React.KeyboardEvent) => e.key === 'Enter' && search(searchStr)}
        /></span>
        <span className={styles.button} onClick={() => search(searchStr)}>{menu[1].icon}</span>
      </div>
      {items && items.length > 0 &&
      <div className={styles.results}>Количество найденных токенов: {items.length}</div>}
      {items?.length === 0 && <div className={styles.results}>Нет результатов поиска</div>}
      {items && items.map((item) => <TokenItem item={item} key={item.id} />)}
    </div>
  )
}

type TokenType = {
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