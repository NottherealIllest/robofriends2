import React from 'react';
import ReactDOM from 'react-dom';



const card =({name, email, id }) =>{

	return (
		<React.Fragment>
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 ">
		<img alt='Robots ' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	</React.Fragment>
 

		);
}

export default card;