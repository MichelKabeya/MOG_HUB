import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 350,
    height: 350,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  maintext: {
    paddingTop: 50,
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  slogan: {
    color: 'orange',
    fontSize: 20,
    textAlign: 'center',
  },
  inputFlex: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-evenly'
  },
  enterTxt: {
    fontWeight: 'bold',
  },
  userInputTxt: {
    borderBottomWidth: 1
  },
  radioContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
    marginTop: 5,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: "white",
    padding: 15,
  },
  radioGroup: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: "white",
    padding: 15,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },

});



export {styles}