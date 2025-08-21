import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import{LOGO} from "../utils/constants"

const Header = () =>{
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const handleSignOut =()=>{
      signOut(auth)
      .then(()=>{
      })
      .catch((error)=>{
        navigate("/error");
      })
    }
    const nevigate = useNavigate()
    const dispatch = useDispatch();
        useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
        // User is sign in
        const {uid, email, displayName,photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
        nevigate("/browse")

        } else {
        // User is signed out
        dispatch(removeUser());
        nevigate("/")
        }
});
    // unsubscribe when the component unmounts
    return ()=> unsubscribe();
    },[]);
    return(
       <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
         <img className="w-44" 
         src = {LOGO}
        alt="logo"></img>
        {user && (<div className="flex m-4 p-2">
          <img className="w-12 h-12" src={user?.photoURL} alt="user-icon"/>
          <button onClick={handleSignOut} className="font-bold text-white m-4">Sign Out</button>
        </div>)}
       </div>
    )
}
export default Header;