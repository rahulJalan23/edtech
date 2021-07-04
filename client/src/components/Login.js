import React from 'react';
import { auth, googleProvider , facebookProvider , githubProvider , twitterProvider } from '../firebase';
import { setActiveUser, setUserLogOutState, selectUserName, selectUserEmail } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaFacebook , FaGithub, FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle } from 'react-icons/ai'

const Login = () => {

    const dispatch = useDispatch()

    const userName = useSelector(selectUserName)
    const userEmail = useSelector(selectUserEmail)
  
    // const handleSignOut = () => {
      // auth.signOut().then(()=>{
        // dispatch(setUserLogOutState)
      // }).catch((err)=>alert(err.message))
    // }  

    const handleSignIn = (key) => {
      switch (key) {

        case 1:
          auth.signInWithPopup(facebookProvider).then((result)=>{
            var credential = result.credential;

            var user = result.user;
            dispatch(setActiveUser({
              userName: user.name,
              userEmail: user.email
            }))

            var accessToken = credential.accessToken;

          }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
          });        
          break;

        case 2:
          auth.signInWithPopup(twitterProvider).then((result)=>{
            dispatch(setActiveUser({
              userName: result.user.displayName,
              userEmail: result.user.email
            }))
          })
          break;

        case 3:
          auth.signInWithPopup(googleProvider).then((result)=>{
            dispatch(setActiveUser({
              userName: result.user.displayName,
              userEmail: result.user.email
            }))
          })
          break;

        case 4:
          auth.signInWithPopup(githubProvider).then((result)=>{
            dispatch(setActiveUser({
              userName: result.user.displayName,
              userEmail: result.user.email
            }))
          })
          break;
      
        default:
          break;
      }
    }

      const container = document.getElementById("container");

      const switchToSignUp = () => {
        document.getElementById("container").classList.add("sign-up-mode");
      }

      const switchToSignIn = () => {
        document.getElementById("container").classList.remove("sign-up-mode");
      }

    return (
        // <div className="login_container">
          // <div className="login_box">
            // <button onClick={handleSignIn} ><i class='bx bxl-google' style={{color: "#9b03f8"}}  ></i>  Sign In With Google</button>
          // </div>
        // </div>
      <>
        <div className="container" id="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" class="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" class="btn solid" onClick={handleSignIn}/>
              
              <p className="social-text">Or Sign In with Social Platforms</p>

              <div className="social-media">
                <a className="social-icon" onClick={() => handleSignIn(1)} ><FaFacebook /></a>
                <a className="social-icon" onClick={() => handleSignIn(2)} ><AiFillTwitterCircle /></a>
                <a className="social-icon" onClick={() => handleSignIn(3)} ><FaGooglePlus /></a>
                <a className="social-icon" onClick={() => handleSignIn(4)} ><FaGithub /></a>
              </div>
              
            </form>
                
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />

              <p className="social-text">Or Sign Up with Social Platforms</p>

              <div className="social-media">
                <a className="social-icon" onClick={() => handleSignIn(1)} ><FaFacebook /></a>
                <a className="social-icon" onClick={() => handleSignIn(2)} ><AiFillTwitterCircle /></a>
                <a className="social-icon" onClick={() => handleSignIn(3)} ><FaGooglePlus /></a>
                <a className="social-icon" onClick={() => handleSignIn(4)} ><FaGithub /></a>
              </div>
              
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Register now to get access to Notes, Textbooks, Timebable and Many More..
              </p>
              <button className="btn transparent sign-up-btn" id="sign-up-btn" onClick={switchToSignUp} >
                Sign up
              </button>
            </div>
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent sign-in-btn" id="sign-in-btn" onClick={switchToSignIn} >
                Sign in
              </button>
            </div>
          </div>
        </div>
        </div>
      </>
    )
}

export default Login
