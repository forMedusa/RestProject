"use client"
import FirstSection from "../components/Sidebar/FirstSection";
import SecondSection from "../components/Sidebar/SecondSection";
import ThirdSection from "../components/Sidebar/ThirdSection";
import TopBanner from "../components/TopBanner/TopBanner";
function Suggestions() {
    return ( 
        <>
        <div style={{
            marginTop:94,
            marginLeft:165,
        }}>
            <div style={{display:"flex"}}>       
                <FirstSection/>
                <TopBanner/>
            </div>

        <SecondSection/>
        <ThirdSection/>
        </div>
        </>
     );
}

export default Suggestions;