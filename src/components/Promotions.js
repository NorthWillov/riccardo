import React from "react";
import { Carousel } from "react-bootstrap";
import officeImg from "../images/office.jpg";
import studentsImg from "../images/students.jpg";
import familyImg from "../images/family.jpg";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/PromotionsStyles";

function Promotions(props) {
  const { classes } = props;

  return (
    <div id="promocje" style={{ paddingTop: "120px" }}>
      <h3 className="title pb-4">Promocje:</h3>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={officeImg}
            alt="Rabaty dla firm"
          />
          <Carousel.Caption>
            <h3 className={classes.title}>Rabaty dla firm</h3>
            <p className={classes.subtitle}>
              -5% na wszystkie dania. Przy większych zamówieniach negocjujemy
              ceny.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={studentsImg}
            alt="Studenci jedzą taniej"
          />
          <Carousel.Caption>
            <h3 className={classes.title}>Studenci jedzą taniej</h3>
            <p className={classes.subtitle}>-5% na wszystkie dania</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={familyImg}
            alt="Rodzinne obiadki"
          />
          <Carousel.Caption>
            <h3 className={classes.title}>Rodzinne obiadki</h3>
            <p className={classes.subtitle}>
              -5% przy zamówieniu powyżej 70 zł (w lokalu)
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default withStyles(styles)(Promotions);
