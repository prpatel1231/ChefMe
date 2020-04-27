import React, {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import RecipeAPI from '../../utils/RecipeAPI';



function RecipeBuilder () {
    //Think of a DRY way to update a state object that holds the entire recipe
    // const [recipeState, setRecipeState] = useState([{
    //     recipeTitle: 'Pizza', 
    //     ingredients: ["tomato", "oil"],
    //     instructions: [],
    //     public: true
    // }]);
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("");
    const [instructions, setInstructions] = useState([]);
    const [newInstruction, setNewInstruction] = useState("");

    const addIngredient = ingredient => setIngredients([...ingredients, ingredient])

    const updateIngredient = (event) => {
        const {name, value} = event.target.previousSibling;
        addIngredient([value])
        setNewIngredient("");
        console.log(ingredients);  
    }

    const addInstruction = instruction => setInstructions([...instructions, instruction])

    const updateInstructions = (event) => {
        const {name, value} = event.target.previousSibling;
        addInstruction([value])
        setNewInstruction("");
        console.log(instructions);  
    }

    const handleTitleChange = (event) => {
        const { name, value } = event.target;
        setTitle(value);
    
    };

    const saveRecipe = () => {
        const recipe = {
            recipeTitle: title,
            ingredient: {ingredients},
            instructions: {instructions}
        }

        RecipeAPI.createRecipe(recipe)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            });
    }

    
    
    
    return (
        <Container>
            <Form.Label>Recipe Title:</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control aria-describedby="basic-addon1" name ="recipeTitle"  onChange={handleTitleChange} placeholder="Enter a recipe title"/>
            </InputGroup>

            
            <Form.Label>Ingredients:</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control aria-describedby="basic-addon1" name ="ingredients" placeholder="Enter an ingredient"/>
                <Button variant="primary" onClick={updateIngredient}>Add</Button>
            </InputGroup>

            <Form.Label>Instructions:</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control aria-describedby="basic-addon1" name ="ingredients" placeholder="Enter an instruction"/>
                <Button variant="primary" onClick={updateInstructions}>Add</Button>
            </InputGroup>


            <Card>
                <Card.Header as="h5">Recipe Title: {title}</Card.Header>
                <Card.Body>
                    <Card.Title>Ingredients:</Card.Title>
                    <Card.Text>
                        <ul>
                            {ingredients.map((ingredient, index) =>{
                                return <li>{ingredient}</li>
                            })}
                        </ul>
                    </Card.Text>
                    <Card.Title>Instructions:</Card.Title>
                    <Card.Text>
                        <ul>
                            {instructions.map((instruction, index) =>{
                                return <li>{instruction}</li>
                            })}
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>            

            <Button onClick={saveRecipe}>Save Recipe</Button>           
        </Container>
    )
}

export default RecipeBuilder;


