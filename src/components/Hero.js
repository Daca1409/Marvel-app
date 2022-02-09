import React from 'react';
import { Link } from "react-router-dom";
import { addToMyTeam } from '../Service';



export const Hero = ({ hero, team, setTeam, data }) => {



    return <>
        <div className='card'>
            <p> {hero.name}</p>
            <div className='hero-img'>
                <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="no-img"></img>
            </div>
            <div className='buttons'> <Link to={`/info/${hero.id}`}> <button>Info</button></Link>
                <button onClick={() => addToMyTeam(data, team, setTeam, hero)}>Add</button></div>
        </div>
    </>
};
