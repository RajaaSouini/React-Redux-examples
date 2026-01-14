import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './action';

const App = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector(state => state);

    const handleClick = () => {
        dispatch(fetchUsers());
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>TP8 Redux Thunk - Liste des utilisateurs</h2>
            <button onClick={handleClick} style={{ 
                padding: '10px 20px', 
                fontSize: '16px', 
                cursor: 'pointer',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                marginBottom: '20px'
            }}>
                Afficher la liste
            </button>

            {loading && <div>Chargement...</div>}
            {error && <div style={{ color: 'red' }}>Erreur: {error}</div>}
            
            {users.length > 0 && (
                <div>
                    <h3>Liste des utilisateurs:</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {users.map(user => (
                            <li key={user.id} style={{ 
                                padding: '10px', 
                                margin: '5px 0', 
                                backgroundColor: '#f0f0f0',
                                borderRadius: '5px'
                            }}>
                                <strong>{user.name}</strong> - {user.email}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default App;

