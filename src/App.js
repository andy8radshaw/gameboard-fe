import React, { useState, useEffect } from 'react'

import { getAllCategories } from './api/gameBoardAPI'

function App() {
  const [gameCategories, setGameCategories] = useState(null)

  const getData = async () => {
    try {
      const res = await getAllCategories()
      setGameCategories(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(gameCategories)
  return <h1>GameBoard</h1>
}

export default App
