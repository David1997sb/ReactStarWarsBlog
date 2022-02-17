const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: [],
			planetas: [],
			personaje: {},
			favoritos: [],
			planetas: [],
			planeta:{}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			obtenerPersonajes: ()=>{
				//codigo que quiero hacer
				fetch('https://swapi.dev/api/people')
				.then((response)=>response.json())
				.then(data => setStore({personajes: data.results}))
			},
			obtienePersonaje: (id)=>{
				fetch(`https://www.swapi.tech/api/people/${id}`)
				.then((response)=>response.json())
				.then(data =>setStore({personaje:data.result}))
			},

			guardaFavoritos(nombrePersonaje, id){
				const store = getStore();
				const fav = store.favoritos;
				const prueba = [...fav, { name: nombrePersonaje, id:id }]
				setStore({favoritos: prueba})
				console.log(fav.length);
			},

			eliminaFav(id){
				const store = getStore();
				const fav = store.favoritos;
				const favActualizado = fav.filter((item) => item.id !== id);
				setStore({favoritos: favActualizado})
				console.log("deberia de borrar");
			},

			obtenerPlanetas: ()=>{
				//codigo que quiero hacer
				fetch('https://swapi.dev/api/planets')
				.then((response)=>response.json())
				.then(data => setStore({planetas: data.results}))
			},
			obtienePlaneta: (id)=>{
				fetch(`https://www.swapi.tech/api/planets/${id}`)
				.then((response)=>response.json())
				.then(data =>setStore({personaje:data.result}))
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
