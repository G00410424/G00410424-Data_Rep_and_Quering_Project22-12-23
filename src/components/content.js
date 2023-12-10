function Content() {
    const imageStyle = {
        width: "100%",
        maxWidth: "633px",
        height: "300px",
        margin: "1px",
        border: "5px solid black", // Add border style
        transition: "transform 0.2s", // Add a smooth transition effect
    };

    const gridContainerStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2px", // Reduce the gap between images
        justifyContent: "center", // Center the container horizontally
    };

    return (
        <div>
            <h1>Hello World, these are my trips!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            <br></br>

            <div style={gridContainerStyle}>

            <a href="https://en.wikipedia.org/wiki/Prague" target="_blank" rel="noopener noreferrer">
                <img
                    src="/Prague.png"
                    alt="Prague"
                    style={imageStyle}
                />
            </a>

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

                {/* Add more images as needed */}
            </div>

            <br></br>
            <h1>Flight Searching Tools</h1>
            <br></br>
            <h3>
                Embarking on a journey becomes a breeze with my trusted flight-searching trio: Google Flights, Skyscanner, and Kayak. Google Flights stands out with its user-friendly interface and in-depth information, offering not only a range of flight options but also insights into the ideal booking times.
                Skyscanner, another essential companion, boasts a powerful search engine that scours various airlines and travel agencies, presenting users with the most cost-effective choices. The "Everywhere" feature adds an element of spontaneity, allowing adventurers to explore destinations based on their budget.
                Completing the trio is Kayak, a go-to platform for comprehensive flight searches. Kayak's robust technology sifts through a myriad of options, presenting users with a diverse array of flights to suit their preferences. Its user-friendly interface and efficient comparison tools simplify the decision-making process.
                With this dynamic trio at my disposal, the once-daunting task of finding the perfect flight transforms into a seamless and enjoyable experience. Whether it's harnessing the predictive analytics of Google Flights, the extensive search capabilities of Skyscanner, or the comprehensive options provided by Kayak, these tools collectively elevate travel planning to new heights.
            </h3>


        </div>

        
    );
}

export default Content;