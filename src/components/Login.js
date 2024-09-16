import React from 'react';
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import Form from 'react-bootstrap/Form';
import { navigate, useLocation , useNavigate} from "react-router-dom";

const Login = (props) => {

  const { users, dispatch, questions } = props;
  const location = useLocation();
  const navigate = useNavigate();


  const handleUserChange = (e) => {

    const avatar = users[e.target.value].avatarURL;
    const authedUserInfo = {
      userId : e.target.value,
      userAvatar : avatar
    }

    if (authedUserInfo) {
      dispatch(setAuthedUser(authedUserInfo));

      
      const redirectTo = location.state?.from?.pathname || "/";
      
     
      const isQuestionPage = redirectTo.startsWith("/questions/");
      const questionId = isQuestionPage ? redirectTo.split("/")[2] : null;
      
      if (isQuestionPage && !questions[questionId]) {
        navigate("/404");
      } else {
        navigate(redirectTo);
      }
    }
  };

  return (
    <div style={{textAlign: "center"}}>
     <h1 style={{textAlign: "center", marginTop: "50px", marginBottom: "50px"}}>Employee Polls</h1> 
      <h3>Select your user name</h3>
      <Form.Select style={{ width: '50%', margin:"0 auto" }}
        id="users" name="users" onChange={handleUserChange} >
        <option value="">Open this select menu</option>
        {Object.keys(users).map((userId) => (
          <option key={userId} value={userId}>
            {users[userId].name}
          </option>
        ))}
      </Form.Select>
    </div>
  )
}

const mapStateToProps = ({ users , questions}) => {

  return {
    users,
    questions
  }

};


export default connect(mapStateToProps)(Login);