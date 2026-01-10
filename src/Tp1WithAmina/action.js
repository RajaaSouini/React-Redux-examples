export const AjouterClient='AjouterClient';
export const SupprimeClient="SupprimeClient"
export const RechercheVille="RechercheVille";

export const AjoutC =(ClientData)=>({
    
    type:AjouterClient,
    payload:ClientData
});
export const SupprimeC=(index)=>({
    type:SupprimeClient,
    payload:index
})
export const RechercheC=(ville)=>({
    type:RechercheVille,
    payload:{ville}
})