import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
const Profile = () => {
	const { currentUser, logOut } = useAuth()
	const handleLogout = async () => {
		try {
			await logOut()
			toast.success("Succesfully logged out")
			
		} catch (error) {
			console.error(error.message);
			toast.error(error.message);
		}
	}
	return (
		<main className="mx-6">
			{currentUser ? (
				<div className="ring-1 ring-gray-300 p-6 rounded-xl shadow-lg">
					<h3 className="text-3xl my-6">Welcome User</h3>
					<div className="mb-3 flex flex-col gap-4 my-7">
						<p>Email: {currentUser.email}</p>
						<button type="button" className="bg-red-600 text-white border px-10 py-3 rounded-lg" onClick={handleLogout}>
							Logout
						</button>
					</div>
				</div>
			) : (
				<p>Loading</p>
			)}
		</main>
	);
};

export default Profile;
