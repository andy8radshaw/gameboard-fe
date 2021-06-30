import React, { useState, useEffect } from 'react'

import CategoryCard from './components/CategoryCard'

import { getAllCategories } from './api/gameBoardAPI'

function App() {
  const [started, setStarted] = useState(false)
  const [gameCategories, setGameCategories] = useState(null)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [currentCategories, setCurrentCategories] = useState([])
  const [usedCategories, setUsedCategories] = useState([])

  const getData = async () => {
    try {
      const res = await getAllCategories()
      setGameCategories(res.data.categories)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const createCurrentCategories = () => {
    const randomized = gameCategories.sort( () => Math.random() - 0.5)
    const firstEight = randomized.slice(0, 8)
    setCurrentCategories(firstEight)
    setUsedCategories(firstEight)
    setStarted(true)
  }

  const updateCurrentCategories = () => {
    console.log('updating current categories')
  }

  const removeFromSelected = id => {
    console.log('i want to remove a selected category')
    setSelectedCategories(selectedCategories.filter(categoryId => {
      if (categoryId === id) {
        return 
      } else return categoryId
    }))
  }

  const handleCategorySelection = (e, id) => {
    e.preventDefault()
    if (selectedCategories.length === 4 && !selectedCategories.includes(id)) return // add message to user here saying maximum selected
    if (selectedCategories.includes(id)) {
      removeFromSelected(id)
    } else {
      setSelectedCategories([...selectedCategories, id])
    }
  }
  
  console.log('currentCategories is:', currentCategories)
  console.log('usedCategories is:', usedCategories)
  console.log('selectedCategories is:', selectedCategories)

  return (
    <div>
      <h1>GameBoard</h1>
      <button className={started ? 'hidden' : ''} onClick={createCurrentCategories}>Start</button>
      <button onClick={updateCurrentCategories}>more categories</button>
      {currentCategories.map(category => {
        return (
          <CategoryCard 
            key={category.id}
            handleCategorySelection={handleCategorySelection}
            selectedCategories={selectedCategories}
            {...category}
          />
        )
      }

        
      )}
    </div>
  )
}

export default App
