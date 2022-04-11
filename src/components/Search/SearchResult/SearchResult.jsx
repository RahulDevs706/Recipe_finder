import React from 'react'
import { useSelector } from 'react-redux'
import ResultCard from '../ResultCard/ResultCard'
import s from "./SearchResult.module.css"
import Pagination from '../../layout/pagination/Pagination';
const SearchResult = () => {
  const {result} = useSelector(state=>state.search);

  let page = Math.ceil((result?.length)/12);

  return (
    <>
      <div className={s.container}>
        <div className={s.wrapper}>
          {result.length>0 && <h1>
            Available Recipes:
          </h1>}
          <div className={s.resultWrapper}>
            {result?.length > 0 ? (
              <>
                <Pagination
                  data={result}
                  RenderComponent={ResultCard}
                  pageLimit={page}
                  dataLimit={12}
                />
              </>
              ) : (
              <h1 className={s.noResult}>Please broaden your search</h1>
              )}

          </div>
        </div>
      </div>
    </>
  )
}

export default SearchResult