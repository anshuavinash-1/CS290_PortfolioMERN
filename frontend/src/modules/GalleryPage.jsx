import React from 'react';
import Footer from './Footer';


const images = [
    {
        filepath: '/chess-portfolio.png',
        caption: 'The image displays the output of a Python script named ChessVar.py in a coding environment, likely an IDE. ',
        title: 'chess-portfolio'
    },
    {
        filepath: '/python-program-output.png',
        caption: 'The image shows the output of a Python script named LinkedList.py ',
        title: 'python-program-output'
    },
    {
        filepath: '/concert.jpg',
        caption: 'The image showcases a dynamic K-pop concert at Tacoma Dome, in a large indoor arena.',
        title: 'concert'
    },
    {
        filepath: '/museum.jpg',
        caption: 'This image captures a diverse array of classical artifacts on display at the Getty Museum in Los Angeles.',
        title: 'museum'
    },
   
];

const GalleryPage = () => {
    return (
        <div className='main' >
            <h2>Explore Image Gallery</h2>
            <p>This gallery showcases a variety of visual projects, each highlighting unique designs and data visualizations. Each image is accompanied by a caption and copyright statement for your reference.</p>
            <article id="gallery">
                {images.map((image, index) => (
                    <figure key={index}>
                        <img src={image.filepath} alt={image.caption} title={image.title} />
                        <figcaption>{image.caption}</figcaption>
                    </figure>
                ))}
            </article>
            <Footer />
        </div>
    );
};

export default GalleryPage;
