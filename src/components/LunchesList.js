import React from "react";
import { MENU } from "../utils/constants";
import { formatter } from "../utils/formatter";
import "../styles/lunches.css";

function LunchesList(props) {
  const handleLunchPick = (lunch) => {
    props.handleLunchModalOpen(lunch);
  };

  return (
    <>
      <h3 className="title pt-5" id="zestawy">
        Zestawy obiadowe
      </h3>
      <div className="row">
        {MENU.lunches.map((lunch) => (
          <React.Fragment key={lunch.name}>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
              <div className="card card-lunches">
                <img
                  className="card-img-top"
                  srcSet={lunch.image}
                  alt={lunch.name}
                />
                <div className="card-body">
                  <h5 className="card-lunches-title">
                    {lunch.id}. {lunch.name}
                  </h5>
                  <div className="checkout">
                    <p className="checkout-price">
                      {formatter.format(lunch.price)}pln
                    </p>
                    <button
                      onClick={() => handleLunchPick(lunch)}
                      className="btn btn-outline-dark"
                      data-toggle=""
                      data-target=""
                    >
                      Wybierz
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default LunchesList;
