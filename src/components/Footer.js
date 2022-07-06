import { React, useState } from 'react'
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap'


function EmailForm() {
    const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
        }
    }

    return (
        <div>
            <Form>
            <Form.Label>Subscribe to our newsletter !</Form.Label>
            <InputGroup>
                <Form.Control
                    placeholder='Username'
                    onChange={handleInput}
                    value={inputValue}
                    onBlur={handleBlur}
                    type='email'
                />

                <Button variant="primary">
                    Sign Up
                </Button>
            </InputGroup>
            </Form>
        </div>
    )
}

function Footer() {
    const title = 'jungle house'

    return (
        <div class='bg-light py-3'>
            <Container>
                <Row>
                    <h5>{title.toUpperCase()}</h5>
                </Row>

                <Row>
                    <Col>
                        <EmailForm />
                    </Col>

                    <Col>
                        <p>Nothing yet</p>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Footer
