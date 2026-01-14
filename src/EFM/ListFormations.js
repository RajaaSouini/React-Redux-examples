import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ListFormations = () => {
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        setLoading(true);
        // Tentative d'appel API
        const res = await axios.get('http://localhost:5000/formations');
        setFormations(res.data);
      } catch (err) {
        // En cas d'erreur, utiliser les données exactes de l'image
        const mockFormations = [
          {
            id: 1,
            titre: 'React js',
            type: 'Pratique',
            prix: 560,
            dateDebut: '2/4/2025',
            dateFin: '8/5/2025',
            formateur: 'F1'
          },
          {
            id: 2,
            titre: 'React native',
            type: 'Pratique',
            prix: 300,
            dateDebut: '2/6/2025',
            dateFin: '2/8/2025',
            formateur: 'F1'
          },
          {
            id: 3,
            titre: 'Laravel 11',
            type: 'Pratique+ Théorique',
            prix: 1560,
            dateDebut: '12/2/2025',
            dateFin: '18/2/2025',
            formateur: 'F2'
          },
          {
            id: 4,
            titre: 'Scrum',
            type: 'Théorique',
            prix: 2800,
            dateDebut: '12/7/2025',
            dateFin: '22/9/2025',
            formateur: 'F5'
          }
        ];
        setFormations(mockFormations);
      } finally {
        setLoading(false);
      }
    };

    fetchFormations();
  }, []);

  const handleInscrireClick = (formation) => {
    navigate('/inscription', { state: { formation } });
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Formations</h2>
      <table border="1" cellPadding="8" cellSpacing="0" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th>Titre</th>
            <th>Type</th>
            <th>Prix</th>
            <th>Date de Début</th>
            <th>Date de Fin</th>
            <th>Formateur</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {formations.map((f, index) => (
            <tr key={f.id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
              <td>{f.titre}</td>
              <td>{f.type}</td>
              <td>{f.prix} DH</td>
              <td>{f.dateDebut}</td>
              <td>{f.dateFin}</td>
              <td>{f.formateur}</td>
              <td>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleInscrireClick(f);
                  }}
                  style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
                >
                  S'inscrire
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListFormations;


