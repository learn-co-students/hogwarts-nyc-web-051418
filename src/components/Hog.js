import React from 'react';
import UUID from 'uuid'

//FUNCTIONAL COMPONENT
const Hog = props => {

    function displayDetails() {
        return (
            <div className="pigTileDetail">
                <p>Specialty: {props.hogData.specialty}</p>
                <p>Greased: {props.hogData.greased ? "Yes" : "No"}</p>
                <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {props.hogData['weight'] }</p>
                <p>Highest medal achieved: {props.hogData['highest medal achieved'] }</p>
            </div>
        )
    }

    function displayImage() {
        return (
            <img 
                src={props.graphImage} data-selectedhogname={props.hogData.name}
                alt={props.hogData.name} 
                onClick={props.handleClick}
            />
        )
    }

    return (
        <div key={UUID()} className="pigTile" >
            <h3 >{props.hogData.name}</h3>
            
            {props.selectedHog === props.hogData.name ? 
                displayDetails() 
            :
                displayImage()
            }
            
        </div>
    );
}

export default Hog;