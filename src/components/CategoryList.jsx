import { CategoryItem } from "./CategoryItem"

function CategoryList({ catalog = [] }) {

    return (
        <div className="list container">
            {catalog.map(el => (
                <CategoryItem key={el.idCategory} {...el} />
            ))}
        </div>
    )
};

export { CategoryList }