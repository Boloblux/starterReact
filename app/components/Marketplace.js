import React, { useState, useEffect } from 'react'
import styles from '../styles/Marketplace.module.css'
import Card from './Card';

export default function Marketplace(){
    const [user, setUser] = useState(null);

    return (
        
        <div className={styles.marketcontainer}>
            <h3>Marketplace</h3>
            <div className={styles.cards}>
                <Card 
                    title="Fanta" 
                    desc="Salut à tous c'est Fanta" 
                    price="250000" 
                    image="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9jxfvzA0auo%2Fhqdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9jxfvzA0auo&tbnid=d9I4-7aFKYLRLM&vet=12ahUKEwjp_Ing-uD0AhULbhQKHWx-B00QMygBegUIARCwAQ..i&docid=x7NjbmDMIBDlAM&w=480&h=360&q=fantasio%20974&client=firefox-b-d&ved=2ahUKEwjp_Ing-uD0AhULbhQKHWx-B00QMygBegUIARCwAQ"
                />
                <Card 
                    title="Monke" 
                    desc="Water monke" 
                    price="999999999999" 
                    image="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fview%2Fmonkey-swimming-meme-sea-fun-gif-19233308&psig=AOvVaw3KQbxVEgDsylJXl1j_HPO2&ust=1639491801799000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJD4-oX94PQCFQAAAAAdAAAAABAD"
                />
            </div>
        </div>
    )
}