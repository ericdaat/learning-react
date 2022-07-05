import { CardGroup, Navbar } from "react-bootstrap"

import CartNavbar from './Cart'

function Banner() {
    const title = 'jungle house'

    return (
        <Navbar bg="white" expand="lg">
            <Navbar.Brand>{title.toUpperCase()}</Navbar.Brand>
            <Navbar.Toggle />
            <CartNavbar />
        </Navbar>
    )
}

export default Banner
