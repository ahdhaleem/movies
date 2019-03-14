import React, { Component } from 'react'
import Popup from "reactjs-popup";

const contentStyle = {
  maxWidth: "600px",
  width: "90%"
};

class MoviePopup extends Component {
  constructor(props) {
    super(props)

      this.state = {
        open: false
      }
  }

  closeModal = () => {
    this.setState({ open: false })
  }

  render() {
    const {title, actors, director, production, genre, year} = this.props

    return (
        <Popup
           defaultOpen
           modal
           lockScroll={true}
           contentStyle={contentStyle}
           onClose={this.closeModal}>

          <div className="modal">
            <div className="header">{title}</div>
            <div className="content">
              <h3>Actors</h3>
              {actors}
              <h3>Director</h3>
              {director}
              <h3>Production</h3>
              {production}
              <h3>Genre</h3>
              {genre}
              <h3>Year</h3>
              {year}
            </div>
          </div>

        </Popup>
    )
  }
}

export default MoviePopup