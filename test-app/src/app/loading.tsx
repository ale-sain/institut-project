'use client'
import React, { useState, useEffect } from 'react';

export default function Loading() {
  // État pour contrôler l'affichage du composant de chargement
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Définir un délai pour cacher le composant après 1 seconde
    const timer = setTimeout(() => {
      setShowLoading(false);
      // Ici, vous pourriez aussi rediriger l'utilisateur ou effectuer d'autres actions
    }, 1000);

    // Nettoyer le timer si le composant est démonté avant la fin du délai
    return () => clearTimeout(timer);
  }, []); // Ce tableau vide signifie que l'effet s'exécute une seule fois au montage du composant

  // Afficher le composant de chargement seulement si showLoading est vrai
  return showLoading ? (
    <div><h1>Loading...</h1></div>
  ) : null; // Rendre null ou un autre composant après le chargement
}
