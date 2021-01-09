import React from 'react';
import "./day.css";
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Container, CardImg
} from 'reactstrap';

const Day = (props) => {
    return (
      <div>
          <div className="titel">
                      <h1>Hari Besar</h1>
                      <div className="line"></div>
                  </div>
        <Container>
        <div className=" card-deck">
        <Card>
          <CardImg
            alt="..."
            src=" https://images.unsplash.com/photo-1594788976979-3bf67ab26ca7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2F2ZSUyMHBsYXN0aWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            top
          ></CardImg>
          <CardBody>
            <CardTitle>21 MARET</CardTitle>
            <CardText>
              HARI HUTAN INTERNASIONAL
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="..."
            src=" https://images.unsplash.com/photo-1591888830219-bafb2b1a7dcc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODV8fHNhdmUlMjBwbGFzdGljfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            top
          ></CardImg>
          <CardBody>
            <CardTitle>21 NOVEMBER</CardTitle>
            <CardText>
              HARI POHON NASIONAL
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="..."
            src=" https://images.unsplash.com/photo-1594788965065-1791835b0b04?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHNhdmUlMjBwbGFzdGljfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            top
          ></CardImg>
          <CardBody>
            <CardTitle>22 MARET</CardTitle>
            <CardText>
              HARI AIR INTERNASIONAL
            </CardText>
          </CardBody>
        </Card>
      </div>
        </Container>
      </div>
    );
  };
  
  export default Day;

