import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsCard({ image, alt, title, text, githubLink, aperçusLink }) {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card project h-100">
                <div className="card-body">
                    <Image 
                    className="img-fluid" 
                    src={`/images/${image}`} 
                    alt={alt} 
                    width={400}  
                    height={200}
                    layout='responsive'
                    />
                    <h3 className="card-title text-center mt-3">{title}</h3>
                    <p className="card-text">{text}</p>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-6">
                        <Link href={githubLink} className="btn">Github</Link>
                        </div>
                        <div className="col-6">
                        <Link href={aperçusLink} className="btn">Aperçu</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
