import { connect } from "react-redux";
import { useState, useEffect } from 'react';
import {Button, Card } from 'react-bootstrap';
import { saveQuestionAnswer } from "../actions/questions";
import { useParams, useNavigate , Navigate} from "react-router-dom";
import { logoutUser } from "../actions/authedUser";

const PollPage = (props) => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [selectedOption, setSelectedOption] = useState('');
    const question = props.questions[id];

    useEffect(() => {
        if (!question) {
            props.dispatch(logoutUser(null));
            navigate('/login', { state: { from: `/questions/${id}` } }); 
        }
    }, [question, id, props.dispatch, navigate]);


    const { author, optionOne, optionTwo } = question;
    const { dispatch } = props;
    const autherAvatar = props.users[author].avatarURL;


    const totalVotes = optionOne.votes.length + optionTwo.votes.length;
    const optionOneVotes = optionOne.votes.length;
    const optionTwoVotes = optionTwo.votes.length;

    const optionOnePercentage = totalVotes === 0 ? 0 : Math.round((optionOneVotes / totalVotes) * 100);
    const optionTwoPercentage = totalVotes === 0 ? 0 : Math.round((optionTwoVotes / totalVotes) * 100);

    useEffect(() => {
        if (optionOne.votes.includes(props.authedUser.userId)) {
            setSelectedOption('optionOne');
        } else if (optionTwo.votes.includes(props.authedUser.userId)) {
            setSelectedOption('optionTwo');
        }
    }, [optionOne.votes, optionTwo.votes, props.authedUser.userId]);

    if (!props.questions[id]) {
        return <p>404 this question is not found</p>;
    }


    const handleOptionSelect = (option) => {
        if (!selectedOption) { 
            setSelectedOption(option);
            dispatch(saveQuestionAnswer(id, option));
        }
    };


    return (

        <div style={{ textAlign: "center" }}>
        <h3>Poll by {author}</h3>
        <img src={autherAvatar} alt="User Avatar" style={{ width: "200px", height: "200px", borderRadius: "50%", marginTop: "30px", marginBottom: "30px" }} />
        <h3>Would You Rather</h3>

        <div style={{ display: 'flex', gap: '20px', marginTop: "30px" }}>
            {/* Option 1 */}
            <Card style={{ width: '40%', margin: "0 auto" }}>
                <Card.Body>
                    <Card.Text>{optionOne.text}</Card.Text>
                    <Button style={{ width: "50%" }}
                        variant={selectedOption === 'optionOne' ? 'primary' : 'outline-primary'}
                        onClick={() => handleOptionSelect('optionOne')}
                        disabled={!!selectedOption} 
                    >
                        {selectedOption ? 'Selected' : 'Click to Vote'}
                    </Button>
                    {selectedOption && ( 
                        <p>{optionOneVotes} out of {totalVotes} votes ({optionOnePercentage}%)</p>
                    )}
                </Card.Body>
            </Card>

            {/* Option 2 */}
            <Card style={{ width: '40%', margin: "0 auto" }}>
                <Card.Body>
                    <Card.Text>{optionTwo.text}</Card.Text>
                    <Button style={{ width: "50%" }}
                        variant={selectedOption === 'optionTwo' ? 'primary' : 'outline-primary'}
                        onClick={() => handleOptionSelect('optionTwo')}
                        disabled={!!selectedOption} 
                    >
                        {selectedOption ? 'Selected' : 'Click to Vote'}
                    </Button>
                    {selectedOption && ( 
                        <p>{optionTwoVotes} out of {totalVotes} votes ({optionTwoPercentage}%)</p>
                    )}
                </Card.Body>
            </Card>
        </div>
    </div>
    )
}

const mapStateToProps = ({ authedUser, questions, users }) => {
    return {
        authedUser,
        questions: questions,
        users,
    }

};

export default connect(mapStateToProps)(PollPage);