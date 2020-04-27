import axios from "axios";

export default {
  getRecipes: () => {
    return axios.get('api/recipes');
  },
  createRecipe: (data) => {
    return axios.post('api/createRecipe');
  }
};