import { Link } from "react-router-dom";

function MealItem(props) {
    const { strMeal, strMealThumb, idMeal } = props;

    return(
        <div className="list container">
            <div className="card">
        <div className="card-header">
            <img src={strMealThumb} alt={strMeal} />
        </div>
        <div className="card-body">
            <h3>{strMeal}</h3>
            <Link to={`/meal/${idMeal}`} className="btn btn-secondary">Watch Recipe</Link>
        </div>
    </div>
        </div>
    )
}

export { MealItem }