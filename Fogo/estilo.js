import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    Logo: {
        height: 60,
        width: 60,
        margin: 30,
        alignSelf: "center"
    },

    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#202020",
    },

    texto: {
        color: "white",
        marginRight: 35
    },


    texto1: {
        flex: 4,
        color: "white",
        marginLeft: 10,

    },


    texto2: {
        color: "#717171",

    },


    Logo2: {
        height: 30,
        width: 30,
        alignSelf: "center",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },

    a: {
        flex: 1,
        padding: 5,
        backgroundColor: "#3261a3",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5

    },

    epic: {
        backgroundColor: "#353535"
    },


    google: {
        backgroundColor: "#fefdfd"
    },

    xbox: {
        backgroundColor: "#fefdfd"

    },

    play: {
        backgroundColor: "#353535"
    },

    nitendo: {
        backgroundColor: "#e90000"
    },

    steam: {
        backgroundColor: "#145c8f"
    },

    apple: {
        backgroundColor: "#ffff"
    },

    container2: {
        flexDirection: "row",
        backgroundColor: "#2b2b2b",
        width: 320,
        borderRadius: 5,
        margin: 5,
        alignItems: "center"

    },

    input: {
        borderWidth: 1,
        backgroundColor: "#2b2b2b",
        padding: 10,
        margin: 5,
        width: 360,
    },

    placeholder: {
        color: "white"
    },

    button: {
        padding: 10,
        marginTop: 30,
        backgroundColor: "#191919",
        width: 360

    },

    button2: {
        padding: 15,
        marginTop: 10,
        backgroundColor: "#104a81",
        width: 350,
        borderRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },

    buttonText: {
        color: '#696969',
        textAlign: 'center',
        fontSize: 16,
    },


    label: {
        color: "#696969",
        marginRight: 65
    },

    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    Float: {
        fontSize: 14,
        width: 350,
        height: 30,
        margin: 25,

    },

    inputs: {
        height: 30,
        margin: 25,
        width: 167,
    },

    inputStyle: {
        color: 'white',
        height: 25,
        width: 200,
    },

    infoIconContainer: {
        padding: 5,
    },
    infoIcon: {
        fontSize: 20,
        color: 'gray',
    },

    inputError: {
        borderColor: 'red'
      }


});


export default styles;