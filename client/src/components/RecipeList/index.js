import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import RecipeAPI from '../../utils/RecipeAPI';


function RecipeList() {
    const [recipes, setRecipes] = useState([])

    // useEffect(() => {
    //     getRecipes();

    // });

    const getRecipes = () => {
        RecipeAPI.getRecipes()
            .then((res) => {
                console.log(res.data)
                
            })
            .catch((err) => {
                console.log(err)
            });


    }


    return (
        <Card>
            <Card.Header as="h5">Recipe Title:</Card.Header>
            <Card.Body>
                <Card.Title>Ingredients:</Card.Title>
                <Card.Text>
                    <ul>
                        <li>Placeholder for Ingredients</li>
                    </ul>
                </Card.Text>
                <Card.Title>Instructions:</Card.Title>
                <Card.Text>
                    <ul>
                        <li>Placeholder for Instructions</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>   

    )
}

export default RecipeList;
