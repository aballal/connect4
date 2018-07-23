import React, { PureComponent } from 'react';
import Column from "./Column";

const columnArray = [0, 1, 2, 3, 4, 5, 6]
class Board extends PureComponent {
  render() {
    const columns = columnArray.map((columnId) => { return <Column key={columnId}/>})
    return <div>{columns}</div>
  }
}

export default Board;