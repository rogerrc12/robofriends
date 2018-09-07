import React from 'react';
import Card from './Card';

const CardList = ({ Robots }) => {
  if (true) {
    throw Error;
  }
  return (
    <div>
      {
        Robots.map( user => <Card key={user.id} id={user.id} name={user.name} email={user.email} /> )
      }
    </div>
  );
}

export default CardList;
