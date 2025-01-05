import "./register.css";

const Register = () => {
  return (
    <div>
      <div className="register">
        <div className="registerWrapper">
          <div className="registerLeft">
            <h3 className="registerLogo">AzizSocial</h3>
            <span className="registerDesc">
              Connect with friends and the world around you on AzizSocial.
            </span>
          </div>
          <div className="registerRight">
            <div className="registerBox">
              <input type="Username" className="registerInput" placeholder="User Name" />

              <input type="Email" className="registerInput" placeholder="Email" />
              <input type="Password" className="registerInput" placeholder="Password" />
              <input
                type="Password"
                className="registerInput"
                placeholder="Password Again"
              />
              <button className="registerButton">Sign Up</button>

              <button className="registerRegister">Login To Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
