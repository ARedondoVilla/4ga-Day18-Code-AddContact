import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

import { Context } from "../store/appContext.js";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.listContacts(store.usuario);
	}, []);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.agenda.map((element, index) => {
							return (
								<ContactCard
									onDelete={() => setState({ showModal: true })}
									key={index}
									contactName={element.full_name}
									contactAddress={element.address}
									contactPhone={element.phone}
									contactEmail={element.email}
									contactId={element.id}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
