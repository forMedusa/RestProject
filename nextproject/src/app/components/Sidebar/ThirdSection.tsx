function ThirdSection() {
    return ( 
        <>
        <div style={{
            width: 255,
            backgroundColor: "white",
            paddingBottom: 24,
            borderRadius: 10
        }}>
            <div style={{
                display:"flex",
                marginLeft: 24,
                marginRight: 24,
                marginBottom: 24,
                paddingTop: 19
            }}>
                <h5 style={{
                    color: "#3A4374",
                    fontFamily: "Jost",
                    fontSize: 18,
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal"
                }}>Roadmap</h5>
                <a href="" style={{
                    marginLeft:99,
                    color: "#4661E6",
                    fontFamily: "Jost",
                    fontSize: 13,
                    fontStyle: "normal",
                    fontWeight: 600,
                    textDecorationLine: "underline"
                }}>View</a>
            </div>
            <div>
            <ul className="colorful-list">
            <li style={{
                color: "#647196",
                listStyleType: 'none',
                fontFamily: "Jost",
                fontSize: 16,
                marginRight: 24,
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
            }}><svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"24", marginRight:"16"}} width="8" height="8" viewBox="0 0 8 8" fill="none">
  <circle cx="4" cy="4" r="4" fill="#F49F85"/>
</svg>Planned  <label style={{
    paddingLeft: 117
}}>2</label></li>
<li style={{
                color: "#647196",
                fontFamily: "Jost",
                listStyleType: 'none',
                fontSize: 16,
                marginRight: 24,
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
            }}><svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"24", marginRight:"16"}} width="8" height="8" viewBox="0 0 8 8" fill="none">
  <circle cx="4" cy="4" r="4" fill="#AD1FEA"/>
</svg>In-Progress  <label style={{
    paddingLeft: 94
}}>3</label> </li>
<li style={{
                color: "#647196",
                listStyleType: 'none',
                fontFamily: "Jost",
                fontSize: 16,
                marginRight: 24,
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
            }}><svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"24", marginRight:"16"}} width="8" height="8" viewBox="0 0 8 8" fill="none">
  <circle cx="4" cy="4" r="4" fill="#62BCFA"/>
</svg>Live   <label style={{
    paddingLeft: 138,
}}>1</label> </li>
            </ul>
            </div>
        </div>
        </>
     );
}

export default ThirdSection;