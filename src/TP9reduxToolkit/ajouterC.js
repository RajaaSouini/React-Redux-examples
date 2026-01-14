import { useState } from "react";
import { useDispatch } from "react-redux";
 import { AjoutC } from "./reducer";
function AjoutClient() {
  const [usersData, setClient] = useState({
    nom: "",
    numtel: "",
    ville: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AjoutC(usersData));
    alert("Client ajouté");
    setClient({ nom: "", numtel: "", ville: "" });
  };

  return (
    <>
      <h1>Ajout Client</h1>
      <form onSubmit={handleSubmit}>
        Nom:{" "}
        <input
          type="text"
          value={usersData.nom}
          onChange={(e) => setClient({ ...usersData, nom: e.target.value })}
        />
        <br />
        Num tel:{" "}
        <input
          type="text"
          value={usersData.numtel}
          onChange={(e) => setClient({ ...usersData, numtel: e.target.value })}
        />
        <br />
        Ville:{" "}
        <input
          type="text"
          value={usersData.ville}
          onChange={(e) => setClient({ ...usersData, ville: e.target.value })}
        />
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </>
  );
}

export default AjoutClient;


