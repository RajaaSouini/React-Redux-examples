import { useSelector, useDispatch } from "react-redux";
import { supprimeClient } from "./action";

function ListClient() {
  const clients = useSelector((state) => state.Client);
  const dispatch = useDispatch();

  const handleDelete = (nom) => {
     dispatch(supprimeClient({ nom }));
  };

  return (
    <>
      <h1>Liste des Clients  </h1>
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>nom</th>
            <th>tel</th>
            <th>ville</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{c.nom}</td>
              <td>{c.numtel}</td>
              <td>{c.ville}</td>
              <td>
                <button onClick={() => handleDelete(c.nom)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListClient;


