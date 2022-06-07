import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../Api'
import { CategoryList } from '../components/CategoryList';

export default function Home() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then(data => {
      setCatalog(data.categories)
      setFilter(data.categories)
    })
  }, []);

  return (
    <>
      {!catalog.length ? (
        <h1>LOADING...</h1>
      ) : (
        <CategoryList catalog={catalog} />
      )}
    </>
  )
}
