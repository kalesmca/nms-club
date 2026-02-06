import "./App.css";
import React from "react";
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from './firebase-config';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginLayoutComponent from "./containers/layout/loginLayout/loginLayout";
import LoginBodyComponent from "./containers/layout/loginLayout/loginBody";
import NotFountComponent from "./containers/notFound/notFound";
import AboutUsComponent from "./containers/aboutUs/aboutUsComponent";
import HomeComponent from "./containers/Home/homeComponent";

function App() {
  // const [list, setList] = React.useState([]);
  // const usersCollectionRef = collection(db, 'testing');
  // usersCollectionRef.firestore._databaseId.database = "nms-club-db"

  // React.useEffect(() =>{
  //   const getUsers = async ()=>{
  //     console.log("get user called")
  //     console.log("Ref = ", usersCollectionRef)
  //      const data = await getDocs(usersCollectionRef);
  //      console.log("data =", data)
  //     const dataList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //     console.log("List",dataList)
  //     setList(dataList);
  //   }
  //   getUsers();
  // },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<LoginLayoutComponent />}>
            <Route path="/" element={<LoginBodyComponent />} />
            <Route path="/login" element={<LoginBodyComponent />} />
            <Route path="/about_us" element={<AboutUsComponent />} />
            <Route path="/home" element={<HomeComponent />} />
            
            <Route path="*" element={<NotFountComponent />} />
          </Route>

          {/* <Route path="/authed" element={<LayoutContainer />}>
                <Route path="player-list" element={<PlayerListComponent />} />
                <Route path="registration" element={<PlayerRegistration />} />
                <Route path="dashboard" element={<PlayerDashboard />} />
                <Route path="source" element={<SourceDataComponent />} />
                <Route path="*" element={<LayoutContainer />} />
              </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
