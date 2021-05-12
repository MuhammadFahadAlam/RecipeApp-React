import React from 'react';

function RecipeDetail(props) {
	let value = props.location.aboutProps.value.recipe;
	let ingredients = value.ingredients.map((v, i) => {
		return <p key={i}>{v.text}</p>;
	});
	return (
		<div className='container p-4'>
			<div className='row'>
				<div className='col'>
					<h1 className='display-3 p-4'>{value.label}</h1>
				</div>
				<div className='col'>
					<img
						src={value.image}
						className='img-thumbnail'
						alt='Responsive'
					/>
				</div>
			</div>

			<div className='row'>
				<div className='col'>
					<h1 className='display-4 p-4'>Ingredients</h1>
					<div
						className='container p-5'
						style={{ backgroundColor: '#f4f4f4' }}
					>
						<div className='row'>
							<div className='col'>{ingredients}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RecipeDetail;
