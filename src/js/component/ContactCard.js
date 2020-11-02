import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";

import { Context } from "../store/appContext.js";

export const ContactCard = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	const { store, actions } = useContext(Context);

	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={MikePhoto} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button className="btn">
							<i className="fas fa-pencil-alt mr-3" />
						</button>
						<button className="btn" onClick={() => props.onDelete()}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>

					<label className="name lead">{props.contactName}</label>

					<br />

					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">5842 Hillcrest Rd {props.contactAddress}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>

					<span className="text-muted small">(870) 288-4149 {props.contactPhone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">mike.ana@example.com {props.contactEmail}</span>
				</div>
			</div>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	// BUSCAR INFORMACION SOBRE LA DEFINICION DE LAS PROPIEDADES PROPS
	history: PropTypes.object,
	onDelete: PropTypes.func,
	contactName: PropTypes.string,
	contactAddress: PropTypes.string,
	contactPhone: PropTypes.string,
	contactEmail: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
