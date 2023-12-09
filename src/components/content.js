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
        </div>
    );
}

export default Content;