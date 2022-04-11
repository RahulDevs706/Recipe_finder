import React from 'react'
import s from "./Home.module.css"
import SearchBar from './Search/SearchBar'

const Home = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.sBarWrapper}>
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home