import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib-ns br2 pa3 ma2 tc grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="Robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
