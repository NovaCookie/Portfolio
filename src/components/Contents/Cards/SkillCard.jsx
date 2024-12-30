import Image from 'next/image';
import React from 'react';

export default function SkillCard({ image, alt, title, text}) {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card skills h-100">
            <div className="card-body">
            <Image src={`/images/${image}`}
                    alt={alt} 
                    className="card-img-top img-fluid" 
                    width={200}  
                    height={200}
                    />
                    <h3 className="card-title text-center mt-3">{title}</h3>
                    <p className="card-text mt-4">{text}</p>
                </div>
            </div>
        </div>
    );
}
