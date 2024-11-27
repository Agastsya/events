import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, [navigate]);

    const handleLogin = async () => {
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        result = await result.json();
        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.auth));
            navigate('/');
        } else {
            alert('Invalid Email or Password');
        }
    };

    return (
        <div style={styles.heroSection}>
            <div style={styles.signupContainer}>
                <h1 style={styles.registerHeading}>Admin Login</h1>
                <div style={styles.inputContainer}>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Enter Email"
                        style={styles.inputBox}
                    />
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Enter Password"
                        style={styles.inputBox}
                    />
                </div>
                <div style={styles.buttonContainer}>
                    <button
                        onClick={handleLogin}
                        type="button"
                        style={styles.button}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => navigate('/SignUp')}
                        type="button"
                        style={styles.buttonAlt}
                    >
                        Go to Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

// CSS-in-JS styles
const styles = {
    heroSection: {
        backgroundImage: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '1rem',
        fontFamily: "'Roboto', sans-serif",
    },
    signupContainer: {
        background: '#ffffff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%',
    },
    registerHeading: {
        marginBottom: '1.5rem',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#6a1b9a',
        fontFamily: "'Poppins', sans-serif",
    },
    inputContainer: {
        marginBottom: '1.5rem',
    },
    inputBox: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        height: '48px',
        display: 'block',
        width: '100%',
        boxSizing: 'border-box',
        fontSize: '16px',
        padding: '0 14px',
        marginBottom: '1rem',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
    },
    button: {
        cursor: 'pointer',
        fontWeight: '600',
        borderRadius: '8px',
        padding: '12px 18px',
        border: 'none',
        color: '#fff',
        background: '#6a1b9a',
        fontSize: '16px',
        width: '100%',
        maxWidth: '200px',
    },
    buttonAlt: {
        cursor: 'pointer',
        fontWeight: '600',
        borderRadius: '8px',
        padding: '12px 18px',
        border: '2px solid #6a1b9a',
        color: '#6a1b9a',
        background: 'transparent',
        fontSize: '16px',
        width: '100%',
        maxWidth: '200px',
    },
};

export default Login;
