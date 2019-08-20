import React from 'react';

class AnimalBlock extends React.Component {
  render() {
    const { name, thumbnail, videos } = this.props.animal;
    return (
      <div className="col-md-4">
        <div
          onClick={() => this.props.handleAnimalSelect(this.props.animal)}
          className="animal-block"
          style={{ backgroundImage: `url(${thumbnail})` }}
          key={this.props.key}
        >
          <div className="animal-block__name">{name}</div>
        </div>
      </div>
    );
  }
}

export default AnimalBlock;
