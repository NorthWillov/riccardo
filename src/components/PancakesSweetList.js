import React from "react";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import { Row, Col, Button, Card } from "react-bootstrap";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/lunchesListStyles";

function PancakesSweetList(props) {
  const { classes } = props;

  const handlePancakeSweetPick = (pancake) => {
    props.handlePancakeModalOpen(pancake);
  };

  return (
    <section id="nalesnikisweet">
      <h3 className="title pt-5 mb-4">Naleśniki na słodko:</h3>
      <Row>
        {MENU.pancakes.sweet.map((pancake) => (
          <React.Fragment key={pancake.name}>
            <Col xs={6} md={4} lg={4} xl={3}>
              <Card className="mb-3">
                <Card.Img
                  onClick={() => handlePancakeSweetPick(pancake)}
                  variant="top"
                  src={pancake.image}
                  alt={pancake.name}
                />
                <Card.Body
                  className={classes.CardBody}
                  style={{ height: "120px" }}
                >
                  <Card.Title className={classes.title}>
                    {pancake.id}. {pancake.name}
                  </Card.Title>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{ fontSize: "12px" }}
                  >
                    {pancake.desc}
                  </Card.Subtitle>
                </Card.Body>
                <Card.Footer style={{ padding: "12px" }}>
                  <div className={classes.checkout}>
                    <p className={classes.checkoutPrice}>
                      {formatter.format(pancake.price)}zł
                    </p>
                    <Button
                      variant="outline-dark"
                      onClick={() => handlePancakeSweetPick(pancake)}
                      size="sm"
                      className="ml-2"
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

export default withStyles(styles)(PancakesSweetList);
