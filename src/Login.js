import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState(false);
  const navigate = useNavigate();

  const emailValid = /^\S+@\S+\.\S+$/.test(email);
  const pwdValid = password.length >= 6;
  const formValid = emailValid && pwdValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!formValid) return;

    console.log('Logging in with:', { email, password });

    navigate('/');
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit} noValidate>
        <h1 className="login-title">Login</h1>

        <label className="login-label" htmlFor="email">Email</label>
        <input
          id="email"
          className={`login-input ${touched && !emailValid ? 'invalid' : ''}`}
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {touched && !emailValid && (
          <div className="error-text">Please enter a valid email.</div>
        )}

        <label className="login-label" htmlFor="password">Password</label>
        <input
          id="password"
          className={`login-input ${touched && !pwdValid ? 'invalid' : ''}`}
          type="password"
          placeholder="•••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {touched && !pwdValid && (
          <div className="error-text">Minimum 6 characters.</div>
        )}

        <button className="login-button" type="submit" disabled={!formValid && touched}>
          Sign in
        </button>

        <button
          type="button"
          className="link-button"
          onClick={() => navigate('/')}
        >
          ← Back to Home
        </button>
      </form>
    </div>
  );
}
