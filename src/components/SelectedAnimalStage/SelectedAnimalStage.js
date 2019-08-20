import React from 'react';

class SelectedAnimalStage extends React.Component {
  render() {
    const { name, videos } = this.props.selectedAnimal;

    return (
      <div className="selected-animal-stage row">
        <h1>{name}</h1>
        <div className="col-md-12">
          <div className="selected-animal-stage__player">
            Video will go here
          </div>
        </div>
        <div
          className="col-md-3 offset-md-3"
          onClick={() => this.props.handleBackToList(false)}
        >
          Back To Animals
        </div>
      </div>
    );
  }
}

export default SelectedAnimalStage;
