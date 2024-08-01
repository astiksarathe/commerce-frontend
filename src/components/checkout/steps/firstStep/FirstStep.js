import React from "react";

import PersonalDetails from "./personalDetails/PersonalDetails";
import Assurance from "./assurance/Assurance";

const FirstStep = ({ stepHandler }) => {
  return (
    <>
      <div className="checkout_card">
        <PersonalDetails stepHandler={stepHandler} />
      </div>
      <Assurance />
    </>
  );
};

export default FirstStep;
