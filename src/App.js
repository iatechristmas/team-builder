import React, { useState } from "react";
import Form from "./Form";
import TeamList from "./TeamList";

const initialTeamList = [
  {
    username: "Matthew",
    email: "iatechristmas@gmail.com",
    role: "Lazy",
  },
];

const initialFormValues = {
  username: "",
  email: "",
  role: "",
};

const App = () => {
  const [team, setTeam] = useState(initialTeamList);
  console.log("App -> team", team);
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      !formValues.username.trim() ||
      !formValues.email.trim() ||
      !formValues.role.trim()
    ) {
      return;
    }
    const newTeamMember = { ...formValues };
    setTeam([newTeamMember, ...team]);
    setFormValues(initialFormValues);
  };

  return (
    <div className="App">
      <header className="App-header">Team Builder</header>
      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
      {team.map((teamMember) => {
        return <TeamList key={teamMember.id} details={teamMember} />;
      })}
    </div>
  );
};

export default App;
