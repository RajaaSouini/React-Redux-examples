import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import ListFormations from './ListFormations';
import DetailInscrit from './DetailInscrit';
import ListInscriptions from './ListInscriptions';

const App = () => {
  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <NavLink to="/formations" style={{ marginRight: '10px' }}>
          Liste des Formations
        </NavLink>
        <NavLink to="/inscriptions">Mes Inscriptions</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<ListFormations />} />
        <Route path="/formations" element={<ListFormations />} />
        <Route path="/inscription" element={<DetailInscrit />} />
        <Route path="/inscriptions" element={<ListInscriptions />} />
      </Routes>
    </div>
  );
};

export default App;


