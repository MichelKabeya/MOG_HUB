import { useState } from "react";
import {View, ScrollView, SafeAreaView, Image,Text, TextInput} from 'react-native'
import { styles } from '../components/Style';

function Mainscreen () {
    const [petName, setPetName] = useState("")

    return (
        <View>
        <SafeAreaView>
        <ScrollView>
            <Image style={styles.logo} source={require('../_images/cat-logo.jpg')}/>
            <Text style={styles.maintext}>Mog Hub</Text>
            <Text style={styles.slogan}>P u r r f e c t  C o m p a n i o n</Text>
            <View style={styles.inputFlex}>
                <Text style={styles.enterTxt}>Your Pet's Name:</Text>
                <TextInput style={styles.userInputTxt} placeholder='Mog' value={petName} onChangeText={newText => setPetName(newText)}
                />
            </View>
        </ScrollView>
        </SafeAreaView></View>
      
    );
}

export default Mainscreen;
