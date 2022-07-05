import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Container } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Container>
    <App />
  </Container>
);
