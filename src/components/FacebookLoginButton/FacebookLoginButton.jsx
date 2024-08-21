// src/components/FacebookLoginButton.jsx
import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { logInWithFacebook } from "../../redux/auth/operations";

const FacebookLoginButton = () => {
  const dispatch = useDispatch();

  const responseFacebook = (response) => {
    dispatch(logInWithFacebook(response.accessToken));
  };

  return (
    <FacebookLogin
      appId="YOUR_FACEBOOK_APP_ID" // Ensure this is correct
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
    />
  );
};

export default FacebookLoginButton;
