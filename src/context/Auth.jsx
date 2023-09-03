import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../configuration/firebase_config.jsx";
import { doc, onSnapshot } from "@firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
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
					const data = { ...doc.data(), id: doc.id };
					if (data.role === "admin") {
						setUserData(doc.data());
					} else {
						signOut(auth).then(() => {
							alert("Logged Out")
						}).catch((error) => {
							// An error happened.
						});
					}
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