import { StyleSheet } from "react-native";

const Mainstyles = StyleSheet.create({
    Layout:{
     backgroundColor:"rgb(229 231 235)",
     flex:1,
     paddingVertical:20,
    //  paddingHorizontal:10
    },
    PrimaryButton:{
        backgroundColor:"rgb(232 121 249)",
         paddingHorizontal:50,
         paddingVertical:20,
         borderRadius:20
    },
    PrimaryButtonText:{
        fontSize:28,
        fontWeight:"500",
        color:"rgb(31 41 55)"
    },
    input:{
        padding:20,
        borderWidth:1,
        borderRadius:10,
        fontSize:20
    },
    iconButton: {
        backgroundColor: "rgb(232 121 249 )",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 10,
        borderRadius: 10,
        
    },
    iconButtonAlt: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 10,
        borderRadius: 10,
        
    },
    buttonText:{
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    AltbuttonText:{
        color: "rgb(232 121 249 )",
        fontSize: 20,
        fontWeight: "bold",
    },
    primaryText:{
        fontSize:20,
        color:"rgb(31 41 55 )",
        fontWeight:"600"
    },
    primaryTextCentered:{
        fontSize:20,
        color:"rgb(31 41 55 )",
        fontWeight:"600",
        textAlign:"center"
    },
    bigText:{
        fontSize:40,
        color:"rgb(31 41 55 )",
        fontWeight:"800",
        lineHeight:40
    },
    subText:{
        fontSize:15,
        color:"rgb(31 41 55 )",
        fontWeight:"400"
    }
})

export const utilityStyles = StyleSheet.create({
    flex:{
        display:"flex",
        flexDirection:"row"
    },

    flexCol:{
        display:"flex",
        flexDirection:"column"
    },
    fcenter:{
     display:"flex",
     flexDirection:"row",
     justifyContent:"center"   
    },
    flexSpread:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
        
    },
    basicPadding:{
        paddingHorizontal:20,
        paddingVertical:20
       },
    xpadding:{
     paddingHorizontal:10
    },
    topPadding:{
        paddingVertical:10
       },
       tinyTopPadding:{
        paddingVertical:5
       },
       mtPadding:{
        paddingTop:18
       },
       LargePadding:{
        paddingVertical:40
       },

})

export default Mainstyles