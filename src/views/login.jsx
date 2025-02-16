import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const logincontext=createContext();
function Login() {
    const [loginState, setLoginState]=useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const move= useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('rempliser les deux champs.');
            return;
        }
        if (email === 'test@example.com' && password === 'password') {
            alert('Login reussi');
            setLoginState(true);
            move("/");
        } else {
            setError('email ou mot de pass Invalid .');
        }
    };

    return (

        <div className="login-container form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
                <div class="mb-3">
                    <label for="emailfeild" class="form-label">Email address</label>
                    <input type="email"
                        class="form-control" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required aria-describedby="emailHelp"
                        id="emailfeild"
                    />
                </div>
                <div class="mb-3">
                    <label for="passwordfeild" class="form-label">Password</label>
                    <input type="password"
                        class="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        id="passwordfeild" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <p>don't have an account yet? <a href='/signup'> singup</a> </p>
        </div>
    );
}

export default Login;
