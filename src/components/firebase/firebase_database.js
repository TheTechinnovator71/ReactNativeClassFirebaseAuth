
import firebase from 'firebase';

/*export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);*/

// 123/stocks/
export const addStock = (userid, stocksymbol) =>
{
    const dbpath = '/' + userid + '/stocksTEST' + '/'; 
    const itemsRef = firebase.database().ref(dbpath);
    
    const stock = {
        symbol: stocksymbol
    }

    itemsRef.push(stock);
}


export const getStocks = (userid) =>
{
    let newState = [];

    const dbpath = '/1234/stocksTEST';  

    const itemsRef = firebase.database().ref(dbpath);

    return itemsRef;

}

export const removeStock = (stockid) =>
{
    let newState = [];

    const dbpath = '/1234/stocksTEST/' + stockid;  

    const itemsRef = firebase.database().ref(dbpath);

    itemsRef.remove();
}