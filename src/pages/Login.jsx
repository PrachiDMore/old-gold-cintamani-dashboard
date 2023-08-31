import React, { useEffect } from 'react'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../configuration/firebase_config';
import { UseAuthContext } from '../context/Auth';
import { useNavigate } from 'react-router';

const Login = () => {
	const { setUser } = UseAuthContext()
	const navigate = useNavigate()
	useEffect(() => {
		if (!("Notification" in window)) {
			alert("This browser does not support desktop notification");
		} else if (Notification.permission === "granted") {
			const noti = new Notification("Hi there!");
		} else if (Notification.permission !== "denied") {
			Notification.requestPermission().then((permission) => {
				if (permission === "granted") {
					const notification = new Notification("Hi there!");
				}
			})
		}
	}, []);
	const handleSignin = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				setUser(user)
				navigate("/")
			}).catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage)
				const email = error.customData.email;
			});
	}
	return (
		<div>
			<button className='bg-black p-3 px-5 rounded-lg text-white' onClick={handleSignin}>Click</button>
		</div>
	)
}

export default Login
