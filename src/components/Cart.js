import { Button, NavDropdown, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

function CartNavbar() {
    const title = <FontAwesomeIcon icon={faBasketShopping} />

    return (
        <Navbar.Collapse className="justify-content-end">
            <NavDropdown title={ title }>
                <NavDropdown.Item>
                    Action
                </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
    )
}

export default CartNavbar
