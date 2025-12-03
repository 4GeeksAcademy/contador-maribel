import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Contador from "./Contador";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            
			<h1 className="text-center mt-5">Contador</h1>
			
			<Contador/>
			
			
		</div>
	);
};

export default Home;