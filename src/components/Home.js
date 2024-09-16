import React, { useState } from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";

const Home = (props) => {

    const authedUser = props.authedUser.userId;
    const questions = props.questions;

    const [showNewQuestions, setShowNewQuestions] = useState(true); 
    const sortedQuestions = Object.values(questions).sort((a, b) => b.timestamp - a.timestamp);

    const newQuestions = sortedQuestions.filter((question) => {
        const { optionOne, optionTwo } = question;
        return !(optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser));
    });

    const doneQuestions = sortedQuestions.filter((question) => {
        const { optionOne, optionTwo } = question;
        return optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser);
    });


    return (
        <div>
      
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <button
                style={{ marginRight: "10px", padding: "10px", backgroundColor: showNewQuestions ? "blue" : "gray", color: "white" }}
                onClick={() => setShowNewQuestions(true)}
            >
                New Questions
            </button>
            <button
                style={{ padding: "10px", backgroundColor: !showNewQuestions ? "green" : "gray", color: "white" }}
                onClick={() => setShowNewQuestions(false)}
            >
                Done Questions
            </button>
        </div>

    
        {showNewQuestions ? (
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <div style={{ border: "1px solid blue" }}>
                    <h3 style={{ marginBottom: "20px", marginTop: "20px" }}>New Questions</h3>
                    <hr />
                    <QuestionCard questions={newQuestions} />
                </div>
            </div>
        ) : (
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <div style={{ border: "1px solid green" }}>
                    <h3 style={{ marginBottom: "20px", marginTop: "20px" }}>Done Questions</h3>
                    <hr />
                    <QuestionCard questions={doneQuestions} />
                </div>
            </div>
        )}
    </div>
    )
}

const mapStateToProps = ({ questions, authedUser }) => {

    return {
        questions: questions,
        authedUser: authedUser
    }
};


export default connect(mapStateToProps)(Home); 