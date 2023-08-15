import { url } from "inspector";

function FirstSection() {
    return ( 
    <>
    <div style={{
        backgroundImage:'url("/images/background-header.png")',
        backgroundRepeat: 'no-repeat',
        borderRadius: 10,
        width: 255,
        marginBottom: 24}}>
        <h6 style={{
            color: "#FFF",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            paddingLeft: 24,
            paddingTop: 62
        }}>Eqaim</h6>
        <p style={{
            color: "#FFF",
            fontSize: 15,
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            opacity: 0.75,
            paddingLeft: 24,
            paddingBottom: 24
        }}>Feedback Board</p>
    </div>
    </> );
}

export default FirstSection;