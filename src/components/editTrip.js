import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Edit() {
    let {id} = useParams();

    const [location, setLocation] = useState('');
    const [cover, setCover] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate();

    useEffect(
        ()=>{
            axios.get('http://localhost:4000/api/trip/'+id)
            .then((response)=>{
                setLocation(response.data.location);
                setCover(response.data.cover);
                setDescription(response.data.description);
                setDate(response.data.date);
                
            })
            .catch(
                (error)=>{
                    console.log(error);
                }
            );
        },[]
    );

    const handleSubmit = (e)=>{
        e.preventDefault();

        const trip = {
            location:location,
            cover:cover,
           description:description,
           date:date
        }

        axios.put('http://localhost:4000/api/trip/'+id, trip) 
        .then((res)=>{
            navigate('/read');
        })
        .catch(
            (error)=>{
                console.log(error)
            });
    }
    return (
        <div>
            <h2>Hello from Edit Component!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Trip Location: </label>
                    <input type="text"
                        className="form-control"
                        value={location}
                        onChange={(e) => { setLocation(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Trip Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Trip Description: </label>
                    <input type="text"
                        className="form-control"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Trip Date: </label>
                    <input type="text"
                        className="form-control"
                        value={date}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit"
                    value="Edit Trip">
                        </input>
                </div>
            </form>

        </div>
    );
}