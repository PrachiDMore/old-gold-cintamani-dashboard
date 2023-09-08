import { createContext, useContext, useEffect, useState } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../configuration/firebase_config";
import { UseAuthContext } from "./Auth";
import addNotification from "react-push-notification";

const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
	const [orders, setOrders] = useState([])
	const { user } = UseAuthContext()
	useEffect(() => {
		if (user) {
			const q = query(collection(db, "orders"), orderBy("timestamp", "desc"));
			const unsubscribe = onSnapshot(q, (querySnapshot) => {
				if (querySnapshot.docChanges().length > 0) {
					let order = querySnapshot?.docChanges()[0]?.doc.data()
					addNotification({
						"title": "New Order",
						native: true,
						subtitle: `New order placed by ${order?.name}`,
						icon: order?.ornament_image,
						message: `New order placed by ${order?.name}`,
						duration: 30000
					})
				}
				const orders = [];
				querySnapshot?.forEach((doc) => {
					orders.push({ ...doc.data(), id: doc.id });
				});
				setOrders(orders)
			});
			return () => {
				unsubscribe()
			};
		}
	}, [user]);
	return <OrderContext.Provider value={{ orders, setOrders }}>
		{children}
	</OrderContext.Provider>
}

const UseOrderContext = () => {
	return useContext(OrderContext);
}

export { OrderContextProvider, UseOrderContext };