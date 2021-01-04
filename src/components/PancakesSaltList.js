import React from "react";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { Row, Col, Button, Card } from "react-bootstrap";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/lunchesListStyles";

function PancakesSaltList(props) {
  const { classes } = props;

  const handlePancakeSaltPick = (pancake) => {
    props.handlePancakeModalOpen(pancake);
  };

  return (
    <div className={classes.root} id="nalesnikisalt">
      <h3 className="title pt-5 mb-4">Naleśniki na słono:</h3>
      <Row>
        {MENU.pancakes.salt.map((pancake) => (
          <React.Fragment key={pancake.name}>
            <Col sm={6} md={6} lg={4} xl={3}>
              <Card className="mb-3">
                <Card.Img
                  variant="top"
                  src={pancake.image}
                  alt={pancake.name}
                />
                <Card.Body className={classes.CardBody}>
                  <Card.Title>
                    {pancake.id}. {pancake.name}
                  </Card.Title>
                </Card.Body>
                <Card.Footer>
                  <div className={classes.checkout}>
                    <p className={classes.checkoutPrice}>
                      {formatter.format(pancake.price)}pln
                    </p>
                    <Button
                      variant="outline-dark"
                      onClick={() => handlePancakeSaltPick(pancake)}
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
    </div>
  );
}

export default withStyles(styles)(PancakesSaltList);
