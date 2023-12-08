import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
function TripItem(props) {

    return (
        <div>
            <Card>
                <Card.Header>{props.myTrip.location}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myTrip.cover}></img>
                        <footer>
                            {props.myTrip.description
                            }
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link to={'/edit/'+props.myTrip._id} className='btn btn-primary'>Edit</Link>
                <Button variant='danger' onClick={
                    (e)=>{
                        e.preventDefault();

            axios.delete('http://localhost:4000/api/trips/'+props.myTrip._id)
                        .then((res)=>{
                            let reload = props.Reload();
                        })
                        .catch();
                    }
                }>Delete</Button>
            </Card>
        </div>
    );

}

export default TripItem;