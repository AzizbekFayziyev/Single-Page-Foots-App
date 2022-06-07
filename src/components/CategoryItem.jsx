import { Link } from "react-router-dom"

function CategoryItem(props) {
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = props
    return (
        <div className="card">
            <div className="card-header">
                <img src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className="card-body">
                <h3>{strCategory}</h3>
                <p>{strCategoryDescription.slice(0, 100)}</p>
                <Link to={`/category/${strCategory}`} className="btn btn-secondary">Watch Category</Link>
            </div>
        </div>
    )
}

export { CategoryItem }