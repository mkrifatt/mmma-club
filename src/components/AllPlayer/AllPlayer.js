import React, { useEffect, useState } from 'react';
import FakeData from '../../FakeData/Data.json';
import './AllPlayer.css';
import Cart from '../Cart/Cart';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
const AllPlayer = () => {

    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(FakeData);
    }, [])

    const [cart, setCart] = useState([]);

    const handleAddPlayer = (player) =>{
        console.log("product added", player);
        const newCart = [...cart, player];
        setCart(newCart);
    }
    return (
        <div className="Allplayer-container">
            <div className="player-container">
                    {
                        players.map(player => <SinglePlayer key={player.id} handleAddPlayer ={handleAddPlayer} player={player}></SinglePlayer>)
                    }
            </div>
            <div className="playerCart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default AllPlayer;