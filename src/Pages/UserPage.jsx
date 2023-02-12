import React from 'react';
import Data from '../Data.js';
import Card from '../Components/Card';

function UserPage() {
  const userDetailsCards = Data.map((user) => {
    return (
      <Card
        userName={user.name}
        userImageURL={user.imageURL}
        userAge={user.age}
        userDetails={user.details}
      />
    );
  });
  return <div>{userDetailsCards}</div>;
}

export default UserPage;
