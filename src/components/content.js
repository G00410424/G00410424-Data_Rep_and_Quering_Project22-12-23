//content.js - main page.

// Import required modules
import { footerStyle, Footer } from './footer'; // Adjust the path based on your project structure

// React functional component for the main content
function Content() {
    // Styles for the images
    const imageStyle = {
        width: "100%",
        maxWidth: "633px",
        height: "300px",
        margin: "1px",
        border: "5px solid black", 
        transition: "transform 0.2s", // Add a smooth transition effect
    };

    // Styles for the grid container
    const gridContainerStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2px", // Reduce the gap between images
        justifyContent: "center", // Center the container horizontally
    };

     // Styles for the main content container
    const contentContainerStyle = {
        padding: "20px", // Add padding for spacing
        textAlign: "left", // Align text to the left
    };

    return (
        //Header
        <div style={contentContainerStyle}> 
            <h1>Hello World, these are my trips!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            <br></br>

            {/* Grid container for images */}
            <div style={gridContainerStyle}>

            {/* Individual images with links */}
            <a href="https://en.wikipedia.org/wiki/Prague" target="_blank" rel="noopener noreferrer">
                <img
                    src="/Prague.png"
                    alt="Prague"
                    style={imageStyle}
                />
            </a>

            {/* Repeat similar block for other images */}
            <a href="https://en.wikipedia.org/wiki/Machu_Picchu" target="_blank" rel="noopener noreferrer">
                <img
                    src="/MachuPicchu.jpg"
                    alt="Machu Picchu"
                    style={imageStyle}
                />
             </a>

             <a href="https://en.wikipedia.org/wiki/Lisbon" target="_blank" rel="noopener noreferrer">
                <img
                    src="/Lisbon.jpg"
                    alt="Lisbon"
                    style={imageStyle}
                />
            </a>

            <a href="https://en.wikipedia.org/wiki/Belgrade" target="_blank" rel="noopener noreferrer">
                <img
                    src="/Belgrade.jpg"
                    alt="Belgrade"
                    style={imageStyle}
                />
            </a>
            
            <a href="https://en.wikipedia.org/wiki/Krak%C3%B3w" target="_blank" rel="noopener noreferrer">
                <img
                    src="/Krakow.jpg"
                    alt="Krakow"
                    style={imageStyle}
                />
            </a>

            <a href="https://en.wikipedia.org/wiki/S%C3%A3o_Paulo" target="_blank" rel="noopener noreferrer">
                <img
                    src="/SaoPaulo.jpg"
                    alt="SaoPaulo"
                    style={imageStyle}
                />
            </a>
            </div>

            {/* Flight Searching Tools Section */}
            <br></br>
            <h1>Flight Searching Tools</h1>
            <br></br>
            <h6>
                <p>Embarking on a journey becomes a breeze with my trusted flight-searching trio: Google Flights, Skyscanner, and Kayak. Google Flights stands out with its user-friendly interface and in-depth information, offering not only a range of flight options but also insights into the ideal booking times.</p>
                <p>Skyscanner, another essential companion, boasts a powerful search engine that scours various airlines and travel agencies, presenting users with the most cost-effective choices. The "Everywhere" feature adds an element of spontaneity, allowing adventurers to explore destinations based on their budget.</p>
                <p>Completing the trio is Kayak, a go-to platform for comprehensive flight searches. Kayak's robust technology sifts through a myriad of options, presenting users with a diverse array of flights to suit their preferences. Its user-friendly interface and efficient comparison tools simplify the decision-making process.</p>
                <p>With this dynamic trio at my disposal, the once-daunting task of finding the perfect flight transforms into a seamless and enjoyable experience. Whether it's harnessing the predictive analytics of Google Flights, the extensive search capabilities of Skyscanner, or the comprehensive options provided by Kayak, these tools collectively elevate travel planning to new heights.</p>
            </h6>
            <ul>
                    <li>
                        <a href="https://www.google.com/flights/" target="_blank" rel="noopener noreferrer">
                            Google Flights
                        </a>
                    </li>
                    <li>
                        <a href="https://www.skyscanner.com/" target="_blank" rel="noopener noreferrer">
                            Skyscanner
                        </a>
                    </li>
                    <li>
                        <a href="https://www.kayak.com/" target="_blank" rel="noopener noreferrer">
                            Kayak
                        </a>
                    </li>
                </ul>
                {/* Include the Footer component */}
                <Footer />
        </div>

        
    );
}

// Exporting the styles and the component for use in other files
export default Content;