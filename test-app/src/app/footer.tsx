import React from 'react'
import '../styles/footer.css'

export default function Footer() {
  return (
    <div className="section footer">
        <div className="full-section-image footer">
            <div className="center-content-wrapper center-aligment footer">
                <div className="decorative footer">A propos de l&apos;institut...</div>
                <div className="content-footer">
                    <h2  className="h2-footer">Institut secret de beaute</h2>
                    <div className="wrapper-footer">
                        <p className="p-footer">Institut climatise</p>
                        <p className="p-footer">Adresse: 10 rue du Distro, 56690 LANDEVANT</p>
                    </div>
                    <div className="wrapper-footer">
                        <p className="p-footer">Tel : 06 12 35 08 77</p>
                        <p className="p-footer">Rendez-vous par SMS</p>
                    </div>
                    <div className="wrapper-footer">
                        <p className="p-footer">Email : sophie.lesaint56@gmail.com</p>
                    </div>
                    <div className="wrapper-footer">
                        <p className="p-footer">Horaires d&apos;ouverture :</p>
                        <p className="p-footer heavy">Ouvert sur rendez-vous</p>
                        <p className="p-footer">du Lundi au Vendredi : de 9h00 a 19h00</p>
                        <p className="p-footer">le Samedi : de 9h00 a 13h00</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
