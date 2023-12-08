import { useEffect, useState } from "react";
import axios from "axios";
import Trips from "./trips";

function Read() {
   
    const [data, setData] = useState([]);

  useEffect(
    ()=>{
        
        axios.get('http://localhost:4000/api/trips')
        .then(
            (response)=>{
                setData(response.data)
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )

    }, []
  );

  const Reload = (e)=>{
    axios.get('http://localhost:4000/api/trips')
        .then(
            (response)=>{
                setData(response.data)
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )
  }

    return (
        <div>
            <h2>Hello from Read Component!</h2>
            <Trips myTrips={data} ReloadData={Reload}></Trips>
        </div>
    );

}

export default Read;