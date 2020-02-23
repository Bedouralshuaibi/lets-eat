import React from 'react';
import ListContainer from './listContainer';
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    resturant: '',
    lists: []
  }
  }
  handleChange = (event) =>{
    // console.log(event.target.value)
    this.setState({ resturant: event.target.value })
  
  }
  handleSubmit=(event) =>{
    event.preventDefault();
    if(this.state.resturant != 0){
    this.state.lists.push(this.state.resturant)}

    console.log(this.state.lists)
    this.setState({
      resturant: ''})
  }
  handleDeleteAll=(event) =>{
  event.preventDefault();
  this.setState({lists: []})
  console.log(this.state.lists.length)
  }
  
  render(){
    return(
      <div>
        <h1>Let's Eat</h1>
        <label>Add Your Favorite Resturant: </label>
        <input 
        type="text"
        name="resturant"
        placeholder="I like ....."
        value={this.state.resturant}
        onChange={this.handleChange} />
        <button  onClick={this.handleSubmit}>Submit</button>
        <button  onClick={this.handleDeleteAll}>Delete All</button>
        <ListContainer lists={this.state.lists}/>
        
      </div>
    )
  }
}
