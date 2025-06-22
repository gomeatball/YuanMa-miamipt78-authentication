import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { logout } from "../fetch";
import { useEffect } from "react";


export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	// const logout = () => {

	// 	dispatch({
	// 		type: "loggedOut",
	// 		payload: {
	// 			message: null,
	// 			token: null,
	// 			isLoginSuccessful: false,
	// 		},
	// 	});

	// 	navigate("/login");
	// }
	const handleClick = () => {
		logout(dispatch)
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<Link to="/signup">
					<button
						className="btn btn-warning"


					>Signup
					</button>
				</Link>
				<div className="ml-auto">
					{
						(store.loggedIn) ?
							<Link to="/login">
								<button
									className="btn btn-primary"
									onClick={handleClick}

								>Logout
								</button>
							</Link> :
							<Link to="/login">
								<button
									className="btn btn-success"
									// onClick={handleClick}

								>Login
								</button>
							</Link>
					}

				</div>
			</div>
		</nav>
	);
};