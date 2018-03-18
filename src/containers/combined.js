import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { selectBook } from '../actions/index-combined';
import { bindActionCreators } from 'redux';

class CombinedResult extends Component {

    renderList() {
        console.log("CombinedResult-renderList-combined  ");
        if (!this.props.selectedUser || !this.props.selectedBook) {
            return <div>Combined selection not available </div>
        }

       
        return (
            <div>
                <h3>Combined selection : </h3>
                <div>Name: {this.props.selectedUser.firstName}</div>
                <div>
                    <span>Title: {this.props.selectedBook.title}</span><span> , pages : {this.props.selectedBook.pages}</span>
                </div>
            </div>
        );
        //});
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
    console.log("mapStateToProps-combined  ", state);
    return {
        selectedUser: state.activeUser, selectedBook: state.activeBook
    };
}

//function mapDispatchToProps(dispatch) {
// return bindActionCreators({ aSelectBook: selectBook }, dispatch);
//}


//export default connect(mapStateToProps, mapDispatchToProps)(BookList);
export default connect(mapStateToProps)(CombinedResult);