import React from 'react';
import { remove } from '../Service';
import DeleteIcon from '@mui/icons-material/Delete';

export const MyTeam = ({ team, setTeam }) => {

    return <div >
        <h4>My Team</h4>
        {team.map((hero) => (<div key={hero.id} className='team-card'>
            <div className='team-img'>
                <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="no-img"></img> <button onClick={() => remove(setTeam, team, hero)} className='delete'><DeleteIcon /> </button></div>
            <p>{hero.name}</p>
        </div>))}

    </div >;
};
