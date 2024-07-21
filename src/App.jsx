import { ToastContainer } from "react-toastify";
import { AppRouter } from "./components";
import 'react-toastify/dist/ReactToastify.css';

const App = () => (

	<div className="sm:container mx-auto sm:flex sm:justify-center my-52">
		<AppRouter />
		<ToastContainer />
	</div>

);

export default App;
