// App.js
import React, { Component } from 'react';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: 'unknown',
    };
  }

  // Define a function to update the mood
  updateMood = () => {
    // Simulate a random mood prediction (you can replace this with actual logic)
    const moods = ['happy', 'sad', 'excited', 'angry'];
    const randomMood = moods[Math.floor(Math.random() * moods.length)];

    this.setState({ mood: randomMood });
  };

  render() {
    return (
      <div className="App">
        <h1>Click the button to predict your mood!</h1>
        <button onClick={this.updateMood}>Predict Mood</button>
        <p>Your mood is: {this.state.mood}</p>
      </div>
    );
  }
}

export default App;
