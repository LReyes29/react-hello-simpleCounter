//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application

setInterval(() => {
	ReactDOM.render(<Home seconds={8000} />, document.querySelector("#app"));
}, 1000);
