const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			agenda: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			createContact(data, slug) {
				const store = getStore();
				const endpoint = "https://assets.breatheco.de/apis/fake/contact";
				const config = {
					method: "POST",
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
						getActions().listContacts(slug);
					});
			},

			getContact(id) {},

			updateContact(id, data) {},

			deleteContact(id) {},

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
