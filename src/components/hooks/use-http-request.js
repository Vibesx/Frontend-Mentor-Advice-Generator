import { useState, useCallback } from "react";

const useHttpRequest = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState();
	const sendRequest = useCallback(async (url, options) => {
		try {
			// TODO this is a workaround because the spinner is not showing when manually generate a new advice; needs investigating
			setIsLoading(true);
			const response = await fetch(url, options);
			if (!response.ok) {
				throw new Error("Something went wrong!");
			}
			setIsLoading(false);
			return await response.json();
		} catch (error) {
			setIsLoading(false);
			setHttpError(error.message);
		}
	}, []);

	return {
		isLoading,
		httpError,
		sendRequest,
	};
};

export default useHttpRequest;
