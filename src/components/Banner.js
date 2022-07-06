import { Navbar, Container } from 'react-bootstrap'
import CartNavbar from './Cart'

function Banner() {
    const title = 'jungle house'

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>{title.toUpperCase()}</Navbar.Brand>
                <Navbar.Toggle />
                <CartNavbar />
            </Container>
        </Navbar>
    )
}

export default Banner
