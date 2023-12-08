import TripItem from "./tripItem";

function Trips(props){

    return props.myTrips.map(
        (trip)=>{
            return <tripItem myTrip={trip} key={trip._id} Reload={()=>{props.ReloadData();}}></tripItem>
        }
    );

}

export default Trips; 