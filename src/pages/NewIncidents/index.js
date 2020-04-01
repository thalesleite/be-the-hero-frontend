import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';

export default function NewIncidents() {
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleNewIncident(event) {
        event.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('/incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });

            history.push('/profile');
        } catch (error) {
            alert('Error while it was creating a new incident, try again!');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Add Incident</h1>
                    <p>Please, describe it with as much detail as possible in order to find a hero to solve it.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Back to homepage
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        type="text" 
                        placeholder="Incident's title"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                    <textarea 
                        placeholder="Description"
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Value"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}