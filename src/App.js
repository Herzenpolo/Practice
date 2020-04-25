import React, { Component } from 'react';
import axios from 'axios'



class App extends Component {
  state = {
    beers : [],
  }


  async componentDidMount(){


    let res = await axios.get("https://ih-beers-api2.herokuapp.com/beers") //Waits until this is finished 
    this.setState({beers: res.data})
  

    
        console.log(this.state)

  }

showAllBeers = () => {
  return this.state.beers.map(eachBeer => {
    return (
      <ul>
        <li>
          {eachBeer.name}
          <img src={eachBeer.image_url} alt={eachBeer.name}></img>
        </li>
      </ul>
    )
  })
}

  render() {
    return (
      <div>
            {this.showAllBeers()}      
      </div>
    );
  }
}


export default App; 