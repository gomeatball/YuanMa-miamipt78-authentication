import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../fetch";


export const Login = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        login(email, password, dispatch)
        

    }
    useEffect(() => {
        if (store.isLoginSuccessful) {
            navigate('/private')
        }
    }, [store.isLoginSuccessful])
    return (
        <>
            <div className="text-center mt-5">
                {
                    (store.token && store.token !== null && store.token !== "")
                        ?
                        <>
                            <h1>Hello! You are logged in!</h1>
                        </>
                        :
                        <>
                            <h1>Login</h1>
                            <div>
                                <input
                                    type="text"
                                    placeholder="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div>
                                <button onClick={handleClick}>
                                    Login
                                </button>
                            </div>
                        </>
                }
            </div>
        </>
    )
}