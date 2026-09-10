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
  }



});



export {styles}