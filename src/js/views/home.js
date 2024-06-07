import React from "react";
import { Card } from "../component/Card";
import { Info } from "../component/Info";
import "../../styles/home.css";

export const Home = () => (
	<div className="d-flex justify-content-center flex-column">
		<Card />
		<Info />
	</div>
);
