import axios from "axios";

export default {
  getRecipes: () => {
    return axios.get('recipes/');
  },
  deleteRecipe: (id) => {
    return axios.delete('recipes/'+ id);
  },
  createRecipe: (data) => {
    return axios.post('/api/createRecipe');
  }
};