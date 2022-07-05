import { plantList } from '../datas/plantList'
import { Card, Row, Col, Button } from 'react-bootstrap'


function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]

    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

function ShoppingItem({ name, category, image, id, light, water }) {
    return (
        <Card>
            <Card.Img variant="top" src={ image } />
            <Card.Body>
                <Card.Title>{ name.toUpperCase() }</Card.Title>

                <Card.Text>
                    { category.toUpperCase() }
                    <CareScale careType='light' scaleValue={ light } />
                    <CareScale careType='water' scaleValue={ water } />
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
                        <ShoppingItem
                            name={ plant.name }
                            category={plant.category}
                            image={plant.image}
                            id={plant.id}
                            light={2}
                            water={1}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default ShoppingList
