import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    // this.imageRef is the instance variable
    this.imageRef = React.createRef();
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 150);

    this.setSpans({ spans });
  };

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  render() {
    const { urls, description } = this.props.image;
    return (
      <div>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
