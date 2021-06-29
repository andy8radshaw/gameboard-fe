import React, { useState, useEffect } from 'react'

import CategoryCard from './components/CategoryCard'

import { getAllCategories } from './api/gameBoardAPI'

function App() {
  const [gameCategories, setGameCategories] = useState(null)
  // const [selectedCategories, setSelectedCategories] = useState([])
  const [randomEight, setRandomEight] = useState([])
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

  const createRandomEight = () => {
    const randomized = gameCategories.sort( () => Math.random() - 0.5)
    const firstEight = randomized.slice(0, 8)
    setRandomEight(firstEight)
    setUsedCategories(firstEight)
  }
  
  console.log('original categories:', gameCategories)
  console.log('randomEight is:', randomEight)
  console.log('usedCategories is:', usedCategories)

  return (
    <div>
      <h1>GameBoard</h1>
      <button onClick={createRandomEight}>Start</button>
      <CategoryCard />
    </div>
  )
}

export default App
