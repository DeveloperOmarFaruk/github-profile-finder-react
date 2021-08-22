import React, { useState } from "react";
import DisplayTable from "./DisplayTable";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    // console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (
    <>
      <div style={{ padding: 20 }}>
        <div className="ui search">
          <div className="ui icon input search-input">
            <i className="search icon"></i>
            <input
              className="prompt"
              placeholder="Search Github Username..."
              type="text"
              value={username}
              onChange={onChangeHandler}
            />
          </div>{" "}
          &nbsp;
          <button
            className="ui black button search-btn"
            type="submit"
            onClick={submitHandler}
          >
            <i className="github icon"></i>
            Search
          </button>
          <br />
          <br />
          <br />
          <DisplayTable data={data} repositories={repositories} />
        </div>
      </div>
    </>
  );
};

export default Profile;
