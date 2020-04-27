import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import UserAPI from '../../utils/UserAPI';


function RegistrationForm () {
    const [registerState, setRegisterState] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRegisterState({...registerState, [name]: value});
    
    };

    const signup = (event) => {
        event.preventDefault();
        const user = {
            firstName: registerState.firstName,
            lastName: registerState.lastName,
            userName: registerState.userName,
            email: registerState.email,
            password: registerState.password
        }

        console.log("user object to send" + user)


        UserAPI.createUser(user)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

    };


    return (
        
        <Container>
            <Form>
                <Form.Group controlId='formBasicFirstName'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="firstName" placeholder="Enter First Name" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId='formBasicLastName'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastName" placeholder="Enter Last Name" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId='formBasicUserName'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="userName" placeholder="Enter Username" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control name="email" placeholder="Enter email" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" placeholder="Enter password" onChange={handleInputChange} />
                </Form.Group>
                <Button variant='primary' type='submit' onClick={signup}>Register</Button>
            </Form>
        </Container>  
        
    );
}

export default RegistrationForm;