import React from "react";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { Row, Col, Button, Card } from "react-bootstrap";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/lunchesListStyles";

function LunchesList(props) {
  const { classes } = props;

  const handleLunchPick = (lunch) => {
    props.handleLunchModalOpen(lunch);
  };

  return (
    <section id="zestawy">
      <h3 className="title pt-5 mb-4">Zestawy obiadowe:</h3>
      <Row>
        {MENU.lunches.map((lunch) => (
          <React.Fragment key={lunch.name}>
            <Col sm={6} md={6} lg={4} xl={3}>
              <Card className="mb-3">
                <Card.Img variant="top" src={lunch.image} alt={lunch.name} />
                <Card.Body className={classes.CardBody}>
                  <Card.Title>
                    {lunch.id}. {lunch.name}
                  </Card.Title>
                </Card.Body>
                <Card.Footer>
                  <div className={classes.checkout}>
                    <p className={classes.checkoutPrice}>
                      {formatter.format(lunch.price)}pln
                    </p>
                    <Button
                      variant="outline-dark"
                      onClick={() => handleLunchPick(lunch)}
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

export default withStyles(styles)(LunchesList);
