import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVTAR } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMassage, setErrorMassage] = useState(null);
  const dispatch = useDispatch();

  //ref is hook given by react to give refrence with this we can access the value inside the input-box
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    //Validate the form
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMassage(message);
    if (message) return;

    // Sign In Sign Up Logic
    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // update use profile
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVTAR,
          })
            .then(() => {
              // we use auth.currentUser becuse it stores the updated value of the user
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMassage();
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMassage(errorCode + "-" + errorMassage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // Navigate will redirect the user to the brouse page
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMassage(errorCode + "-" + errorMassage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="background-img"></img>
      </div>
      {/* on submit to prevent the default functionality of submite button and ref={} to provide refrence */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black mx-auto my-36 right-0 left-0 text-white rounded-lg bg-opacity-85"
      >
        <h1 className="font-bold text-3xl p-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          ></input>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        ></input>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        ></input>

        <p className="text-red-500 text-lg font-bold p-2">{errorMassage}</p>
        <button
          onClick={handleButtonClick}
          className="p-4 my-6 mx-2 bg-red-500 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p onClick={toggleSignInForm} className="cursor-pointer py-4">
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
