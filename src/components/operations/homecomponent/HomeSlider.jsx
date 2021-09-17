import React from 'react';
import { Link } from 'react-router-dom';

export default class HomeSlider extends React.Component {
  state = {
    sliderCounter: 1,
    headings: ['Ստեղծարար', 'Արդյունավետ', 'Պահանջված', 'Ժամանակակից'],   
    currentHeading: 'Ստեղծարար'
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        sliderCounter: this.state.sliderCounter === 4 ? 1 : ++this.state.sliderCounter,
      });
      this.setState({
        currentHeading: this.state.sliderCounter === 2 ? this.state.headings[2] 
                      : this.state.sliderCounter === 3 ? this.state.headings[3] 
                      : this.state.sliderCounter === 4 ? this.state.headings[1]
                      : this.state.headings[0]                      
      })
    }, 4000); 
  }
  render() {
    return (
      <div>
        <div className="sliderBlock">
          <div className="fade" style={{ backgroundImage: `url(/img/imgHome/slider${this.state.sliderCounter}.jpg)` }}>
            <div className="show-caption">
              <h2>{this.state.currentHeading}</h2>
              <h3>Կրթություն</h3>
            </div>
             <p><Link to='/about' className="aboutAsFromHome">Մեր Մասին</Link></p>
          </div>
        </div>
      </div>
    )
  }
}

