 export const AJOUTER_STAGIAIRE = "AJOUTER_STAGIAIRE";
export const AJOUTER_FORMATEUR = "AJOUTER_FORMATEUR";

 export const ajouterStagiaire = (stagiaire) => ({
  type: AJOUTER_STAGIAIRE,
  payload: stagiaire,
});

export const ajouterFormateur = (formateur) => ({
  type: AJOUTER_FORMATEUR,
  payload: formateur,
});


