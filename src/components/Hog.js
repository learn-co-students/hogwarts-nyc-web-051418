import React from 'react';
import UUID from 'uuid'

//FUNCTIONAL COMPONENT
const Hog = props => {

    function display() {
        return (
            <div>
                <p>Specialty: {props.hogData.specialty}</p>
                <p>Greased: {props.hogData.greased ? "Yes" : "No"}</p>
                <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {props.hogData['weight'] }</p>
                <p>Highest medal achieved: {props.hogData['highest medal achieved'] }</p>
            </div>
        )
    }

    return (
        <div key={UUID()} className="pigTile" >
            <h3 >{props.hogData.name}</h3>
            <img 
                src={props.graphImage} data-selectedhogname={props.hogData.name}
                alt={props.hogData.name} 
                onClick={props.handleClick}
            />
            {props.selectedHog === props.hogData.name ? display() : null}
        </div>
    );
}

export default Hog;