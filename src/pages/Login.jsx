import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { logIn } = useAuth()
	const navigate = useNavigate()
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await logIn(email, password)
			navigate("/profile")
			toast.success("User logged succesfully", {
				position: "top-center"
			});
		} catch (error) {
			console.log(error.message);
			toast.error(error.message);
		}
	};
	return (
		<main>
			<form onSubmit={handleSubmit} className="ring-1 ring-gray-300 p-6 w-[600px]">
				<h3 className="text-3xl my-6">Login</h3>
				<div className="flex flex-col gap-4 my-7">
					<label>Email address</label>
					<input
						type="email"
						className="form-control border p-3 rounded-xl"
						value={email}
						placeholder="Enter email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="flex flex-col gap-4 my-7">
					<label>Password</label>
					<input
						type="password"
						className="form-control border p-3 rounded-xl"
						placeholder="Enter password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary bg-blue-600 text-white border px-10 py-3 rounded-2xl"
					>
						Submit
					</button>
				</div>
				<p className="forgot-password text-right">
					New user <Link to="/register">Register Here</Link>
				</p>
			</form>
		</main>
	);
};

export default Login;
