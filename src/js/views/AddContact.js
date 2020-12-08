import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.js";

export function AddContact() {
	const { store, actions } = useContext(Context); // SE DEFINE COMO OBJETO

	const [fullName, setFullName] = useState(""); // SE DEFINE COMO DOS VARIABLES
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");

	function NewEmail(event) {
		setEmail(event.target.value);
	}

	const SaveContact = e => {
		const newContact = {
			full_name: fullName,
			phone: phone,
			email: email,
			address: address,
			agenda_slug: store.usuario
		};

		actions.createContact(newContact);
		// actions.listContacts(newContact.agenda_slug);
		alert("new contact created successfully");
		setFullName("");
		setPhone("");
		setEmail("");
		setAddress("");
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={event => setFullName(event.target.value)}
							value={fullName}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={event => NewEmail(event)}
							value={email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={event => setPhone(event.target.value)}
							value={phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={event => setAddress(event.target.value)}
							value={address}
						/>
					</div>
					<Link to="/">
						<button type="button" className="btn btn-primary form-control" onClick={SaveContact}>
							Save
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						Get Back To Contacts
					</Link>
				</form>
			</div>
		</div>
	);
}
