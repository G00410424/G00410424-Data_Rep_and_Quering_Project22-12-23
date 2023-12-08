import TripItem from "./tripItem";

function Trips(props){

    return props.myTrips.map(
        (trip)=>{
            return <TripItem myTrip={trip} key={trip._id} Reload={()=>{props.ReloadData();}}></TripItem>
        }
    );

}

export default Trips; 