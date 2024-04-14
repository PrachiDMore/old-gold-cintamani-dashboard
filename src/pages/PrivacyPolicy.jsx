import React from 'react'

const PrivacyPolicy = () => {
	return (
		<main className='flex flex-col lg:px-10 px-4 py-5 gap-3'>
			<h1 className='text-4xl font-extrabold mb-8 text-center'>Privacy-Policy</h1>
			<div>
				<h2 className='font-bold text-2xl'>1. Information We Collect</h2>
				<div className='container-main flex flex-col gap-1  px-5'>
					<h4 className='font-bold'>1.1 Email Address :-</h4>
					<p className='px-5'> <span className='list mr-3'></span> We collect your email address during the signup process to create and manage your account. Your email address may also be used to communicate important updates, promotions, or other relevant information.</p>
					<h4 className='font-bold'>1.2 Phone Number :-</h4>
					<p className='px-5'> <span className='list mr-3'></span> We require your phone number to facilitate communication with you regarding your transactions, orders, and any other necessary customer service inquiries.</p>
					<h4 className='font-bold'>1.3 Address :-</h4>
					<p className='px-5'> <span className='list mr-3'></span>  Your address is collected to ensure the successful delivery of services, including product shipments, pickups, or other related activities.</p>
					<h4 className='font-bold'>1.4 Photo and Camera Access :-</h4>
					<p className='px-5'> <span className='list mr-3'></span> We may request access to your device's camera for verification purposes. This may include capturing images of items you wish to sell or for identity verification.</p>
				</div>
			</div>
			<div>
				<h2 className='font-bold text-2xl'>2. How We Use Your Information</h2>
				<div className='container-main flex flex-col gap-1  px-5'>
					<p className='px-5'> <span className='list mr-3'></span> We use the information collected to provide, maintain, and improve our services to you.</p>
					<p className='px-5'> <span className='list mr-3'></span> Your email address may be used to send you important notifications, updates, and marketing communications related to Chintamani OldGold services. You can opt out of marketing communications at any time.</p>
					<p className='px-5'> <span className='list mr-3'></span> Phone numbers are used for communication purposes regarding your transactions, orders, or any other customer service inquiries.</p>
					<p className='px-5'> <span className='list mr-3'></span> Address information is utilized for the delivery of services, including product shipments or pickups.</p>
					<p className='px-5'> <span className='list mr-3'></span> Photos and camera access are utilized for verification purposes, ensuring the security and integrity of transactions and user accounts.</p>
				</div>
			</div>
			<div className='container-main'>
				<h2 className=' font-bold text-2xl'>3. Information Sharing</h2>
				<p className='px-5'> <span className='list mr-3'></span> We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy.</p>
				<p className='px-5'> <span className='list mr-3'></span> Your information may be shared with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you.</p>
				<p className='px-5'> <span className='list mr-3'></span> We may also disclose your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</p>
			</div>
			<div className='container-main'>
				<h2 className='font-bold text-2xl'>4. Data Security</h2>
				<p className='px-5'> <span className='list mr-3'></span> We implement a variety of security measures to maintain the safety of your personal information when you access our services.</p>
				<p className='px-5'> <span className='list mr-3'></span> Your personal information is stored on secure servers and protected through encryption and other appropriate security measures.</p>
			</div>
			<div className='container-main'>
				<h2 className='font-bold text-2xl'>5. User Control</h2>
				<p className='px-5'> <span className='list mr-3'></span> You have the right to review and update your personal information at any time through the app's settings or by contacting our customer support team.</p>
				<p className='px-5'> <span className='list mr-3'></span> You can choose to opt out of receiving marketing communications from us by adjusting your notification preferences.</p>
			</div>
			<p className='px-5'> <span className='list mr-3'></span> By using the Sell on Chintamani OldGold App, you consent to the terms outlined in this Privacy Policy. We reserve the right to modify this Privacy Policy at any time, so please review it frequently. If you have any questions or concerns regarding our Privacy Policy, please contact us at [<a className='underline' href='tel:+918097872030'>+918097872030</a>]</p>
		</main>
	)
}

export default PrivacyPolicy
