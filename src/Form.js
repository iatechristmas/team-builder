import React from "react";

const Form = (props) => {
  const { values, onInputChange, onSubmit } = props;

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Add a team member</h2>
        <button>submit</button>
      </div>
      <div>
        <label>
          Username
          <input
            type="text"
            placeholder="enter username"
            maxLength="30"
            name="username"
            value={values.username}
            onChange={onInputChange}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            placeholder="enter email address"
            maxLength="30"
            name="email"
            value={values.email}
            onChange={onInputChange}
          />
        </label>
        <label>
          Role
          <select name="role" value={values.role} onChange={onInputChange}>
            <option value="">Select a Role</option>
            <option value="Fat">Fat</option>
            <option value="Lazy">Lazy</option>
            <option value="Slimy">Slimy</option>
            <option value="DonaldTrump">DonaldTrump</option>
          </select>
        </label>
      </div>
    </form>
  );
};

export default Form;
