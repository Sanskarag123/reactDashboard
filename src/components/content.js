const Content = () => {
    const style = {
        componentAdjustment:{
            padding:"30px 0px"
        },
        textSubhead:{
            fontFamily:"Poppins"
        },
        textCard:{
            fontFamily:"Anton",
            fontSize:"50px",
            width:"100%",
            height:"100%",
            marginTop:"30px",
            textAlign:"center",
            color:"black"
        },
        cards:{
            display:"flex",
            gap:"20px",
            justifyContent:"space-between"
        },
        cardGray:{
            backgroundColor:"#F8F8F8",
            borderRadius:"15px",
            minHeight:"150px",
            minWidth:"200px",
            maxHeight:"150px",
            maxWidth:"200px",
            padding:"20px",
            color:"#BDCCCF"
        },
        cardBlue:{
            backgroundColor:"#0085FE",
            borderRadius:"15px",
            minHeight:"150px",
            minWidth:"200px",
            maxHeight:"150px",
            maxWidth:"200px",
            padding:"20px"
        }
    }
    return (
    <div style={style.componentAdjustment}>
        <div name="head">
            <span style={style.textSubhead}>Enter your Stats</span>
        </div>
        <div name="cards" style={style.cards}>
            <div style={style.cardGray}>
                <div><span>Total People in Time</span></div>
                <div style={style.textCard}>20</div>
            </div>
            <div style={style.cardBlue}></div>
            <div style={style.cardGray}></div>
            <div style={style.cardGray}></div>
        </div>
    </div>
    );
}
export default Content;