import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/odina2.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from '../assets/img/logo-github-white.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
         
          <Col size={12} sm={18} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/devam-patel-ddp7/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/devampatel7"><img src={github} alt="Icon" /></a>
            </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
