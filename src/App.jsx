import React, { Component } from 'react';
import Column from './Column';
import './App.css';

const DIRECTION_LEFT = -1;
const DIRECTION_RIGHT = 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          columnName: 'Backlog',
          cards: [{ cardName: '1' }],
        },
        {
          columnName: 'Doing',
          cards: [{ cardName: '2' }],
        },
      ],
    };
  }

  handleAddCard = (columnIndex) => {
    const cardName = window.prompt('Card name');
    if (!cardName) return;
    const card = { cardName };
    this.setState(() => {
      const { columns } = this.state;
      columns[columnIndex].cards.push(card);
      return { columns };
    });
  }

  handleAddColumn = () => {
    const columnName = window.prompt('Column name');
    if (!columnName) return;
    const cardName = window.prompt('Card name');
    if (!cardName) return;
    const card = { cardName };
    const cards = [];
    cards.push(card);
    const column = { columnName, cards };
    console.log(column);
    this.setState(() => {
      const { columns } = this.state;
      columns.push(column);
      return { columns };
    });
  }

  handleMove = (columnIndex, cardIndex, direction) => {
    this.setState((prevState) => {
      const { columns } = prevState;
      const [card] = columns[columnIndex].cards.splice(cardIndex, 1);
      columns[columnIndex + direction].cards.push(card);
      return { columns };
    });
  }

  render() {
    const { columns } = this.state;

    const newColumn = columns.length < 4 ? (
      <button className="column-add__btn column" type="button" onClick={this.handleAddColumn}>+</button>
    ) : (
      ''
    );

    return (
      <div className="App">
        {columns.map((column, columnIndex) => (
          <Column
            columnsNum={columns.length}
            column={column}
            columnIndex={columnIndex}
            key={columnIndex.id}
            onMoveLeft={cardIndex => this.handleMove(columnIndex, cardIndex, DIRECTION_LEFT)}
            onMoveRight={cardIndex => this.handleMove(columnIndex, cardIndex, DIRECTION_RIGHT)}
            onAddCard={() => this.handleAddCard(columnIndex)}
          />
        ))}
        {newColumn}
      </div>
    );
  }
}

export default App;
