import { plantList } from '../datas/plantList'
import { Row, Col } from 'react-bootstrap'
import PlantItem from './PlantItem'


function ShoppingList() {
    const title = 'Shopping list'

    return (
        <div className="my-5">
            <h2>{title}</h2>
            <Row xs={1} md={4} className="g-4">
                {plantList.map((plant) => (
                    <Col>
                        <PlantItem
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
