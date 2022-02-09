import React from 'react';
import { Hero } from './Hero';
import { filteredHeroes } from '../Service';

export const Heroes = ({ search, team, setTeam, data }) => {
    return <div className='container'>
        {filteredHeroes(data, search).map(hero =>
            <Hero key={hero.id} hero={hero} team={team} setTeam={setTeam} data={data} ></Hero>
        )}

    </div>;
};
