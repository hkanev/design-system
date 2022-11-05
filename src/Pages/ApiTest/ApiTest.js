import {React, useEffect, useState} from "react";
import api from "../../Services/api";
import Submenu from "../../Components/Navigation/submenu";
import NavLink from "../../Components/Navigation/NavLink";

const ApiTest = () => {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        api.get('/facts', { params: { page: 2   } })
            .then(response => setJokes(response.data.data))
            .catch(e => console.log(e));
    }, [])



    return (
       <div>
           <h2>Jokes</h2>
           <table>
               <tbody>
               <tr>
                   <th>Fact</th>
               </tr>
               {jokes.map((joke, index) =>
                   <tr key={index}>
                       <td>{joke.fact}</td>
                   </tr>
               )}
               </tbody>

           </table>
       </div>
    )
};

export default ApiTest;
