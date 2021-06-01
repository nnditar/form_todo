import React, {useState} from "react";

const Forms = ({addTodo}) =>{

    const [inputTitre, setInputTitre] = useState("");
    const [inputDescription, setInputDescription] = useState("");

    const submitTodoHandler = (e) => {
        e.preventDefault();
        let todo = {
            titre: inputTitre,
            description: inputDescription
        };

        addTodo (todo); 
        
        setInputDescription('');
        setInputTitre('');

    }

    console.log('Forms.js');
    return (
        <form >
            <input  value={inputTitre} onChange={(e) => setInputTitre(e.target.value)} type="text" placeholder="Titre" />
            <input  value={inputDescription} onChange={(e) => setInputDescription (e.target.value)} type="text" placeholder="Description" />

            <button onClick={(submitTodoHandler)} type='submit'>Ajouter</button>
            
        </form>


    )
}

export default Forms