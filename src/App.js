import classes from "./App.module.scss";

import Advice from "./components/advice/Advice";

function App() {
	return (
		<div className={classes.app}>
			<Advice></Advice>
		</div>
	);
}

export default App;
