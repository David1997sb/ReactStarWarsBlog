import React, {useContext} from "react";
import "../../styles/home.css";
import MainCard from '../component/mainCard.jsx'
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context);
	
	return(
	<div className="container">
		<h1 className="text-danger mt-2 mb-2">Characters</h1>
		<div className="row">
			{store.personajes.map((item,i)=>{
				return <MainCard char={item} key={i} index={i}/>
			})}
			
		</div>
		<h1 className="text-danger mt-2 mb-2">Planets</h1>
	</div>
	)
};
