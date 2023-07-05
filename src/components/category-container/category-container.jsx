import CategoryItem from "../category-item/category-item" 

import "./category-container.scss"

const CategoryContainer = ({categories}) => {
  return(
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key= {category.id} category = {category}/>
      ))}
    </div>
  )
}

export default CategoryContainer