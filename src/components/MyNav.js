import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Container, Nav, Navbar, } from 'react-bootstrap/';
import { logoutUser } from "../actions/authedUser";
import { useNavigate } from 'react-router-dom';


const MyNav = (props) => {

  const navigate = useNavigate();

  const handleLogout = () => {

     props.dispatch(logoutUser(null));
    //  navigate("/login")

  }

    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{marginBottom: "30px"}}>
      <Container>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/leaderboard">Leaderboard</Nav.Link>
            <Nav.Link as={Link} to="/add">New</Nav.Link>
     
          </Nav>
          <Nav>
            <Nav.Link >
            <img src={props.authedUser.userAvatar} alt="User Avatar" style={{ width: "30px", height: "30px", borderRadius: "50%", marginRight: "10px" }} />       
              {props.authedUser.userId}</Nav.Link>
              <Nav.Link onClick={handleLogout} >Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      );

}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

export default connect(mapStateToProps)(MyNav);