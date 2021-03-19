import React, { Component } from 'react';
import Header from './header';
import Image from './image';

class App extends Component {

  constructor() {
    super();
    this.pages = [
      { readableName: "Home", url: 'home' },
      { readableName: "About Me", url: 'about-me' },
      { readableName: "Blog", url: 'blog' },
      { readableName: "Images", url: 'images' },
      { readableName: "Links", url: 'images' },
      { readableName: "Resources", url: 'links' }
    ];
    this.state = {
      currentPage: 0,

    }
    this.setPage = this.setPage.bind(this)
  }
  setPage(newPageNum) {
    this.setState({ currentPage: newPageNum })
  }
  componentDidMount() {
    console.log('in the component did mount method')

     let currentPage = window.localStorage.getItem('currentPage')
    //console.log(currentPage)
     if (currentPage) {
       this.setState({ currentPage: JSON.parse(currentPage) })
     }
     else {
       window.localStorage.setItem('currentPage', 0)
     }
   }
   componentDidUpdate() {
    window.localStorage.setItem('currentPage', JSON.stringify(this.state.currentPage))

   }

  render() {
    return (
      <div className="App container">
        <Header
          pages={this.pages}
          currentPage={this.state.currentPage}
          setPage={this.setPage}
          name={this.state.name}
        >
  
        </Header>

        <Image />
      </div>
    )
  }
}
export default App;
