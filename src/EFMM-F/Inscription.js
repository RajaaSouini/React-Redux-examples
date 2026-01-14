import { useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addInscription } from "./inscriptionActions"

function FormInscription() {
    const { nomPays } = useParams()
    const dispatch = useDispatch()
    
    const [formData, setFormData] = useState({
        nomPays: nomPays,
        nom: '',
        prenom: '',
        email: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addInscription(formData))
        alert('Inscription envoyée avec succès!')
    }

    return (
        <>
         <form onSubmit={handleSubmit} > 
            <h1>Agence de Voyage</h1>
          <h3>Inscription pour : {formData.nomPays }</h3>
                      Nom du pays:  
                    <input 
                        type="text"  
                        name="nomPays" 
                        value={formData.nomPays}
                        onChange={(e) => setFormData({ ...formData, nomPays: e.target.value })}
                        
                    /> <br/>
      
                   Nom:  
                    <input 
                        type="text" 
                        name="nom"  
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                     /><br/>
             
                    Prénom:
                    <input  
                        type="text" 
                        name="prenom"   
                        value={formData.prenom}
                        onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                        required
                    /> <br/>
             
                 
                   Email:  
                    <input  
                        type="email" 
                        name="email"  
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                     /> <br/>
                 
                <button type="submit">Envoyer</button>
            </form>
        </>
    )
}

export default FormInscription