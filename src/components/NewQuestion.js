import React from "react";
import { Row, Col, Form, Button } from 'react-bootstrap';
import {useState} from "react";
import { connect } from 'react-redux';
import { handleAddQuestions } from "../actions/questions";
import { useNavigate } from 'react-router-dom';

const NewQuestion = ({dispatch}) => {

    const [optionOne , setOptionOne] = useState("");
    const [optionTwo , setOptionTwo] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {

    const { name, value } = e.target;
    if (name === 'optionOne') {
      setOptionOne(value);
    } else if (name === 'optionTwo') {
      setOptionTwo(value);
    }
    }


    const handleSubmit = (e) => {

        e.preventDefault();

        dispatch(handleAddQuestions(optionOne, optionTwo))
       
        setOptionOne("");
        setOptionTwo("");

        navigate("/");

    }



    return (
        <div style={{ textAlign: "center" }}>
            <h3>Would You Rather</h3>
            <h5>Craete Your Own Poll </h5>

            <Form className="mt-5" onSubmit={handleSubmit} >
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">First Option </Form.Label>
                    <Col sm="10">
                        <Form.Control data-testid='Option One' type="text" placeholder="Option One" name="optionOne" value={optionOne} onChange={handleChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2"> Second Option </Form.Label>
                    <Col sm="10">
                        <Form.Control data-testid='Option Two' type="text" placeholder="Option Two" name="optionTwo" value={optionTwo} onChange={handleChange}  />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mt-5">
                    <Col sm="8" className="offset-sm-2">
                        <Button variant="primary" type="submit" style={{width:"40%"}} disabled={optionOne === "" || optionTwo === ""}>
                            Submit
                        </Button>
                    </Col>
                </Form.Group>

            </Form>
        </div>
    )
}


export default connect()(NewQuestion);