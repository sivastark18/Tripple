import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JoinCommunity.css';
import yamahaImg from './images/yamaha.jpeg';
import hondaImg from './images/honda.jpeg';
import royalEnfieldImg from './images/re.jpeg';
import bajajImg from './images/bajaj.jpeg';
import estccImg from './images/dirt.jpeg';

const communities = [
  { name: 'Yamaha', image: yamahaImg },
  { name: 'Honda', image: hondaImg },
  { name: 'Royal Enfield', image: royalEnfieldImg },
  { name: 'Bajaj', image: bajajImg },
  { name: 'Monster', image: estccImg },
];

function JoinCommunity({ onJoinCommunity }) {
  const navigate = useNavigate();

  const handleJoin = (communityName) => {
    onJoinCommunity(communityName);
    const formattedName = communityName.toLowerCase().replace(/\s+/g, '');
    console.log(`Navigating to /${formattedName}-blog`); // Debugging line
    navigate(`/${formattedName}-blog`);
  };

  return (
    <div className="join-community">
      <h1>Join a Community</h1>
      <div className="community-grid">
        {communities.map((community) => (
          <div key={community.name} className="community-box">
            <img src={community.image} alt={community.name} />
            <h2>{community.name}</h2>
            <button onClick={() => handleJoin(community.name)}>Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JoinCommunity;
