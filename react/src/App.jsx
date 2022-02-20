import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import List from './components/List';
import React from 'react';

class App extends React.Component {
  state = {
    books:[
      {
        title: 'Belajar React',
        description: 'Description anything...'
      },
      {
        title: 'Belajar Laravel',
        description: 'Description anything...'
      },
    ],
    text: "",
  }

  click = ()=> {
    alert('OK')
  }

  change = (e) => {
    this.setState({
      text:e.target.value
    })
    console.log(this.state.text)
  }

  render(){
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
