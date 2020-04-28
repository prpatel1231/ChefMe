import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RecipeAPI from '../../utils/RecipeAPI';
import { set } from 'mongoose';


function RecipeList() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        getRecipes();

    });

    const history = useHistory();

    const getRecipes = () => {
        RecipeAPI.getRecipes()
            .then((res) => {
                setRecipes(res.data)
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const deleteRecipe = (id) => {
        console.log(id);
        RecipeAPI.deleteRecipe(id)
            .then((res) => {
                getRecipes();
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        <div>
        <Button onClick={() => history.push("/createRecipe")}>Create a Recipe</Button>

            {recipes.map((recipe, index) => {
                return(
                    <Card key={recipe._id}>
                        <Card.Header as="h5">Recipe Title: {recipe.recipeTitle}</Card.Header>
                        <Card.Body>
                        <Button>Edit</Button>
                        <Button onClick={() => deleteRecipe(recipe._id)}>Delete</Button>
                        </Card.Body>
                    </Card>    
                    )
            })}
  
        </div>
        


    
    )
}

export default RecipeList;
