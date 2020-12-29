import React from "react";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { Row, Col, Button, Card } from "react-bootstrap";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/lunchesListStyles";

function MakaronsList(props) {
  const { classes } = props;

  return (
    <div id="makarony">
      <h3>Makarony:</h3>
      <Row>
        {MENU.makarons.map((makaron) => (
          <React.Fragment key={makaron.name}>
            <Col sm={6} md={6} lg={4} xl={3}>
              <Card className="mb-3">
                <Card.Img
                  variant="top"
                  src={makaron.image}
                  alt={makaron.name}
                />
                <Card.Body className={classes.CardBody}>
                  <Card.Title>
                    {makaron.id}. {makaron.name}
                  </Card.Title>
                </Card.Body>
                <Card.Footer>
                  <div className={classes.checkout}>
                    <p className={classes.checkoutPrice}>
                      {formatter.format(makaron.price)}pln
                    </p>
                    <Button
                      variant="outline-dark"
                      // onClick={() => handleLunchPick(makaron)}
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

export default withStyles(styles)(MakaronsList);
