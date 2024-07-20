import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
const Profile = () => {
	const { currentUser, logOut } = useAuth()



	return (
		<main>
			{currentUser ? (
				<div>
					<h3>Welcome User</h3>
					<div>
						<p>Email: {currentUser.email}</p>
						<button className="bg-blue-600 p-6" onClick={logOut}>
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
