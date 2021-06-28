import axios from 'axios'

export const getAllCategories = () => {
  return axios.get('https://api.boardgameatlas.com/api/game/categories?pretty=true&client_id=jUFu1P5qDU')
}
