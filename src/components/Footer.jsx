import Link from 'next/link';
import { FaRegEnvelope } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import React from 'react';

export default function Footer(props) {
    return (
        <div id="contact">
            <div className="container contactContent">
                <h2 className="text-center my-5">Contactez-moi</h2>
                <div className="row">
                    <div className="col-lg-4 text-center contactColumn mb-3">
                        <BsFillTelephoneFill size="50" color='rgb(255, 192, 0)' />
                        <h3>Téléphone</h3>
                        <p>07.67.37.98.98</p>
                    </div>
                    <div className="col-lg-4 text-center contactColumn mb-3">
                        <FaRegEnvelope size="50" color='rgb(255, 192, 0)' />
                        <h3>Adresse email</h3>
                        <p>nat.carteau@gmail.com</p>
                    </div>
                    <div className="col-lg-4 text-center contactColumn mb-3">
                        <CiLinkedin size="50" color='rgb(255, 192, 0)' />
                        <h3>LinkedIn</h3>
                        <Link href="https://www.linkedin.com/in/nathan-carteau/">https://www.linkedin.com/in/nathan-carteau/
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}