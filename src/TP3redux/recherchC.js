import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rechercheVille } from "./action";

function RechercheVille() {
  const listVille = ["safi", "casa", "rabat", "Taoujtat"];
  const [ville, setVille] = useState("");
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.Client);

  const handleChange = (e) => {
    const selectedVille = e.target.value;
    setVille(selectedVille);
    dispatch(rechercheVille(selectedVille));
  };

  return (
    <>
      <h1>Recherche par Ville (TP3 / immer)</h1>
      Ville:{" "}
      <select onChange={handleChange} value={ville}>
        <option value="">Sélectionner une ville</option>
        {listVille.map((l, index) => (
          <option key={index} value={l}>
            {l}
          </option>
        ))}
      </select>
      <hr />
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>nom</th>
            <th>tel</th>
            <th>ville</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{c.nom}</td>
              <td>{c.numtel}</td>
              <td>{c.ville}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default RechercheVille;


