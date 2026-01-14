import React from 'react';
import { useSelector } from 'react-redux';

const ListInscriptions = () => {
  const inscriptions = useSelector((state) => state.inscription.inscriptions);

  return (
    <div>
      <h2>Liste des Inscriptions</h2>
      {inscriptions.length === 0 ? (
        <p>Aucune inscription pour le moment.</p>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Titre formation</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Téléphone</th>
            </tr>
          </thead>
          <tbody>
            {inscriptions.map((ins, index) => (
              <tr key={index}>
                <td>{ins.titre}</td>
                <td>{ins.nom}</td>
                <td>{ins.prenom}</td>
                <td>{ins.email}</td>
                <td>{ins.telephone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListInscriptions;


