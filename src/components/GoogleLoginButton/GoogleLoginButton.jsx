// // src/components/GoogleLoginButton.jsx
// // import { GoogleLogin } from 'react-google-login';
// import { useDispatch } from 'react-redux';
// import { logInWithGoogle } from '../../redux/auth/operations';

// const GoogleLoginButton = () => {
//   const dispatch = useDispatch();

//   const handleSuccess = (response) => {
//     dispatch(logInWithGoogle(response.tokenId));
//   };

//   const handleFailure = (response) => {
//     console.log('Login Failed', response);
//   };

//   return (
//     <GoogleLogin
//       clientId="YOUR_GOOGLE_CLIENT_ID" // Ensure this is correct
//       buttonText="Login with Google"
//       onSuccess={handleSuccess}
//       onFailure={handleFailure}
//       cookiePolicy={'single_host_origin'}
//     />
//   );
// };

// export default GoogleLoginButton;
