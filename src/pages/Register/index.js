import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const response = await api.post('/ongs', data);

            alert(`Your access ID: ${response.data.id}`);
            history.push('/');
        } catch (error) {
            alert(`An error occurred with the register, try again!`);
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Register</h1>
                    <p>Create an account, login it and help others to find your ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        I don't have account
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="ONG's name"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <input
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={event => setWhatsapp(event.target.value)}
                    />
                    <div className="input-group">
                        <input
                            placeholder="City"
                            value={city}
                            onChange={event => setCity(event.target.value)}
                        />
                        <input 
                            placeholder="UF"
                            style={{ width: 80 }}
                            value={uf}
                            onChange={event => setUf(event.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}