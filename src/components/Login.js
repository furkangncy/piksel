import React, { useState } from 'react';
import './Login.css';

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Hata mesajı için yeni state

  const loginHandler = (e) => {
    e.preventDefault();
    if (username === "admin" && email === "admin@example.com" && password === "1234") {
      setIsLoggedIn(true);
      setError(""); // Hata mesajını temizle
    } else {
      setError("Kullanıcı adı, e-posta veya şifre yanlış."); // Hata mesajını ayarla
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Kullanıcı Girişi</h1> {/* Başlığı buraya ekleyin */}
      <form onSubmit={loginHandler}>
        {error && <div className="alert alert-danger">{error}</div>} {/* Hata mesajını göster */}
        <div>
          <label htmlFor="username">Kullanıcı Adı</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">E-posta</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
}

export default Login;
