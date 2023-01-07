import React from "react";

import classes from "./Advice.module.scss";
import dividerDesktop from "../../assets/pattern-divider-desktop.svg";
import dividerMobile from "../../assets/pattern-divider-mobile.svg";

import Card from "../ui/Card";
import GetAdviceButton from "../ui/GetAdviceButton";

function Advice() {
	const adviceText =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam ea fugit a, modi rem iusto unde quis autem sed?";
	return (
		<Card>
			<div className={classes.adviceContainer}>
				<h6>ADVICE #117</h6>
				<p>&#8220;{`${adviceText}`}&#8221;</p>
				<picture className={classes.separator}>
					<source
						media="(min-width: 376px)"
						srcSet={dividerDesktop}
					/>
					<img
						src={dividerMobile}
						alt=""
						aria-hidden="true"
						className={classes.separator}
					/>
				</picture>
			</div>
			<GetAdviceButton></GetAdviceButton>
		</Card>
	);
}

export default Advice;
