import React from "react";
import "./profile.css";

const ProfileScrren = () => {
  return (
    <div className="wrapper">
        <div className="left">
          <img src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" alt="user" width={100} />
          <h4>User Name</h4>
         <h6>user email</h6>
        </div>
        <div className="right">
          <div className="info">
            <h3>Informations</h3>
            <div className="info_data">
              <div className="data">
                <h4>adress</h4>
                <p>User adress</p>
              </div>
              <div className="data">
                <h4>Phone</h4>
                <p>User Phone</p>
              </div>
            </div>
          </div>
          <div className="projects">
            <h3>My commands</h3>
            <div className="projects_data">
              <div className="data">
                <h4>Rescent</h4>
                <p className="text-align-center">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="data">
                <h4>Most Viewed</h4>
                <p>dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProfileScrren;
