import React from "react"
import { Card, Button } from "react-bootstrap"

function addToCart(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

function showCareInfo(scaleValue, careType) {
    const quantity = {
        1: 'peu',
        2: 'modérément',
        3: 'beaucoup'
    }
    const type = careType === 'light' ? 'de lumière' : 'd\'eau'
    const alertText = `Cette plante requiert ${quantity[scaleValue]} ${type}`

    alert(alertText)
}

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <p onClick={ () => showCareInfo(scaleValue, careType) }>
            {careType}:
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </p>
    )
}

function PlantItem({ name, category, image, id, light, water }) {
    return (
        <Card id={'plant_id-'+id}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name.toUpperCase()}</Card.Title>

                <Card.Text>
                    <CareScale careType='light' scaleValue={light} />
                    <CareScale careType='water' scaleValue={water} />
                </Card.Text>

                <Button variant="primary" onClick={() => addToCart(name)}>
                    Add to cart
                </Button>
            </Card.Body>
        </Card>
    )
}

export default PlantItem
