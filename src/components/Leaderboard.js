import React from "react";
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';


const Leaderboard = (props) => {

    const { users } = props;

    const sortedUsers = Object.values(users).sort((a, b) => {
        const scoreA = Object.keys(a.answers).length + a.questions.length;
        const scoreB = Object.keys(b.answers).length + b.questions.length;
        return scoreB - scoreA; 
    });

    return (
        <Table striped hover variant="dark">
            <thead>
                <tr>
                    <th>#Id</th>
                    <th>Users</th>
                    <th>Answered</th>
                    <th>Created</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>

            {sortedUsers.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>
                            <img
                                src={user.avatarURL}
                                alt="User Avatar"
                                style={{ width: "30px", height: "30px", borderRadius: "50%", marginRight: "10px" }}
                            />
                            {user.name}
                        </td>
                        <td>{Object.keys(user.answers).length}</td>
                        <td>{user.questions.length}</td>
                        <td>{Object.keys(user.answers).length + user.questions.length}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

const mapStateToProps = ({ users }) => {

    return {
        users: users
    }
};

export default connect(mapStateToProps)(Leaderboard);