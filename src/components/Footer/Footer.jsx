import React from 'react'
import "./footer.css"
import {Container,Row,Col,ListGroup,ListGroupItem} from "reactstrap"
import { Link } from 'react-router-dom'
import logo from "../../assets/images/eco-logo.png"

const Footer = () => {
  const year=new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'> 
          <div className="logo">
            
            <div>
            <h1 className='text-white'>Multimart</h1>
            <p className='text-white'>Since 2023</p>
            </div>
            
            </div>
            <p className="footer__text mt-4">Lorem ipsum dolor sit amet 
            consectetur, adipisicing elit. Neque atque consectetur
             impedit labore eveniet. Repellat inventore
             quis officiis quia iure.</p>
          </Col>

          <Col lg='3'> 
<div className="footer__quick__links">
  <h4 className="quick__links-title">Top Categories</h4>
  <ListGroup>
    <ListGroupItem className='ps-0 border-0'>
      <Link to='#'>MobilePhone</Link>
    </ListGroupItem>

    <ListGroupItem className='ps-0 border-0'>
      <Link to='#'>Modern Sofa</Link>
    </ListGroupItem>

    <ListGroupItem className='ps-0 border-0'>
      <Link to='#'>Arm Chair</Link>
    </ListGroupItem>

    <ListGroupItem className='ps-0 border-0'>
      <Link to='#'>Smart Watches</Link>
    </ListGroupItem>
  </ListGroup>

</div>
</Col>
          <Col lg='2'>
          <div className="footer__quick__links">
  <h4 className="quick__links-title">UseFull Links</h4>
  <ListGroup>
    <ListGroupItem className='ps-0 border-0'>
      <Link to='/shop'>Shop</Link>
    </ListGroupItem>

    <ListGroupItem className='ps-0 border-0'>
      <Link to='/cart'>Cart</Link>
    </ListGroupItem>

    <ListGroupItem className='ps-0 border-0'>
      <Link to='/login'>Login</Link>
    </ListGroupItem>

    <ListGroupItem className='ps-0 border-0'>
      <Link to='#'>Privacy Policy</Link>
    </ListGroupItem>
  </ListGroup>

</div>
             </Col>

          <Col lg='1'> 
          <div className="footer__quick__links">
  <h4 className="quick__links-title">Contact</h4>
  <ListGroup className='footer__contacts'>
    <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
    <span><i class="ri-map-pin-line"></i></span>
    <p>23,banjarahills ,RoadNo:3</p>
    </ListGroupItem>

    <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
    <span><i class="ri-phone-line"></i></span>
    <p>91000000000</p>
    </ListGroupItem>
    
    <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
    <span><i class="ri-mail-line"></i></span>
    <p>abc@gmail.com</p>
    </ListGroupItem>
  </ListGroup>

</div>
          </Col>
<Col lg='12'>
  <div className="footer__copyright">Copyright {year} .All Rights are Reserved</div>
</Col>
        </Row>
      </Container>

    </footer>
  )
  
}

export default Footer