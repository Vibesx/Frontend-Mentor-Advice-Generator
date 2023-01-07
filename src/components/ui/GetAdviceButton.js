import React from "react";

import classes from "./GetAdviceButton.module.scss";
import iconDice from "../../assets/icon-dice.svg";

function GetAdviceButton() {
	return (
		<button className={classes.button}>
			<img src={iconDice} alt="Generate Advice" />
		</button>
	);
}

export default GetAdviceButton;
