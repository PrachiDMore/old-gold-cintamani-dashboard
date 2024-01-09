import React from 'react'

const PrivacyPolicy = () => {
	return (
		<main className='flex flex-col lg:px-10 px-4 py-5 gap-3'>
			<h1 className='text-4xl font-extrabold mb-8 text-center'>Privacy-Policy</h1>
			<div>
				<h2 className='font-bold text-2xl'>1. Information We Collect</h2>
				<div className='flex flex-col gap-1  px-5'>
					<h4 className='font-bold'>1.1 Personal  Information :-</h4>
					<p className='px-5'>When you use the App, we may collect certain personal information from you, such as your name and email address through Google Authentication. This information is used to create and authenticate your account.</p>
					<h4 className='font-bold'>1.2 Usage Data :-</h4>
					<p className='px-5'>We may also collect information about how you use the App, including your interactions with the App's features and functionalities. This data helps us improve the App and provide a better user experience.</p>
				</div>
			</div>
			<div>
				<h2 className='font-bold text-2xl'>2. How  We Use Your Information</h2>
				<div className='flex flex-col gap-1  px-5'>
					<h4 className='font-bold'>2.1 Providing and Improving the App :-</h4>
					<p className='px-5'>We use the collected information to provide and enhance the App's features, functionalities, and user experience. This includes personalizing content, optimizing performance, and addressing technical issues.</p>
					<h4 className='font-bold'>2.2 Communication:-</h4>
					<p className='px-5'>We may use your email address to communicate with you about important updates, changes to the App, and other relevant information.</p>
					<h4 className='font-bold'>2.3 Legal Requirements:-</h4>
					<p className='px-5'>We may use or disclose your personal information if required to do so by law or in response to valid legal requests from authorized government authorities.</p>
				</div>
			</div>
			<div>
				<h2 className='font-bold text-2xl'>3. Data Security</h2>
				<p className='px-5'>We take data security seriously and implement reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
			</div>
			<div>
				<h2 className='font-bold text-2xl'>4. Third-Party Services</h2>
				<p className='px-5'>We use Firebase, a third-party service provided by Google, to store and process data. Please review Google's Privacy Policy <a className='text-brown underline underline-offset-2' href="https://policies.google.com/privacy">https://policies.google.com/privacy</a> to understand how they handle your information.</p>
			</div>
			<div>
				<h2 className='font-bold text-2xl'>5. Your Choices</h2>
				<p className='px-5'>You can access, update, or delete your personal  information by contacting us at <a className='text-brown underline underline-offset-2' href="mailto:query.chintamanijewellers@gmail.com">query.chintamanijewellers@gmail.com</a>. You can also disable cookies or adjust your device settings to prevent the collection of certain information.</p>
			</div>
			<div>
				<h2 className='font-bold text-2xl'>6. Changes to Privacy Policy</h2>
				<p className='px-5'>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this Privacy Policy periodically.</p>
			</div>
			<div>
				<h2 className='font-bold text-2xl'>7. Contact Us</h2>
				<p className='px-5'>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us query <a className='text-brown underline underline-offset-2' href="mailto:chintamanijewellers@gmail.com">chintamanijewellers@gmail.com</a> By using the Chintamani  Old Gold  App, you agree to the terms outlined in this Privacy Policy. If you do not agree with any aspect of this Policy, please do not use the App.</p>
			</div>
		</main>
	)
}

export default PrivacyPolicy
