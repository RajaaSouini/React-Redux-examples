import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addInscrit } from './inscriptionActions';
import StyledButton from './StyledButton';

const DetailInscrit = () => {
  const location = useLocation();
  const formation = location.state?.formation;
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    titre: formation?.titre || '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nom || !formData.prenom || !formData.email || !formData.telephone) {
      alert('Tous les champs sont obligatoires');
      return;
    }
    dispatch(addInscrit(formData));
    alert('Inscription enregistrée');
  };

  if (!formation) {
    return <p>Aucune formation sélectionnée.</p>;
  }

  return (
    <div>
      <h2>Inscription à la formation : {formation.titre}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre de la formation</label>
          <br />
          <input type="text" name="titre" value={formData.titre} readOnly />
        </div>

        <div>
          <label>Nom</label>
          <br />
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
        </div>

        <div>
          <label>Prénom</label>
          <br />
          <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
        </div>

        <div>
          <label>Email</label>
          <br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div>
          <label>Téléphone</label>
          <br />
          <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} required />
        </div>

        <StyledButton type="submit">S'inscrire</StyledButton>
      </form>
    </div>
  );
};

export default DetailInscrit;


