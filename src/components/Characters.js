import React from "react";
import Character from "./Character";

const Characters = props => {
    const { data } = props;
    return (
    <div>
        {data.map(character =>{
            return <Character data = {character}/>;
        })}
    </div>
    )
}

export default Characters;