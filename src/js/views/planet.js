import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(()=>{
		actions.obtienePlaneta(params.theid)
	},[])
	console.log(store.personaje.properties);

	return (
		<div className="container">
			<div className="card" style={{"maxWidth": "800px"}}>
				<div className="row g-0">
					<div className="col-md-4">
					<img src="https://www.lavalamp.com/wp-content/uploads/2016/08/placeholder-800x600.png" className="img-fluid rounded-start" alt="..."/>
					</div>
					<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title text-center">{store.personaje.properties?.name}</h5>
						<p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
					</div>
				</div>
				<div className="row text-danger">
				<div className="col-2 text-center">
					<p>Name</p>
					<p>{store.personaje.properties?.name}</p>
				</div>
				<div className="col-2 text-center">
					<p>Climate</p>
					<p>{store.personaje.properties?.climate}</p>
				</div>
				<div className="col-2 text-center">
					<p>Population</p>
					<p>{store.personaje.properties?.population}</p>
				</div>
				<div className="col-2 text-center">
					<p>Orbital Period</p>
					<p>{store.personaje.properties?.orbital_period}</p>
				</div>
				<div className="col-2 text-center">
					<p>Rotation Period</p>
					<p>{store.personaje.properties?.rotation_period}</p>
				</div>
				<div className="col-2 text-center">
					<p>diameter</p>
					<p>{store.personaje.properties?.diameter}</p>
				</div>
			</div>
			</div>
			
		</div>
		
	);
};

Planet.propTypes = {
	match: PropTypes.object
};
