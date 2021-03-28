import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LeagueCard.css";

const LeagueCard = (props) => {
  const { idLeague } = props;
  const [leagueInfo, setLeagueInfo] = useState({});

  const { strLeague, strBadge, strSport } = leagueInfo;
  // console.log(leagueInfo)
  const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeagueInfo(data.leagues[0]));
  }, []);
  return (
    <Card
      bg="warning"
      border="warning"
      style={{ width: "18rem" }}
      className="league-card"
    >
      <Card.Img variant="top" src={strBadge} />
      <Card.Body>
        <Card.Title>
          {" "}
          <strong>
            {" "}
            <h3>{strLeague}</h3>{" "}
          </strong>{" "}
        </Card.Title>
        <Card.Text>Types of sport: {strSport}</Card.Text>
        <Link className="explore-button" to={`/details/${idLeague}`}>
          <Button variant="danger">Explore</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default LeagueCard;
