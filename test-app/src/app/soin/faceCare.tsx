'use client'
import React, { useEffect, useState } from 'react'

async function getCares() {
    
    const baseUrl = window.location.origin;
    const response = await fetch(`${baseUrl}/faceCare.json`);
    const data = await response.json();

    return data;
}

export default function FaceCare() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await getCares();
            setData(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            {data.map((care : any, index : any) => (
                <div key={index}>
                    <h2>{care.name}</h2>
                    <p>{care.description}</p>
                    <p>{care.duration} min</p>
                    <p>{care.price}€</p>
                </div>
            ))}
        </div>
    );
}
