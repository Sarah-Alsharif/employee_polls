import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../actions/users";
import { getAllQuestions } from "../actions/questions";
import Container from 'react-bootstrap/Container';
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./MyNav";
import Leaderboard from "./Leaderboard";
import Home from "./Home";
import Login from "./Login";
import NewQuestion from "./NewQuestion";
import PollPage from "./PollPage";
import NotFound from "./NotFound";

const App = (props) => {

  const { authedUser, questions } = props;
  const location = useLocation();

  useEffect(() => {
    props.dispatch(getAllUsers());
    props.dispatch(getAllQuestions());

  }, [])


  return (

    <Fragment>
      <Container style={{ marginTop: "20px" }} className="App justify-content-center align-items-center">
        {authedUser !== null && <MyNav />}
        <Routes>
          <Route
            path="/login"
            element={authedUser === null
              ? <Login />
              : <Navigate to={location.state?.from?.pathname || "/"} />}
          />

          {authedUser !== null ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/add" element={<NewQuestion />} />
              <Route path="/questions/:id" element={<PollPage />} />
              <Route path="*" element={<NotFound />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" state={{ from: location }} />} />
          )}
        </Routes>
      </Container>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser, questions }) => ({
  authedUser,
  questions
});

export default connect(mapStateToProps)(App);
