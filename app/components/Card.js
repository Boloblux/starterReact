import React from "react";
import Image from "next/image";
import styles from '../styles/Card.module.css'

export default function Card(props) {
    return (
        <div className={styles.cardcontainer}>
            <h2>{props.title}</h2>
            <Image width="100%" height="100%" src={props.image} alt=""/>
            <p>{props.desc}</p>
            <h2 className={styles.price}>{props.price} €</h2>
            <button>+</button>
        </div>
    )
}