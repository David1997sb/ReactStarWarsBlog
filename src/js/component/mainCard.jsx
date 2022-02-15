import React, {useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


 const MainCard = ({char, index}) => {
	const {store, actions} = useContext(Context);
	var charId = char.url.substr(-2,1);

	return (
	<div className="col-2">
	<div className="card mt-2 mb-2">
			<img src="https://dz2cdn1.dzone.com/storage/temp/13989969-400x200" className="card-img-top " alt="..."/>
				<div className="card-body">
					<h5 className="card-text">Name: {char.name}</h5>
					<p className="card-text">Gender: {char.gender}</p>
					<p className="card-text">Hair Color: {char.hair_color}</p>
					<p className="card-text">Eye Color: {char.eye_color}</p>
					<div className="d-flex justify-content-between">
					<Link className="btn btn-outline-primary" to={`/single/${charId}`}>Learn more</Link>
					<button href="#" className="btn btn-outline-warning" onClick={() => {actions.guardaFavoritos(char.name, index)}}><i className="bi bi-heart"></i></button>
					</div>
				</div>
		</div>
		</div>
	
	);
};


export default MainCard;
