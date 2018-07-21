import React from 'react';
import UUID from 'uuid'

const Hog = props => {
    console.log(props.hogName)
    return (
        <div key={UUID()} className="pigTile" >
            <h3 >{props.hogName}</h3>
            <img 
                src={props.graphImage} data-selectedhogname={props.hogName}
                alt={props.hogName} 
                onClick={props.handleClick}
            />
        </div>
    );
}

export default Hog;