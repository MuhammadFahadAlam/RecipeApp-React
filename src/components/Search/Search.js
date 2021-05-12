import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Cards } from './../../components';

function Search() {
	let APPID = '4ee53f6d';
	let KEY = 'd82e76f030f0f598ee5bf5eac1d4c223';

	const [data, setData] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('orange');

	useEffect(() => {
		fetchRecipe();
	}, [query]);

	const fetchRecipe = async () => {
		let response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APPID}&app_key=${KEY}`
		);
		let data = await response.json();

		setData(data.hits);
	};

	const settingQuery = (e) => {
		setQuery(search);
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<h1 className="display-3 p-3">Search Recipes</h1>
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<Form>
						<Form.Group controlId='formBasicEmail'>
							<Form.Label>Search</Form.Label>
							<Form.Control
								type='email'
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								placeholder='Search Recipe'
							/>
							<Form.Text className='text-muted'>
								Search the delicious food recipe you want to
								make.
							</Form.Text>
						</Form.Group>
					</Form>
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<Button onClick={(e) => settingQuery(e)}>Search</Button>
				</div>
			</div>
			<hr />
			<div className='row'>
				{data.length ? <Cards data={data} /> : null}
			</div>
		</div>
	);
}

export default Search;
