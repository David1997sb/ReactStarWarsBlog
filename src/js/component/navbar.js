import React, {useContext} from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context);

	return (
			<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="w-25 h-25 ms-2" src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Star_wars2.svg" alt="Italian Trulli" />
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle me-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
						{store.favoritos.length}
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					{store.favoritos.map((item,i)=>{
						return <li><a className="dropdown-item"> <span onClick={() => {actions.eliminaFav(item.id)}} className={"fa fa-trash"}></span>{item.name}</a></li>
					})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
