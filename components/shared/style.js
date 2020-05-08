import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        alignItems: "center",
        justifyContent: 'center',
      
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
         margin: 20
      },

      button:{
        alignItems:'center',
        justifyContent:'center',
        width: 100,
        height: 50,
        padding: 10,
        marginVertical: 20,
        backgroundColor:'#F2F2F2'
      }
})

/**
 * Colors
 */
export const primaryColor = '#F2E0D0';
export const secondaryColor = '#F2F2F2';
export const textColor = '#000000';