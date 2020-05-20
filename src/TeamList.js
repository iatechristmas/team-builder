import React from "react";

const TeamList = (props) => {
  const { details } = props;

  if (!details) {
    return <h3>Waiting for friends to be added</h3>;
  }

  return (
    <div>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  );
};

export default TeamList;
