import { SetStateAction, useState } from "react";
import {ButtonGroup, Button} from "@mui/material"
function SecondSection() {
    const elem=
        ["All","UI","UX","Enhancement","Bug", "Feature"];
        const [selectedFilter, setSelectedFilter] = useState("All");

        const handleFilterClick = (filter: SetStateAction<string>) => {
          setSelectedFilter(filter);
        };
      
        const filteredItems = selectedFilter === "All" ? elem.slice(1) : [selectedFilter];
      
    return ( 
        <>
        <div className="buttonDiv"style={{backgroundColor: "white",
    width:255,
    paddingLeft: 24,
    borderRadius: 10,
    marginBottom:24,
    paddingTop: 24,
    paddingBottom: 24}}>
        {elem.map((filter) => (
          <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button key={filter}
            onClick={() => handleFilterClick(filter)}
            className={selectedFilter === filter ? "active" : ""}
            style={{
              height:30,
              textTransform: 'initial',
              borderRadius: 10,
              borderColor: "transparent",
              background: selectedFilter === filter ? "#4661E6" : "#F2F4FF",
              marginRight:8,
              marginBottom:14,
              color: selectedFilter === filter ? "white" : "#4661E6",
              fontSize: 13,
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal"
            }}>{filter}</Button>
        </ButtonGroup>
              
        ))}
       </div>
        </>
     );
}

export default SecondSection;