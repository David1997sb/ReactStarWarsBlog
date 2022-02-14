import React, {useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


 const MainCard = ({char, key}) => {
	const {store, actions} = useContext(Context);
	console.log(char);
	
	/*useEffect(()=>{
		actions.obtienePersonaje(char.uid)
	},[])*/
	var url = char.url.substr(-2,1);
	//console.log(url.substr(key,-1));
	console.log(url);

	
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
						<button href="#" className="btn btn-outline-primary">Learn more!</button>
						<button href="#" className="btn btn-outline-warning"><i className="bi bi-heart"></i></button>
					</div>
				</div>
		</div>
		</div>
	
	);
};


export default MainCard;
