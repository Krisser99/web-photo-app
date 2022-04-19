import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {Row, Col, Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.scss'
function Header() {
  return (
    <div>
      <header className="header">
        <Container>
          <Row className="justify-content-between">
            <Col xs="auto">
              <Link className='header__link header__logo' to="/photos">BEST IMAGES</Link>
            </Col>
            <Col xs='auto'>
              <NavLink
                className='header__link'
                to='/sign-in'
                activeclassname='active' 
              >
                Sign In
              </NavLink>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default Header