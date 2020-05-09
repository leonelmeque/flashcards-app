//import AsyncStorage from '@react-native-community/async-storage';
import {AsyncStorage} from 'react-native'
import {Data} from './initData';

const STORAGE_KEY = 'flashcards:info';


//clear storage
export const _clearStorage = async ()=>{
    try{
        const item = await AsyncStorage.multiRemove(STORAGE_KEY)
        alert(item)
    }catch(e){
        alert('Items Removed')
    }
}

//create getDecks
export const _getDecks = async () =>{
    try{
        const title = await AsyncStorage.getItem(STORAGE_KEY)
        const item = JSON.parse(title);
        console.log('My Items '+item)
        return item
        
    }catch (e){
        alert('Failed to fetch the data from storage')
    }
}

//create Deck (takes a single id)

//create saveDeckTitle (takes a single title)
export const saveDeckTitle = async (state) =>{
    
    try{
        await AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(state))
        alert('Data successfully saved')
    }catch(e){
        alert('Failed to save the data to storage ' + e)
    }
}
//addCadToDeck (takes a title and card

//Get data from storage