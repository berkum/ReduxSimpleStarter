import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index-book';
import { bindActionCreators } from 'redux';

class BookList extends Component {

	renderList() {
	console.log("renderList-book  ");
		return this.props.booksProps.map((book) => {
			return (
				<li 
					key={book.title} 
					onClick={() => this.props.aSelectBook(book)}
					className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {

	return {
		booksProps : state.books
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ aSelectBook : selectBook }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);