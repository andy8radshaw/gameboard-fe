import axios from 'axios'

const boardGameId = process.env.REACT_APP_BOARDGAME_ID

export const getAllCategories = () => {
  console.log(boardGameId)
  return axios.get(`https://api.boardgameatlas.com/api/game/categories?pretty=true&client_id=${boardGameId}`)
}
