import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {

    state = {
      posts: [],
      status : "loading..."
    }
    componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res=> {
        console.log(res)
        const posts10 = res.data.slice(0,10);
        console.log(posts10);
        this.setState({
          posts:posts10,
          status : "done..."
        })
      })
    }
  render ()
  {
    return(<div className="App">
      Hello!<br/>
  <p>{this.state.status}</p>
    </div>
    );
    }

      // will fire after change- like deleting car
  componentDidUpdate(prevProps, prevState){
    console.log('component updated');
    console.log(prevState);
    console.log(`I read from json place holder ${this.state.posts.length - prevState.posts.length}`)
  }
}

export default App;
