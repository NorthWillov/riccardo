import React from "react";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { Row, Col, Button, Card } from "react-bootstrap";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/lunchesListStyles";

function PancakesSweetList(props) {
  const { classes } = props;

  const handlePancakeSweetPick = (pancake) => {
    props.handlePancakeSweetModalOpen(pancake);
  };

  return (
    <>
      <h3 className="title pt-5 mb-4" id="salatki">
        Sałatki:
      </h3>
      <Row>
        {MENU.pancakes.sweet.map((pancake) => (
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
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{ fontSize: "12px" }}
                  >
                    {pancake.desc}
                  </Card.Subtitle>
                </Card.Body>
                <Card.Footer>
                  <div className={classes.checkout}>
                    <p className={classes.checkoutPrice}>
                      {formatter.format(pancake.price)}pln
                    </p>
                    <Button
                      variant="outline-dark"
                      onClick={() => handlePancakeSweetPick(pancake)}
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
    </>
  );
}

export default withStyles(styles)(PancakesSweetList);
