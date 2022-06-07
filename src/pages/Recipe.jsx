import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { getMealById } from '../Api.jsx';


export default function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]))
    }, [])

    return (
        <div className='container'>
            <Link to="/"><button className='btn btn-primary'>Go To Home</button></Link>
            {!recipe.idMeal ? <h1>Loading..</h1> : (
                <div className="recipe">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1>Name: {recipe.strMeal} <sup>{recipe.strCategory}</sup></h1>
                    {recipe.strArea ? <h5>Area: {recipe.strArea}</h5> : null}
                    <p>{recipe.strInstructions}</p>
                    {recipe.strYoutube ? (
                        <div className="video">
                            <h5>Video Recipe:</h5>
                            <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen title={id}></iframe>
                        </div>
                    ) : <p>Video Failed ):</p>}
                </div>
            )}
        </div>
    )
}


