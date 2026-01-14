import { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouterClient } from "./action";

function AjoutClient() {
  const [client, setClient] = useState({
    nom: "",
    numtel: "",
    ville: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ajouterClient(client));
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
          value={client.nom}
          onChange={(e) => setClient({ ...client, nom: e.target.value })}
        />
        <br />
        Num tel:{" "}
        <input
          type="text"
          value={client.numtel}
          onChange={(e) => setClient({ ...client, numtel: e.target.value })}
        />
        <br />
        Ville:{" "}
        <input
          type="text"
          value={client.ville}
          onChange={(e) => setClient({ ...client, ville: e.target.value })}
        />
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </>
  );
}

export default AjoutClient;


