import React from 'react';
import ListContainer from './listContainer';
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    resturantName: '',
    lists: []
  }
  }
  handleChange = (event) =>{
    // console.log(event.target.value)
    this.setState({ resturantName: event.target.value })
  
  }
  handleSubmit=(event) =>{
    event.preventDefault();
    if(this.state.resturantName != ''){
    this.state.lists.push(this.state.resturantName)}
    ////////
    // localStorage.setItem('resturant', this.state.resturant);
    // var cat = localStorage.getItem('resturant');
    /////////
    console.log(this.state.lists)
    this.setState({
      resturantName: ''})
  }
  // when youser click in on list to delete it 
  // new arry of list 
  handleDeleteAll=(event) =>{
  event.preventDefault();
  console.log(this.state.lists)
  this.setState({lists: []})
  console.log(this.state.lists.length)
  }
  handlerDeleteAList=(indexDelet)=>{
    const newLists=[...this.state.lists]
    newLists.splice(indexDelet, 1)
    this.setState({
      lists:newLists,
    })
    

  }
  render(){
    return(
      <div>
        <h1>Let's Eat</h1>
        <label>Add Your Favorite Resturant: </label>
        <input 
        type="text"
        name="resturantName"
        placeholder="I like ....."
        value={this.state.resturantName}
        onChange={this.handleChange} />
        <button  onClick={this.handleSubmit}>Submit</button>
        <button  onClick={this.handleDeleteAll}>Delete All</button>
        <ListContainer lists={this.state.lists} deleteAList={this.handlerDeleteAList}/>
        
      </div>
    )
  }
}
