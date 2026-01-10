import React , {useState} from 'react';
import { useDispatch , useSelector } from 'react-redux';

const ClientForm = () => {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const dispatch = useDispatch();
    const addClient = (name , email) =>{
        dispatch({
            type : 'ADD_CLIENT' ,
            payload : {name , email}
        });

    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        addClient(name , email);
        setName('');
        setEmail('');

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' 
            value = {name} 
            placeholder='nom'
            onChange={(e) => setName(e.target.value)}
            required />

            <input type='email' 
            value={email}
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
            required />
            
            <button type='submit'>Ajouter client</button>
        </form>
    )
}
export default ClientForm;