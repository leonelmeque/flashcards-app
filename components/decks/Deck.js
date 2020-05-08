import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from '../shared/style';

class Deck extends React.Component{
    render(){
        return(
            <ScrollView style={{flex:1}}>
                <View style={styles.deck}>
                <Text>
                    Deck Name
                </Text>
                <Text>
                    Number of cards
                </Text>
            </View>
            <View style={styles.deck}>
                <Text>
                    Deck Name
                </Text>
                <Text>
                    Number of cards
                </Text>
            </View>

            <View style={styles.deck}>
                <Text>
                    Deck Name
                </Text>
                <Text>
                    Number of cards
                </Text>
            </View>

            <View style={styles.deck}>
                <Text>
                    Deck Name
                </Text>
                <Text>
                    Number of cards
                </Text>
            </View>
            </ScrollView>
            
        )
    }
}


export default Deck;