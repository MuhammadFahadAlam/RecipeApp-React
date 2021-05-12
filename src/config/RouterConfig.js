import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { Home, About, Search, RecipeDetail } from './../components';
import { Navbar, Nav } from 'react-bootstrap';

function RouterConfig() {
	return (
		<Router>
			<Navbar bg='light' expand='lg'>
				<Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto' style={{ textAlign: 'center' }}>
						<Nav.Link>
							<Link to='/'>Home</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to='/about'>About</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to='/search'>Search</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/search' component={Search} />
				<Route path='/details/:id' component={RecipeDetail} />
				<Router path='*' component={() => <h1>404 Not Found</h1>} />
			</Switch>
		</Router>
	);
}

export default RouterConfig;
