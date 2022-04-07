import React from 'react'
import styles from './App.module.css'
import { Menu } from './components/Menu/Menu'
import { Tokens } from './components/Tokens/Tokens'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Search } from './components/Search/Search'
import { ErrorPage } from './components/ErrorPage/ErrorPage'
import { Token } from './components/Token/Token'

function App() {

  return (
    <div className={styles.app}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path='/' element={<Navigate to="/tokens" />} />
          <Route path='/tokens' element={<Tokens />} />
          <Route path='/search' element={<Search />} />
          <Route path='/token/:tokenName' element={<Token/>}/>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
