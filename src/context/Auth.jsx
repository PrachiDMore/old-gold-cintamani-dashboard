import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../configuration/firebase_config.jsx";
import { doc, onSnapshot } from "@firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(undefined)
	const [userData, setUserData] = useState()
	const navigate = useNavigate()
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid;
				setUser(user)
				const unsub = onSnapshot(doc(db, "admin", uid), (doc) => {
					setUserData(doc.data());
				});
				return () => {
					unsub()
				}
			} else {
				setUser(undefined)
				setUserData()
				navigate("/login")
			}
		});
	}, []);
	return <AuthContext.Provider value={{ user, setUser, userData }}>
		{children}
	</AuthContext.Provider>
}

const UseAuthContext = () => {
	return useContext(AuthContext);
}

export { AuthContextProvider, UseAuthContext };