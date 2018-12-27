import React, { Component } from 'react';

import './App.css';

import StreamCardList from './components/stream-card-list';

class App extends Component {
  render() {
    const listofStreams = [
      { id: 0, title: 'Joao CS 1.6', description: 'Headshot sem parar' },
      { id: 1, title: 'Lolzim do sucesso', description: 'Ganka mid com Singed' },
      { id: 2, title: 'Dota 2.0', description: 'Carregando os frag' },
      { id: 3, title: 'Igreja Asa Sul', description: 'Venha conhecer a palavra verdadeira' },
      { id: 4, title: 'Gama Church', description: 'Igreja no estado do Gama, depois do shopping' },
    ];

    return (
      <StreamCardList listofStreams={listofStreams} />
    )
  }
}

export default App;
