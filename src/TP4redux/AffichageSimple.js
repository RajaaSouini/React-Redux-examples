import { useSelector, useDispatch } from "react-redux";
import { ajouterStagiaire, ajouterFormateur } from "./action";

function AffichageSimple() {
  const stagiaires = useSelector((state) => state.stagiaire.liste);
  const formateurs = useSelector((state) => state.formateur.liste);
  const dispatch = useDispatch();

  const handleClick = () => {
     dispatch(ajouterStagiaire({ nom: "amina", filiere: "DEV WEB" }));
    dispatch(ajouterFormateur({ nom: "Sara", module: "React" }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2> Stagiaires & Formateurs</h2>

      <button onClick={handleClick}>Ajouter</button>

      <h3>Liste</h3>
      <ul>
        {stagiaires.map((s, index) => (
          <li key={`s-${index}`}>
            Stagiaire: {s.nom} {s.filiere && `- ${s.filiere}`}
          </li>
        ))}
        {formateurs.map((f, index) => (
          <li key={`f-${index}`}>
            Formateur: {f.nom} {f.module && `- ${f.module}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AffichageSimple;


