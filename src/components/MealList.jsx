import { MealItem } from "./MealItem"

function MealList({meals}) {
    return(
        <div className="List">
          {meals.map(meal => (
              <MealItem key={meal.idMeal} {...meal} />
          ))}
        </div>
    )
}

export {MealList}