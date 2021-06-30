import React from 'react'

export default function CategoryCard({ name, id, selectCategory, selectedCategories }) {
  const selected = selectedCategories.includes(id)
  return (
    <div
      value={id}
      onClick={(event) => selectCategory(event, id)}
      className={selected ? 'selected' : ''}
    >
      {name}
    </div>
  )
}