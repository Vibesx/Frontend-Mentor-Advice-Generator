import React, { useCallback, useEffect } from "react";

import { useState } from "react";

import classes from "./Advice.module.scss";
import dividerDesktop from "../../assets/pattern-divider-desktop.svg";
import dividerMobile from "../../assets/pattern-divider-mobile.svg";

import useHttpRequest from "../hooks/use-http-request";

import Card from "../ui/Card";
import GetAdviceButton from "../ui/GetAdviceButton";
import LoadingSpinner from "../ui/LoadingSpinner";

const GET_ADVICE_URL = "https://api.adviceslip.com/advice";

function Advice() {
	const [adviceId, setAdviceId] = useState("");
	const [adviceText, setAdviceText] = useState("");
	const { isLoading, httpError, sendRequest } = useHttpRequest();

	const fetchDataAndPopulate = useCallback(async () => {
		// console.log(isLoading);
		const { slip } = await sendRequest(GET_ADVICE_URL);

		setAdviceId(slip.id);
		setAdviceText(slip.advice);
	}, [sendRequest]);

	const clickHandler = async () => {
		if (isLoading) {
			return;
		}
		await fetchDataAndPopulate();
		console.log("finished fetching");
	};

	useEffect(() => {
		const getAdvice = async () => {
			await fetchDataAndPopulate();
		};

		try {
			getAdvice();
		} catch (error) {
			console.error(error.message);
		}
	}, [sendRequest, fetchDataAndPopulate]);

	if (httpError) {
		return (
			<Card>
				<section>
					<p>{httpError}</p>
				</section>
			</Card>
		);
	}

	return (
		<Card>
			{isLoading ? (
				<LoadingSpinner></LoadingSpinner>
			) : (
				<section className={classes.adviceContainer}>
					<h6>{`ADVICE #${adviceId}`}</h6>
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
				</section>
			)}
			<GetAdviceButton
				onClickHandler={clickHandler}
				isLoading={isLoading}
			></GetAdviceButton>
		</Card>
	);
}

export default Advice;
