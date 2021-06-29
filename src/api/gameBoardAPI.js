import axios from 'axios'

const boardGameId = process.env.REACT_APP_BOARDGAME_ID

export const getAllCategories = () => {
  return axios.get(`https://api.boardgameatlas.com/api/game/categories?pretty=true&client_id=${boardGameId}`)
}
