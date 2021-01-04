import React from "react";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { Row, Col, Button, Card } from "react-bootstrap";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/lunchesListStyles";

function SaladsList(props) {
  const { classes } = props;

  const handleSaladPick = (salad) => {
    props.handleSaladModalOpen(salad);
  };

  return (
    <section id="salatki">
      <h3 className="title pt-5 mb-4">Sałatki:</h3>
      <Row>
        {MENU.salads.map((salad) => (
          <React.Fragment key={salad.name}>
            <Col sm={6} md={6} lg={4} xl={3}>
              <Card className="mb-3">
                <Card.Img variant="top" src={salad.image} alt={salad.name} />
                <Card.Body className={classes.CardBody}>
                  <Card.Title>
                    {salad.id}. {salad.name}
                  </Card.Title>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{ fontSize: "12px" }}
                  >
                    {salad.desc}
                  </Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                  <div className={classes.checkout}>
                    <p className={classes.checkoutPrice}>
                      {formatter.format(salad.price)}pln
                    </p>
                    <Button
                      variant="outline-dark"
                      onClick={() => handleSaladPick(salad)}
                    >
                      Wybierz
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </section>
  );
}

export default withStyles(styles)(SaladsList);
