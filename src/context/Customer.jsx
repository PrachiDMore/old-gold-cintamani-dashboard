import { createContext, useContext, useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../configuration/firebase_config.jsx";

const CustomerContext = createContext();

const CustomerContextProvider = ({ children }) => {
	const [customers, setCustomers] = useState([])
	useEffect(() => {
		const q = query(collection(db, "users"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const users = [];
			querySnapshot.forEach((doc) => {
				users.push({ ...doc.data(), id: doc.id });
			});
			setCustomers(users)
		});
		return () => {
			unsubscribe()
		};
	}, []);
	return <CustomerContext.Provider value={{ customers, setCustomers }}>
		{children}
	</CustomerContext.Provider>
}

const UseCustomerContext = () => {
	return useContext(CustomerContext);
}

export { CustomerContextProvider, UseCustomerContext };