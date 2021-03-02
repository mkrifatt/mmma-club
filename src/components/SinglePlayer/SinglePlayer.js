import React from 'react';
import './SinglePlayer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

const SinglePlayer = (props) => {
    const {name, image, salary} = props.player
    return (
        <div className="single-player">
            <div>
                <img src={image} alt=""/>
            </div>
            <div>
                <h3>{name}</h3>
                <br/>
                <h4>$ {salary}</h4>
                <br/>
                <Button onClick={()=>props.handleAddPlayer(props.player)} variant="primary"><FontAwesomeIcon icon={faShoppingCart}/> Add to cart</Button>
            </div>
        </div>
    );
};

export default SinglePlayer;