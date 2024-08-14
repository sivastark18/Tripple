import React from 'react';
import './SeeCommunities.css';

function SeeCommunities({ joinedCommunities, userEmail }) {
  const sendEmail = (community) => {
    window.location.href = `mailto:${userEmail}?subject=Join ${community} Community&body=I would like to join the ${community} community.`;
  };

  const sendWhatsApp = (community) => {
    const message = `I would like to join the ${community} community.`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="see-communities">
      <h1>Communities Joined</h1>
      <div className="community-grid">
        {joinedCommunities.length === 0 ? (
          <p>No communities joined yet.</p>
        ) : (
          joinedCommunities.map((community, index) => (
            <div key={index} className="community-box">
              <h2>{community}</h2>
              <button onClick={() => sendEmail(community)}>Email</button>
              <button onClick={() => sendWhatsApp(community)}>WhatsApp</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SeeCommunities;
