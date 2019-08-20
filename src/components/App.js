import React from 'react';
import AnimalBlock from './AnimalBlock/AnimalBlock';
import SelectedAnimalStage from './SelectedAnimalStage/SelectedAnimalStage';

import data from '../data';

import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      selectedAnimal: {
        name: 'selected animal here',
        video: 'selected video here'
      },
      ...data
    };
  }

  handleBackToList = backClick => {
    this.setState({ selected: false });
  };

  handleAnimalSelect = selectedAnimal => {
    console.log(selectedAnimal);
    this.setState({ selected: true, selectedAnimal: selectedAnimal });
  };

  render() {
    return (
      <main className="container">
        <h1>Animals Entertainer for Kids</h1>
        <div className="row">
          {this.state.selected === false ? (
            this.state.animals.map((animal, key) => {
              return (
                <AnimalBlock
                  animal={animal}
                  handleAnimalSelect={this.handleAnimalSelect}
                  key={key}
                />
              );
            })
          ) : (
            <SelectedAnimalStage
              selectedAnimal={this.state.selectedAnimal}
              handleBackToList={this.handleBackToList}
            />
          )}
        </div>
      </main>
    );
  }
}

export default App;
