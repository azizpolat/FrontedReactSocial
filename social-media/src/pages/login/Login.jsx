import "./login.css";

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">AzizSocial</h3>
            <span className="loginDesc">
              Connect with friends and the world around you on AzizSocial.
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input type="Email" className="loginInput" placeholder="Email" />
              <input type="Password" className="loginInput" placeholder="Password" />
              <button className="loginButton">Login</button>
              <span className="loginForgot">Forgot Password ?</span>
              <button className="loginRegister">Create a New Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
