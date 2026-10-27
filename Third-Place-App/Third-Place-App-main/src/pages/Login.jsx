import tree from '../assets/tree.png'

function Login() {
  return (
    <main className="login-page">
      {/* LEFT SIDE */}
      <div className="login-brand">
        <img src={tree} alt="Tree" />
        <h1>Trees</h1>
        <p>Find your third place.</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-forms">
        {/* LOGIN */}
        <div className="login-box">
          <h2>Login</h2>
          <p>Welcome back to Trees</p>

          <label htmlFor="login-email">Email</label>
          <input id="login-email" type="email" placeholder="Enter your email" />

          <label htmlFor="login-password">Password</label>
          <input id="login-password" type="password" placeholder="Enter your password" />

          <button>Login</button>
        </div>

        {/* SIGN UP */}
        <div className="login-box">
          <h2>Sign Up</h2>
          <p>Create your Trees account</p>

          <label htmlFor="signup-username">Username</label>
          <input id="signup-username" type="text" placeholder="Enter your username" />

          <label htmlFor="signup-email">Email</label>
          <input id="signup-email" type="email" placeholder="Enter your email" />

          <label htmlFor="signup-password">Password</label>
          <input id="signup-password" type="password" placeholder="Create a password" />

          <button>Sign Up</button>
        </div>
      </div>
    </main>
  )
}

export default Login
