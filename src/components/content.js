function Content() {
    const imageStyle = {
        width: "100%",
        maxWidth: "200px",
        height: "200",
        margin: "1px",
        border: "5px solid black", // Add border style
    };

    const gridContainerStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1px", // Reduce the gap between images
        justifyContent: "center", // Center the container horizontally
    };

    return (
        <div>
            <h1>Hello World, these are my trips!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>

            <div style={gridContainerStyle}>
                <img
                    src="/Prague.png"
                    alt="Prague"
                    style={imageStyle}
                />

                <img
                    src="/MachuPicchu.jpg"
                    alt="Machu Picchu"
                    style={imageStyle}
                />

                <img
                    src="/Lisbon.jpg"
                    alt="Lisbon"
                    style={imageStyle}
                />

                <img
                    src="/Belgrade.jpg"
                    alt="Belgrade"
                    style={imageStyle}
                />

                <img
                    src="/Krakow.jpg"
                    alt="Krakow"
                    style={imageStyle}
                />

                <img
                    src="/SaoPaulo.jpg"
                    alt="SaoPaulo"
                    style={imageStyle}
                />

                {/* Add more images as needed */}
            </div>
        </div>
    );
}

export default Content;