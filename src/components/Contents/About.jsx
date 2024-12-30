import React from 'react';
import Image from 'next/image';
import { FaDownload } from "react-icons/fa6";

export default function About(props) {
    return (
        <div id="about">
            <div className='container mt-4'>
                <h2 className='text-center mb-5'>A propos</h2>
                <div className="row" >
                    <div className="col-lg-4 mx-auto d-flex justify-content-center mb-5">
                        <Image
                            src="/images/tete.webp"
                            className="imageAboutPage"
                            alt="Ma tête"
                            width={500} 
                            height={500} 
                        />
                    </div>
                    <div className="col-lg-8">
                        <p className="text-lg-start text-sm-center mb-5">
                            Salut à tous, je m'appelle Nathan Carteau.
                            Vous connaissez sûrement déjà mon nom, mais ce que vous ne savez peut-être pas, c'est que
                            j'ai 22 ans et que je me suis orienté vers l'informatique.
                            <br />
                            Après mon BAC STI2D, j'ai enchaîné avec un BTS SIO option SLAM, où j'ai appris à coder en
                            HTML/CSS, JavaScript, et un peu de Java et PHP.
                            <br />
                            Ensuite, j'ai suivi une formation POEC pour devenir testeur logiciel, ce qui m'a permis
                            d'obtenir la certification ISTQB.
                            <br />
                            Pour aller plus loin, j'ai décidé de me perfectionner dans le test logiciel avec une
                            formation chez OpenClassrooms.
                            <br />
                            Désormais, je cherche à acquérir de l'expérience au sein d'une entreprise mon choix se portant sur une alternance pour débuter.
                            <br />
                            Si mon profil vous intéresse, hésitez pas à me contacter, je ne mords pas.</p>
                        <h3 className="text-center">Télécharge mon CV !!!</h3>
                        <div className="d-flex justify-content-center">
                            <a className="btn mt-4" href="/docs/CV.pdf" download="CV.pdf">
                                <FaDownload /> Clique ici !</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

