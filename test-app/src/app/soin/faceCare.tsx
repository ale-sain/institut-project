import React from 'react'
import fs from 'fs';
import path from 'path';

async function getCares() {
    const fileContent = fs.readFileSync('/usr/app/src/app/soin/faceCare.json', 'utf8');
    const data = JSON.parse(fileContent);

    return data;
}

export default async function FaceCare() {
    const data = await getCares();
    return (
        <div>
            {data.map((care, index) => (
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
