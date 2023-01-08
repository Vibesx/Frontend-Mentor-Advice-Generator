import React from "react";

import classes from "./GetAdviceButton.module.scss";
import iconDice from "../../assets/icon-dice.svg";

function GetAdviceButton(props) {
	return (
		<button
			className={`${classes.button} ${
				props.isLoading ? classes.disabled : classes.enabled
			}`}
			onClick={props.onClickHandler}
		>
			<img src={iconDice} alt="Generate Advice" />
		</button>
	);
}

export default GetAdviceButton;
