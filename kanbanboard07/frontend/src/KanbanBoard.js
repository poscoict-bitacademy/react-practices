import React from 'react';
import CardList from './CardList';
import styles from './assets/css/KanbaBoard.css';
//import cards from './assets/json/data.json';

const KanbanBoard = () => {
  return (
    <div className={styles.KanbanBoard}>
      <CardList title={'ToDo'} cards={cards.filter(e => e.status === 'ToDo')} />
      <CardList title={'Doing'} cards={cards.filter(e => e.status === 'Doing')} />
      <CardList title={'Done'} cards={cards.filter(e => e.status === 'Done')} />
    </div>
  )
}

export default KanbanBoard;