import React from 'react';
import Footer from './Footer';

const HomePage = () => {
    return (
        <div className="home main">
            <header>
                <h1>Welcome to My Web Development Portfolio</h1>
                <p>Explore my projects, skills, and achievements.</p>
            </header>
            <article>
                <p>
                I am currently majoring in Computer Science with a focus on user experience research.
                 I am considering several career paths, including becoming a full-stack developer, where I 
                 can leverage my technical skills to handle both front-end and back-end development; leading
                  a development team, where I can guide projects and ensure high-quality outcomes; and pursuing
                   a role as a UX/UI designer, where my expertise in user experience research can help create 
                   intuitive and engaging interfaces.
                </p>
            </article>
            <section className="about-me">
                <h2>Embarking on a Web Development Adventure</h2>
                <article>
                    <p>Welcome to my portfolio website! Here, you can explore various projects and technologies that have shaped my web development journey. My goal is to create intuitive, user-friendly applications that leverage cutting-edge technologies and best practices in web development. Through this portfolio, I aim to showcase my skills and demonstrate how I can turn ideas into functional and engaging web experiences.</p>
                </article>
                <article>
                    <p>Throughout this website, you will find the following technologies and concepts at play:</p>
                    <ul>
                        <li><strong>HTML:</strong> The backbone of web content, providing structure and semantic meaning to web pages.</li>
                        <li><strong>CSS:</strong> The language used to style and layout web pages, enhancing the visual appeal and user experience.</li>
                        <li><strong>JavaScript:</strong> A powerful scripting language that adds interactivity and dynamic features to web pages.</li>
                        <li><strong>Node.js:</strong> A JavaScript runtime built on Chrome's V8 engine, allowing for server-side scripting and development.</li>
                        <li><strong>Express.js:</strong> A web application framework for Node.js, facilitating the creation of robust and scalable server-side applications.</li>
                        <li><strong>Asynchronous Programming:</strong> Techniques like callbacks, promises, and async/await that enable non-blocking operations and efficient handling of asynchronous tasks.</li>
                        <li><strong>DOM (Document Object Model):</strong> An interface that represents the structure of web documents, allowing JavaScript to manipulate and interact with HTML elements dynamically.</li>
                    </ul>
                </article>
            </section>
            
            <Footer />
        </div>
    );
};

export default HomePage;
