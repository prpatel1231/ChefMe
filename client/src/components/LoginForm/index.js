import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function LoginForm () {
    const [loginState, setLoginState] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginState({...loginState, [name]: value});
    
    };

    const history = useHistory();
    

    
    return (
        <Container>
            <Form>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control name="email" placeholder="Enter email" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" placeholder="Enter password" onChange={handleInputChange} />
                </Form.Group>
                <Button variant='primary' type='submit'>Login</Button>
                <Button variant='primary' type='submit' onClick={() => history.push("/Register")}>Register</Button>
            </Form>
        </Container>    
    );
}

export default LoginForm;