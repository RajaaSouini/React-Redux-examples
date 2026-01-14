export const AjouterClient = "AJOUTER_CLIENT";
export const SupprimeClient = "SUPPRIME_CLIENT";
export const RechercheVille = "RECHERCHE_VILLE";

 export const ajouterClient = (client) => ({
  type: AjouterClient,
  payload: client,
});

export const supprimeClient = (client) => ({
  type: SupprimeClient,
  payload: client,
});

export const rechercheVille = (ville) => ({
  type: RechercheVille,
  payload: { ville },
});


