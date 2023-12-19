// tripItem.js - to create/store each trip. We are using cards from Bootstrap.

// Import necessary modules
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// Functional component representing a single trip card
function TripItem(props) {
  // Render the tripItem component
  return (
    <div>
      {/* Card component from react-bootstrap */}
      <Card>
        {/* Displaying the trip location as the card header */}
        <Card.Header>{props.myTrip.location}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            {/* Displaying the trip cover image */}
            <img
              src={props.myTrip.cover}
              alt="Trip cover"
              style={{
                width: "100%",
                maxWidth: "633px",
                height: "300px",
                border: "5px solid black",
              }}
            />
            {/* Footer section containing trip description and date */}
            <footer>
              <p>{"Description: " + props.myTrip.description}</p>
              <p>{"Date of trip: " + props.myTrip.date}</p>
            </footer>
          </blockquote>
        </Card.Body>
        {/* Link to the Edit page with the trip's ID as a parameter */}
        <Link to={'/edit/' + props.myTrip._id} className='btn btn-primary'>Edit</Link>
        {/* Button to delete the trip */}
        <Button variant='danger' onClick={(e) => {
          e.preventDefault();
          // Axios request to delete the trip by ID
          axios.delete('http://localhost:4000/api/trip/' + props.myTrip._id)
            .then((res) => {
              // Trigger the Reload function passed as a prop to update the trip list
              let reload = props.Reload();
            })
            .catch();
        }}>Delete</Button>
      </Card>
    </div>
  );
}

// Exporting the tripItem component for use in other files
export default TripItem;
