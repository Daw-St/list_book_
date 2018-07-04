import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

//bindActionCreators checks if infomration flown to reducers
// kontener to komponent ktory zrzadza stanem aplikacji
class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title} 
                onClick = {() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
                </li>
            )
        })
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
    // whatever is returnded wil show up as a props
    //inside of booklist
    return {
        books: state.books
    };
}

//anything returned frokthat function will end up as 
//props on the BookList container
function mapDispatchToProps(dispatch){
    //whenever slectBook is called , te result shold be 
    //passed to all of our reduces
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//Promote BookList from a component to a container it nees to knwow
//about this new dispatch methos selectBook .
//Make it available as a prop
export default connect(mapStateToProps)(mapDispatchToProps)(BookList);

