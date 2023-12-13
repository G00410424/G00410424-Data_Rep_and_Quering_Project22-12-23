//create.js - to create/add trips.

// Import necessary modules
import { useState } from "react";
import axios from "axios";
import { footerStyle, Footer } from './footer'; 

// Styles for various containers
const contentContainerStyle = {
    display: "flex", // Use flexbox to arrange content
    padding: "20px",
    textAlign: "left",
};

const formContainerStyle = {
    flex: 1, // Take up 1 part of the flex container
};

const imageContainerStyle = {
    marginLeft: "10px", // Adjusted margin to move the image more to the left
    marginRight: "200px", // Added margin to bring the image closer to the forms
    marginTop: "50px", // Adjusted top margin for the image
    textAlign: "left",
};

// Styles for the "rounded" image
const roundedImageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "10%", // Added border-radius to make it circular
    border: "20px solid #808080", // Added a 20px gray border
};

// React functional component for creating a trip
function Create() {

     // State variables for form input fields
    const [location, setLocation] = useState('');
    const [cover, setCover] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    // Function to handle form submission
    const handleSubmit = (e)=>{
        e.preventDefault();

         // Log form input values
        console.log("Location: "+location+
        " Cover: "+cover+
        " Description: "+description,
        " Date: "+date);

        // Create trip object with form values
        const trip = {
            location:location,
            cover:cover,
            description:description,
            date:date
        };

        // Use Axios to make a POST request to the server
        axios.post('http://localhost:4000/api/trip',trip)
        .then(() => {
            // Reset the form after successful submission
            setLocation('');
            setCover('');
            setDescription('');
            setDate('');
        })
        .catch(error => {
            // Handle errors appropriately, e.g., show an error message
            console.error("Error submitting form:", error);
        });

                const contentContainerStyle = {
            border: "5px solid black", // Add border style
            padding: "20px", // Add padding for spacing
            textAlign: "left", // Align text to the left
        };

    }

     // Return JSX for the component
    return (
        <div>
            {/* Main content container */}
        <div style={contentContainerStyle}>
            {/* Form container */}
            <div style={formContainerStyle}>
            <h2>Lets log our trips</h2>
            {/* Form for adding a new trip */}
            <form onSubmit={handleSubmit}>
                {/* Form input fields */}
                <div className="form-group" style={{ display: "block", textAlign: "left", marginTop: "2rem"}}>
                    <label>Add Trip Location: </label>
                    <input type="text"
                        placeholder="Sao Paulo - Brazil"
                        className="form-control"
                        style={{ width: "50%", marginTop: "1rem", border: "3px solid black"}} 
                        value={location}
                        onChange={(e) => { setLocation(e.target.value) }}
                    />
                </div>

                 {/* Repeat similar blocks for other input fields */}
                <div className="form-group" style={{ display: "block", textAlign: "left", marginTop: "2rem"}}>
                    <label>Add Trip Cover: </label>
                    <input type="text"
                        placeholder="Find an image, right click, select 'Copy Image Link' and paste it here!"
                        className="form-control"
                        style={{ width: "50%", marginTop: "1rem", border: "3px solid black"}} 
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div className="form-group" style={{ display: "block", textAlign: "left", marginTop: "2rem" }}>
                    <label>Add Trip Description: </label>
                    <textarea
                        placeholder="This trip was amazing!"
                        className="form-control"
                        style={{ width: "50%", marginTop: "1rem", border: "3px solid black"}}
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                        rows={4} // Set the number of visible rows
                    />
                </div>
                <div className="form-group" style={{ display: "block", textAlign: "left", marginTop: "2rem"}}>
                    <label>Add Trip Date: </label>
                    <input type="text"
                        placeholder="September 2018"
                        className="form-control"
                        style={{ width: "50%", marginTop: "1rem", border: "3px solid black" }} 
                        value={date}
                        onChange={(e) => { setDate(e.target.value) }}
                    />
                </div>
                {/* Submit button */}
                <div style={{ textAlign: "left", marginTop: "1rem"}}>
                    <input type="submit"
                    value="Add Trip">
                        </input>
                        
                </div>
            </form>
        </div>
        {/* Image container */}
        <div style={imageContainerStyle}>
                <img
                    src="travel-diary.jpg" 
                    alt="Travel Diary"
                    style={roundedImageStyle}
                />
                </div>
            </div>
            {/* Include the Footer component */}
            <Footer />
        </div>
        
    );
}

// Export the Create component as the default export
export default Create;
