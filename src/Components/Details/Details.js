import React, {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFlag,
  faFutbol,
  faMapPin,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { Jumbotron } from "react-bootstrap";
import "./Details.css";
import male from "../img/male.png";
import female from "../img/female.png";

const Details = () => {
  // console.log(useParams())
  const obj = useParams();
  const leagueId = obj.id;
  const [leagueDetails, setLeagueDetails] = useState({});
  const {
    strLeague,
    strBadge,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strDescriptionEN,
    strFacebook,
    strYoutube,
    strTwitter,
  } = leagueDetails;

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
    )
      .then((res) => res.json())
      .then((data) => setLeagueDetails(data.leagues[0]));
  }, []);
  // console.log(fbUrl)
  return (
    <div className="details">
      <Jumbotron className="custom-jumbo-details">
        <img className="league-logo" src={strBadge} alt="" srcset="" />
        <h1>
          <FontAwesomeIcon icon={faFutbol} />
          {strLeague}
        </h1>
      </Jumbotron>
      <div className="details-info">
        <div className="detail-card">
          <h2>
            <FontAwesomeIcon icon={faMapPin} /> <strong>Founded :</strong>{" "}
            {intFormedYear}
          </h2>
          <h2>
            <FontAwesomeIcon icon={faFlag} /> <strong>Country :</strong>{" "}
            {strCountry}
          </h2>
          <h2>
            <FontAwesomeIcon icon={faFutbol} /> <strong>Sports Type :</strong>{" "}
            {strSport}{" "}
          </h2>
          <h2>
            <FontAwesomeIcon icon={faVenusMars} /> <strong>Gender :</strong>{" "}
            {strGender}{" "}
          </h2>
        </div>
        <div className="gender-div">
          {strGender === "Male" ? (
            <img className="gender-based-image" src={male} />
          ) : (
            <img className="gender-based-image" src={female} />
          )}
        </div>
      </div>
      <div className="description">
        <p>{strDescriptionEN}</p>
      </div>
      <div className="social">
        <a className="social-fb" href={`https://${strFacebook}`}>
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a
          className="social-twitter"
          href={`https://${strTwitter}`}
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} />{" "}
        </a>
        <a
          className="social-youtube"
          href={`https://${strYoutube}`}
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutubeSquare} />{" "}
        </a>
      </div>
    </div>
  );
};

export default Details;
