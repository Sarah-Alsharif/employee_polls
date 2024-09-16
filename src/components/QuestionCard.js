import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const QuestionCard = ({ questions }) => {

        return (
            <Row style={{ margin: "0 auto" }}>
            {questions.map((question) => {
              const { id, author, timestamp } = question;
              return (
                <Col key={id} xs={12} sm={6} md={4} lg={4} className="mb-3">
                  <Card style={{ width: '18rem', textAlign: "center" }}>
                    <Card.Body>
                      <Card.Title>{author}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {new Date(timestamp).toLocaleString()}
                      </Card.Subtitle>
                      <Button  as={Link} to={`/questions/${id}`} style={{ width: "100%" }} >Show</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row> 
        )
    }

  
    export default QuestionCard;