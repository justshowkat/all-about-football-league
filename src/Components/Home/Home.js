import React, { useEffect, useState } from 'react';
import {Jumbotron} from 'react-bootstrap'
import LeagueCard from '../LeagueCard/LeagueCard';
import './Home.css'

const Home = () => {
    const [league, setLeague] = useState([])

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => {
                const holdIt = data.leagues.slice(0, 20)
                setLeague(holdIt)
            
        })
    }, [])
   
    return (
        <div className ='home'>
            <Jumbotron className='custom-jumbo'>
                <h1>Da League Mania</h1>
            </Jumbotron>
            <div className="blue-strip">
                <p>ALL about Leagues</p>
            </div>
            <div className="cards">
                {
                    league.map(obj => <LeagueCard idLeague={obj.idLeague}> </LeagueCard>)
                }
            </div>
        </div>
    );
};

export default Home;