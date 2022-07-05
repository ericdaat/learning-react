import { plantList } from '../datas/plantList'
import { Card, Row, Col, Button } from 'react-bootstrap'

function PlantCard({ plant }) {
    return (
        <Card>
            <Card.Img variant="top" src={ plant.image } />
            <Card.Body>
                <Card.Title>{ plant.name.toUpperCase() }</Card.Title>

                <Card.Text>
                    { plant.category.toUpperCase() }
                </Card.Text>

                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    )
}

function ShoppingList() {
    const title = 'Shopping list'

    return (
        <div class="my-5">
            <h2>{title}</h2>
            <Row xs={1} md={4} className="g-4">
                {plantList.map((plant) => (
                    <Col>
                        <PlantCard plant={ plant } />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default ShoppingList
