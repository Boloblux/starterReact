import React, { useState, useEffect } from 'react'
import styles from '../styles/Navbar.module.css'

/*export default function Count() {
    const [count, setCount] = useState(0); 
        Ce qu'on met dans la div pour afficher et incrémenter count :
        <p>Vous avez cliqué { count } fois</p>
        <button onClick={() => setCount(count + 1)}>Ajouter 1</button>
        <br/>
    const [toto, setToto] = useState("toto"); (on met {toto} dans la div pour l'appeler et l'afficher)
    const [todolist, setTodolist] = useState([])
    const [todo, setTodo] = useState("");
    const addEntryClick = () => {
        setTodolist(todolist => [...todolist, todo]);
    };
    const [lastitem, setLastitem] = useState(null);

    useEffect(() => {
        localStorage.setItem("todos", todolist)
    }, [todolist])

    useEffect(() => {
        setLastitem(todolist.length - 1);
    }, [todolist])


    function deleteTodo(removeIndex) {
        setTodolist(todolist.filter((item, i) => {
            if (i != removeIndex) {
                return item
            }
        }))
    }

    une ternaire c'est une condition avancée avec ce qu'elle doit faire si elle se réaliser ou non: 
    condition ? true : false*/

export default function Navbar(){
    return (
        /*<div>
            <h1>To do :</h1>
            { todolist.map((item, i) => {
                return (
                    <p style={{color : i === lastitem ? 'red' : 'black'}} key={i}>{item} <span onClick={() => {deleteTodo(i)}}>X</span></p>
                )
            })}
            <input type="text" onChange={(e) => {setTodo(e.target.value)}} value={todo}/> <br/>
            <button onClick={addEntryClick}>Add</button>
        </div>*/
        <div className={styles.navcontainer}>
            <p>toto</p>
            <p>tata</p>
            <p>titi</p>
        </div>
    )
}