import React from "react";
import PropTypes from "prop-types";

//create your first component
var counter = 0;
var hrs = 0;
var min = 0;
var sec = 0;

export function Home(props) {
	while (counter < props.seconds) {
		sec = counter % 60;
		min = Math.floor((counter / 60) % 60);
		hrs = Math.floor((counter / 3600) % 24);
		counter++;

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-3 ml-md-auto" />
					<div className="col-md-3 ml-md-auto">
						<h2>HOURS:</h2>
					</div>
					<div className="col-md-3 ml-md-auto">
						<h2>MINUTES:</h2>
					</div>
					<div className="col-md-3 ml-md-auto">
						<h2>SECONDS:</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3 ml-md-auto">
						<i className="fas fa-stopwatch" />
					</div>
					<div className="col-md-3 ml-md-auto">
						<h1>{hrs}</h1>
					</div>
					<div className="col-md-3 ml-md-auto">
						<h1>{min}</h1>
					</div>
					<div className="col-md-3 ml-md-auto">
						<h1>{sec}</h1>
					</div>
				</div>
			</div>
		);
	}
}

Home.propTypes = {
	seconds: PropTypes.number.isRequired
};
