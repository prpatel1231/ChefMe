import React, {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



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
        const { name, value } = event.target.previousSibling;
        setTitle({...title, });
    
    };

    
    
    
    return (
        <Container>
            <Form.Label>Recipe Title:</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control aria-describedby="basic-addon1" name ="recipeTitle" placeholder="Enter a recipe title"/>
                <Button variant="primary" onClick={handleTitleChange}>Add</Button>
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

            <ul>
                <li>Placeholder to display recipe</li>

            </ul>

            <Button>Save Recipe</Button>  
            <InputGroup.Prepend>
                <InputGroup.Text>Checkbox to make Recipe private</InputGroup.Text>
                <InputGroup.Checkbox aria-label="Checkbox for making recipe private"/>
            </InputGroup.Prepend>           
        </Container>
    )
}

export default RecipeBuilder;


