import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFilterCategory } from '../Api'
import { MealList } from '../components/MealList';

export default function Category() {

  const { name } = useParams();
  const [meals, setMeals] = useState([])

  useEffect(() => {
    getFilterCategory(name).then(data => setMeals(data.meals))
  }, [name])

  return (
    <>
      {!meals.length ? <h1>Loading...</h1> : <MealList meals={meals}/>}
    </>
  )
}
