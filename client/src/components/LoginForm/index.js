import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import UserAPI from '../../utils/UserAPI';


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

    const login = (event) => {
        event.preventDefault();
        const user = {
            email: loginState.email,
            password: loginState.password
        
        };

        UserAPI.findUser(user)
            .then((res) => {
                console.log(res.data);
                window.location.replace("/recipes");
            })
            .catch((err) => {
                console.log(err);
            })

    }

    

    
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
                <Button variant='primary' type='submit' onClick={login}>Login</Button>
                <Button variant='primary' type='submit' onClick={() => history.push("/signup")}>Register</Button>
            </Form>
        </Container>    
    );
}

export default LoginForm;