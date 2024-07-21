import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Register = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	})
	const { signUp } = useAuth()

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { email, password } = formData
			await signUp(email, password);
			toast.success("User Registered");
		} catch (error) {
			console.error(error.message);
			toast.error(error.message);
		}
	};

	return (
		<main className="mx-6">
			<form onSubmit={handleSubmit} className="ring-1 ring-gray-300 p-6  sm:w-[600px] shadow-lg  rounded-lg">
				<h3 className="text-3xl my-6">Register</h3>
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
						className="bg-blue-600 text-white border px-10 py-3 rounded-lg  w-full my-4"
					>
						Sign Up
					</button>
				<p className="text-right">
					Already registered <Link className="text-blue-600" to="/login">Login</Link>
				</p>
			</form>
		</main>
	);
};

export default Register;
