import React from 'react'
import Banner from './Banner'
import ShoppingList from './ShoppingList'
import Footer from './Footer'

import { Container } from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
      <Banner />
      <Container>
        <ShoppingList />
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default App
