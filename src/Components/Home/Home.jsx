import React from "react";
import "./Home.css"

function Home(props){
    return(
        <div className={props.classe}>
            {props.texto}
        </div>
    );
}

export default Home;