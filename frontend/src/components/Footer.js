import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; HappyShop |{" "}
            <a href="https://linkedin.com/in/tamojay">Tamojay Dey</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
