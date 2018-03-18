import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
	render() {
	 if (!this.props.user2) {
	 	 return <div>Select a user to get started. </div>
        }

        console.log("render user detail ", this.props.user2.title );
		return (
			<div>
				<h3>Details for: </h3>
				<div>First name {this.props.user2.firstName}</div>
				<div>Age:  {this.props.user2.age}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
    console.log("mapStateToProps ", state.activeUser);
    return {
        user2: state.activeUser
	};
}

export default connect(mapStateToProps)(UserDetail);

