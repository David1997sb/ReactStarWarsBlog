import React, {useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


 const MainCard = ({char}) => {
	const {store, actions} = useContext(Context);
	console.log(char.uid);
	useEffect(()=>{
		actions.obtienePersonaje(char.uid)
	},[])

	
	return (
		<div className="col-2">
	<div className="card mt-2 mb-2">
			<img src="https://dz2cdn1.dzone.com/storage/temp/13989969-400x200" className="card-img-top " alt="..."/>
				<div className="card-body">
					<h5 className="card-text">Name: {char.name}</h5>
					<p className="card-text">Gender: {}</p>
					<p className="card-text">Hair Color</p>
					<p className="card-text">Eye Color</p>
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
