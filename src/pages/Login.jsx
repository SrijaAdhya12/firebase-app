import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const [formData, setformData] = useState({
		email: "",
		password: ""
	})
	const { logIn } = useAuth()
	const handleChange = (e) => {
		setformData({ ...formData , [e.target.name]: e.target.value})
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { email, password } = formData
			await logIn(email, password)
			toast.success("User logged succesfully");
		} catch (error) {
			console.error(error.message);
			toast.error(error.message);
		}
	};
	return (
			<main className="mx-6">
			<form onSubmit={handleSubmit} className="ring-1 ring-gray-300 p-6  sm:w-[600px]  w-full shadow-lg rounded-lg">
				<h3 className="text-3xl my-6">Login</h3>
				<div className="mb-3 flex flex-col gap-4 my-7">
					<label htmlFor="email">Email address</label>
					<input
						id="email"
						name="email"
						type="email"
						className="form-control border p-3 rounded-lg"
						placeholder="Enter email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="mb-3 flex flex-col gap-4 my-7">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						className="form-control border p-3 rounded-lg"
						placeholder="Enter password"
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</div>

					<button
						type="submit"
						className="bg-blue-600 text-white border px-10 py-3 rounded-lg w-full my-4"
					>
						Log In
					</button>
				<p className="text-right">
				Create an account <Link className="text-blue-600" to="/register">Register</Link>
				</p>
			</form>
		</main>
	);
};

export default Login;
