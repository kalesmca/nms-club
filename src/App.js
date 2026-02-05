import logo from './logo.svg';
import './App.css';
import React from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase-config';


function App() {
  const [list, setList] = React.useState([]);
    const usersCollectionRef = collection(db, 'testing');
    // usersCollectionRef.firestore._databaseId.database = "nms-club-db"


    
  React.useEffect(() =>{
    const getUsers = async ()=>{
      console.log("get user called")
      console.log("Ref = ", usersCollectionRef)
       const data = await getDocs(usersCollectionRef);
       console.log("data =", data)
      const dataList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log("List",dataList)
      setList(dataList);
    }
    getUsers();
  },[])
  return (
    <div className="App">
      <div>
        {
          list?.length && list.map((data, index) =>{
            return(
              <div>
                {data.name}
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
