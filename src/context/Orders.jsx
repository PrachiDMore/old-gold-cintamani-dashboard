import { createContext, useContext, useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../configuration/firebase_config";

const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
	const [orders, setOrders] = useState([])
	useEffect(() => {
		const q = query(collection(db, "orders"), where("status", "==", "Processing"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const orders = [];
			querySnapshot.forEach((doc) => {
				orders.push({ ...doc.data(), id: doc.id });
			});
			setOrders(orders)
		});
		return () => {
			unsubscribe()
		};
	}, []);
	return <OrderContext.Provider value={{ orders, setOrders }}>
		{children}
	</OrderContext.Provider>
}

const UseOrderContext = () => {
	return useContext(OrderContext);
}

export { OrderContextProvider, UseOrderContext };