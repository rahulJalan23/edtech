import React from 'react';
import { auth, provider } from '../firebase';
import { setActiveUser, setUserLogOutState, selectUserName, selectUserEmail } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';


const Login = () => {

    const dispatch = useDispatch()

    const userName = useSelector(selectUserName)
    const userEmail = useSelector(selectUserEmail)
  
    // const handleSignOut = () => {
      // auth.signOut().then(()=>{
        // dispatch(setUserLogOutState)
      // }).catch((err)=>alert(err.message))
    // }  

    const handleSignIn = () => {
        auth.signInWithPopup(provider).then((result)=>{
          dispatch(setActiveUser({
            userName: result.user.displayName,
            userEmail: result.user.email
          }))
        })
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
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" class="btn solid" onClick={handleSignIn}/>
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
              <input type="submit" className="btn" value="Sign up" onClick={handleSignIn}  />
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
