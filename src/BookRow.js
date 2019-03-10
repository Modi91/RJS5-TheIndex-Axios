import React, { Component } from "react";

class BookRow extends Component {
  render() {
    const book = this.props.book;

    const bookRows = book.authors.map(book => <div>{book.name}</div>);
    return (
      <tr>
        <td>{book.title}</td>
        <td>{bookRows}</td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    );
  }
}
export default BookRow;
