import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Container, Form } from 'react-bootstrap';

function CreateAccount(){
    return(
        <Container>
            <h2>Criar conta</h2>

            <Form>
                <Form.Group>
                    <Form.Label>Nome de usuario</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome"></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>senha</Form.Label>
                    <Form.Control type="password" placeholder="Digite sua senha"></Form.Control>
                </Form.Group>
                
            </Form>

        </Container>



    )
}

export default CreateAccount;