import { useContext } from "react";

import Context from "../Context/Context";
function Profile() {
  const context = useContext(Context);

  const handleUserChange = (e) => {
    context.setUserInput(e.target.value);
  };

  const handleUserSave = () => {
    localStorage.setItem("userInput", context.userInput);
    alert("You have choosen a new name");
    context.setUserInput("");
  };

  return (
    <div className="App">
      <div className="profile-container">
        <div className="profile-title">Profile</div>
        <div className="profile-subtitle">User Name</div>

        <div>
          <input
            className="profile-input"
            type="text"
            value={context.userInput}
            onChange={handleUserChange}
          />
        </div>

        <div className="profile-button">
          <button onClick={handleUserSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
