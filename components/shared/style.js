import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        alignItems: "center",
        justifyContent: 'center',
        paddingTop:20
      },
      
      deck:{
         borderStyle:'solid',
         borderColor: 'black',
         borderRadius: Platform.OS ==='ios' ? 7 : 0,
         padding: 20,
         shadowOpacity: 0.4,
         shadowColor:'black',
         backgroundColor: 'white',
         shadowOffset:{
           height: 5
         },
         width: 350,
         height: 200,
         marginVertical:10
        
      },

      button:{
        alignItems:'center',
        justifyContent:'center',
        width: 150,
        height: 50,
        padding: 10,
        borderRadius: Platform.OS === 'ios' ? 5 : 0,
        marginVertical: 20,
        backgroundColor:'#000000',
                
      }
})

/**
 * Colors
 */
export const primaryColor = '#F2E0D0';
export const secondaryColor = '#F2F2F2';
export const textColor = '#000000';