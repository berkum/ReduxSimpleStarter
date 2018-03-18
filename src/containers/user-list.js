import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectUser } from '../actions/index';
import { bindActionCreators } from 'redux';

class UserList extends Component {

	renderUserList() {

	console.log("renderUserList");
		return this.props.usersProps.map((user) => {
			return (
				<li 
					key={user.id} 
					onClick={() => this.props.aSelectUser(user)}
					className="list-group-item">
					{user.firstName}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderUserList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {

	return {
		usersProps : state.users
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ aSelectUser : selectUser}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);