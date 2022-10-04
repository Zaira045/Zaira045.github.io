import React from "react";
import ProjComponent from "../Components/projectComponent";
import axios from "axios";
export default function ProjectContainer(props) {
    const [exper, setExper] = React.useState(null);
    async function fetchData() {
        const res =  await axios.get(
            "https://api.airtable.com/v0/app7fAwO3jsxV706F/Table%201?maxRecords=3&view=Grid%20view", 
            {
                headers: {
                    authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                },
            }
        
            );
            console.log(res.data);
            setExper(res.data.records);
    }
    React.useEffect(() => {
        fetchData();
      }, []);
    
    if (!exper) {
        return <div>Loading...</div>;
    }

    return (

        <div>
    
            <div id='projects'>
            {exper.map((record) => (
          <ProjComponent imageLink={record.fields.Image} title={record.fields.Title} content = {record.fields.Content}></ProjComponent>
        ))}
            </div>
        </div>
    );


}