import React from 'react';
import { Component } from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';

export default class AppUser extends Component {
  render() {
    return (
      <div>
		<UserList />
		<UserDetail />
	  </div>
    );
  }
}
