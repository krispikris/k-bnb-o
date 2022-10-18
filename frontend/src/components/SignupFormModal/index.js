// frontend/src/components/SignupFormModal/index.js
import React, { useState } from "react";
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button  onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;

// import { useDispatch, useSelector } from "react-redux";
// import { Redirect, useHistory } from "react-router-dom";
// import * as sessionActions from "../../store/session";
// import './SignupForm.css';

// const dispatch = useDispatch();
// const sessionUser = useSelector((state) => state.session.user);
// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");
// const [email, setEmail] = useState("");
// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");
// const [confirmPassword, setConfirmPassword] = useState("");
// const [errors, setErrors] = useState([]);
// const history = useHistory();

// if (sessionUser) return <Redirect to="/" />;

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (password === confirmPassword) {
//     setErrors([]);
//     return dispatch(sessionActions.signup({ firstName, lastName, email, username, password }))
//     .catch(async (res) => {
//       const data = await res.json();
//       if (data && data.errors) setErrors(data.errors);
//       if (!data.errors) return history.push('/home');
//     });
//   }
//   return setErrors(['Confirm Password field must be the same as the Password field']);
// };

// return (
//   <form onSubmit={handleSubmit}>
//     <ul>
//       {errors.map((error, idx) => <li key={idx}>{error}</li>)}
//     </ul>
//     <label>
//       First Name
//       <input
//         type="text"
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//         required
//         />
//     </label>
//     <label>
//       Last Name
//       <input
//         type="text"
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//         required
//         />
//     </label>
//     <label>
//       Email
//       <input
//         type="text"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         />
//     </label>
//     <label>
//       Username
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required
//         />
//     </label>
//     <label>
//       Password
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//         />
//     </label>
//     <label>
//       Confirm Password
//       <input
//         type="password"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//         required
//         />
//     </label>
//     <button type="submit">Sign Up</button>
//   </form>
// );