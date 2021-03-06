import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';   
import ErrorBoundry from '../components/ErrorBoundry';
 

class App extends Component{
     constructor()
{
    super()
    this.state ={
        robots:[],
        Searchfield:''
    }
}    

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(user => this.setState({robots:user}));
    
    }
    
     
    onSearchChange = (event) =>{
     this.setState({Searchfield:event.target.value})
    }
  
 render(){
     const filteredRobots = this.state.robots.filter(robots => {
         return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
     })
     if (this.state.robots.length === 0){
         return <h1>Loading</h1>
     }
     else {
    return (
        <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <Scroll>
         <ErrorBoundry> 
            <Cardlist robots={filteredRobots}/>
         </ErrorBoundry> 
         </Scroll>
        </div> 
    );
}
}
}

export default App;