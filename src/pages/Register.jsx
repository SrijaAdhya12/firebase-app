import { auth } from "../firebase";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signUp } = useAuth()

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signUp(auth, email, password);
			toast.success("User Registered", {
				position: "bottom-center",
			});
		} catch (error) {
			console.log(error.message);
			toast.success(error.message, {
				position: "top-center",
			});
		}
	};

	return (
		<main>
		<form onSubmit={handleSubmit} className="ring-1 ring-gray-300 p-6 w-[600px]">
			<h3 className="text-3xl my-6">Sign Up</h3>
			<div className="mb-3 flex flex-col gap-4 my-7">
				<label>Email address</label>
				<input
					type="email"
					className="form-control border p-3 rounded-xl"
					placeholder="Enter email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>

			<div className="mb-3 flex flex-col gap-4 my-7">
				<label>Password</label>
				<input
					type="password"
					className="form-control border p-3 rounded-xl"
					placeholder="Enter password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>

			<div className="d-grid">
				<button
					type="submit"
					className="btn btn-primary bg-blue-600 text-white border px-10 py-3 rounded-2xl"
				>
					Sign Up
				</button>
			</div>
			<p className="forgot-password text-right">
				Already registered <Link to="/login">Login</Link>
			</p>
		</form>
		</main>
	);
};

export default Register;
