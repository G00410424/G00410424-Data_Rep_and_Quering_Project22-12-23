import { useState } from "react";
import axios from "axios";

function Create() {

    const [location, setLocation] = useState('');
    const [cover, setCover] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log("Location: "+location+
        " Cover: "+cover+
        " Description: "+description);

        const trip = {
            location:location,
            cover:cover,
            description:description
        };

        axios.post('http://localhost:4000/api/trip',trip)
        .then()
        .catch();

    }
    // some comment
    return (
        <div>
            <h2>Hello from create Component!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Trip Location: </label>
                    <input type="text"
                        className="form-control"
                        value={location}
                        onChange={(e) => { setLocation(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Location Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Trip Description: </label>
                    <input type="text"
                        className="form-control"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit"
                    value="Add Trip">
                        </input>
                        
                </div>
            </form>
        </div>
    );

}
export default Create;