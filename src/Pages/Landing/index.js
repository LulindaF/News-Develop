import React from 'react';
import Content from '../../Components/Content';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';


export default function Landing() {

	return (
		<React.Fragment>
			<Header />
			<main>
				<Content />
			</main>
			<Footer />
		</React.Fragment>
	);
}
