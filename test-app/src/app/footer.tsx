import React from 'react'
import '../styles/footer.css'

export default function Footer() {
  return (
    <div className="section footer">
        <div className="full-section-image footer" id="contact">
            <div className="center-content-wrapper center-aligment footer">
                <div className="decorative footer">À propos de l&apos;institut...</div>
                <div className="content-footer">
                    <h2  className="h2-footer">Institut Secrets de Beauté</h2>
                    <div className="wrapper-footer">
                        <p className="p-footer">INSTITUT CLIMATISÉ</p>
                        <p className="p-footer">Adresse : 10 rue du Distro, 56690 LANDÉVANT</p>
                    </div>
                    <div className="wrapper-footer">
                        <p className="p-footer">Tel : 06 12 35 08 77</p>
                        <p className="p-footer">Rendez-vous par SMS</p>
                    </div>
                    <div className="wrapper-footer">
                        <p className="p-footer">Pas de règlement en CB</p>
                    </div>
                    <div className="wrapper-footer">
                        <p className="p-footer">Horaires d&apos;ouverture :</p>
                        <p className="p-footer heavy">Ouvert sur rendez-vous</p>
                        <p className="p-footer">du Lundi au Vendredi : de 9h00 a 19h00</p>
                        <p className="p-footer">Fermé le mercredi</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
