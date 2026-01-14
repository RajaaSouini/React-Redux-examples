import { useSelector, useDispatch } from "react-redux";
// import Client from './reducer'
import {delectC} from './reducer'
function ListClient() {
  const clients = useSelector((data)=>data.Client.value);
 const dispatch = useDispatch();

 const handleDelete = (ville) => {
     dispatch(delectC({ ville }));
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
                <button onClick={() => handleDelete(c.ville)}>Supprimer</button>
                {/* <button onClick={}>modifier</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListClient;


