import { Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

function CartNavbar() {

    return (
        <Navbar.Collapse className="justify-content-end">
            <FontAwesomeIcon icon={faBasketShopping} />
        </Navbar.Collapse>
    )
}

export default CartNavbar
