const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			agenda: [],
			contacto: {
				full_name: null,
				phone: null,
				email: null,
				address: null
			}
			//Your data structures, A.K.A Entities
		},
		actions: {
			createContact(data) {
				const store = getStore();
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/";
				const config = {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				};
				fetch(endpoint, config)
					.then(response => {
						console.log(response);

						return response.json();
					})
					.then(json => {
						getActions().listContacts(data.agenda_slug);
					});
			},

			getContact(id) {
				const store = getStore();
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/:id";
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						console.log("JSON Response: ", json);

						setStore({
							contacto: json // OBTIENE EL CONTACTO DEL ID SELECCIONADO
						});
					});
			},

			updateContact(id, data) {
				const store = getStore();
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/:id";
				const config = {
					method: "PUT",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				};
				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						console.log("JSON Response: ", json);

						setStore({
							contacto: json // RESPUESTA CON EL CONTACTO MODIFICADO
						});
					});
			},

			deleteContact(id) {
				const store = getStore();
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/:id";
				const config = {
					method: "DELETE"
				};
				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						console.log("JSON Response: ", json);

						// setStore({
						// 	contacto: json // ES NECESARIA UNA RESPUESTA AQUI?
						// });
					});
			},

			listContacts(slug) {
				const store = getStore();
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/agenda/" + slug;
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						console.log("JSON Response: ", json);

						setStore({
							agenda: json // ASIGNA AL ARRAY AGENDA LOS OBJETOS CONTACTOS AÑADIDIOS A agenda_slug
						});
						//console.log(json.results); // IMPRIME EL RESULTADOS DEL JSON OBTENIDO
					});
			}

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
