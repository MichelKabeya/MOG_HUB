import { useState } from "react";
import {View, ScrollView, SafeAreaView, Image,Text, TextInput} from 'react-native'
import { styles } from '../components/Style';
import {RadioButton} from 'react-native-paper'

function Mainscreen () {
    const [petName, setPetName] = useState("")
    const [selectedValue, setSelectValue] = useState('0')

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
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                    Select your pet:
                </Text>
                <View style={styles.radioContainer}>
                    <View style={styles.radioGroup}>
                        <View style={styles.radioButton}>
                            <RadioButton.Android
                            value="1"
                            status={selectedValue == "1" ? 'checked' : 'unchecked'}
                            onPress={() => setSelectValue('1')}
                            color="orange"
                            />
                            <Text style={styles.radioLabel}>Cat</Text>
                        </View>
                        <View style={styles.radioButton}>
                            <RadioButton.Android
                            value="2"
                            status={selectedValue == "2" ? 'checked' : 'unchecked'}
                            onPress={() => setSelectValue('2')}
                            color="orange"
                            />
                            <Text style={styles.radioLabel}>Dog</Text>
                        </View>
                        <View style={styles.radioButton}>
                            <RadioButton.Android
                            value="3"
                            status={selectedValue == "3" ? 'checked' : 'unchecked'}
                            onPress={() => setSelectValue('3')}
                            color="orange"
                            />
                            <Text style={styles.radioLabel}>Cat</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        </SafeAreaView></View>
      
    );
}

export default Mainscreen;
