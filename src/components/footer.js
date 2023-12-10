// Footer.js
import React from 'react';

const footerStyle = {
    marginTop: "20px", // Add margin at the top to separate from content
    backgroundColor: "#f0f0f0", // Add background color
    padding: "10px", // Add padding for spacing
    textAlign: "center", // Align text to the center
};

function Footer() {
    return (
        <div style={footerStyle}>
            <h2>This is my Footer in another component!</h2>
        </div>
    );
}

export { footerStyle, Footer };