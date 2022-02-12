import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SocialApp</h3>
                    <span className="loginDesc">Hello this is the description</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Login In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegistration">Create a New Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
