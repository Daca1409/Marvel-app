import React from 'react';
import { Search } from "./Search"
import { Heroes } from "./Heroes"
import { MyTeam } from "./MyTeam"
import { useState, useEffect } from 'react';



export const Home = ({ data, setData }) => {
    const [search, setSearch] = useState('')
    const [team, setTeam] = useState([])



    useEffect(() => {
        if (localStorage.getItem("team"))
            setTeam(JSON.parse(localStorage.getItem("team")));

    }, []);

    useEffect(() => {
        localStorage.setItem("team", JSON.stringify(team));
    }, [team]);


    return <div>
        <div className="left">
            <Search search={search} setSearch={setSearch}></Search>
            <Heroes search={search} setSearch={setSearch} team={team} setTeam={setTeam} data={data} setData={setData} ></Heroes>
        </div>
        <div className="right "><MyTeam team={team} setTeam={setTeam} ></MyTeam></div>
    </div>;
};
