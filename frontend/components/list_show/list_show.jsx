import React from 'react';

class ListShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-show">
        <h1>{this.props.currentList.title}</h1>
      </div>
    );
  }
}

export default ListShow;
