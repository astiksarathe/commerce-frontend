import React from "react";

import PersonalDetails from "./personalDetails/PersonalDetails";
import Assurance from "./assurance/Assurance";

const FirstStep = () => {
  return (
    <>
      <div className="checkout_card">
        <PersonalDetails />
      </div>
      <Assurance />
    </>
  );
};

export default FirstStep;
