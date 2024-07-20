
import { ToastContainer } from "react-toastify";
import { AppRouter } from "./components";

const App = () => {

	return (
		<div className="flex justify-center my-28">
			<AppRouter />
			<ToastContainer />
		</div>
	);
};

export default App;
