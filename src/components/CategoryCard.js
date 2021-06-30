import React from 'react'

export default function CategoryCard({ name, id, handleCategorySelection, selectedCategories }) {
  const selected = selectedCategories.includes(id)
  return (
    <div
      onClick={(event) => handleCategorySelection(event, id)}
      className={selected ? 'selected' : ''}
    >
      {name}
    </div>
  )
}