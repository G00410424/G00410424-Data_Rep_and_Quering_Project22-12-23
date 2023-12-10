import { useState } from "react";
import axios from "axios";

const contentContainerStyle = {
    border: "5px solid black", // Add border style
    padding: "20px", // Add padding for spacing
    textAlign: "left", // Align text to the left
};


function Create() {

    const [location, setLocation] = useState('');
    const [cover, setCover] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log("Location: "+location+
        " Cover: "+cover+
        " Description: "+description,
        " Date: "+date);

        const trip = {
            location:location,
            cover:cover,
            description:description,
            date:date
        };

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
    // some comment
    return (
        <div style={contentContainerStyle}>
            <h2>Lets log out trips</h2>
            <form onSubmit={handleSubmit}>
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
                        rows={4}
                    />
                </div>
                <div style={{ textAlign: "left", marginTop: "1rem"}}>
                    <input type="submit"
                    value="Add Trip">
                        </input>
                        
                </div>
            </form>
        </div>
    );

}
export default Create;