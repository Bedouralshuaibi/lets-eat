import React from 'react';
import ListContainer from './listContainer';

import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    resturantName: '',
    cusine:'',
    lists: [],
    resturantNameObj: {}
  }
  }
  handleChangeRS = (event) =>{
    // console.log(event.target.value)
    this.setState({ resturantName: event.target.value })
    
  }
  handleChangeCU = (e) =>{
    // console.log(e.target.value)
    this.setState({ cusine: e.target.value })
  }
  handleSubmit=(event) =>{
    event.preventDefault();
    if(this.state.resturantName != ''){
     const resturantob = this.state.resturantNameObj;
     resturantob.name =this.state.resturantName ;
     resturantob.cusine = this.state.cusine;
      this.setState({resturantNameObj:resturantob })
      console.log(this.state.resturantNameObj)
    this.state.lists.push(this.state.resturantNameObj)}

    ////////
    // localStorage.setItem('resturant', this.state.resturant);
    // var cat = localStorage.getItem('resturant');
    /////////
    console.log(this.state.lists)
    this.setState({
      resturantName: '', cusine:'', resturantNameObj:{}})
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
  map = ()=>{
    window.open('https://www.google.com/maps')

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
        onChange={this.handleChangeRS} />
        <label>Cousine </label>
        <input 
        type="text"
        name="cusine"
        placeholder="is it fastfood .."
        value={this.state.cusine}
        onChange={this.handleChangeCU} />
        <button  onClick={this.handleSubmit}>Submit</button>
        <button  onClick={this.handleDeleteAll}>Delete All</button><br/>
        <label>location</label><button onClick={this.map}>find my resturant</button>
        <ListContainer lists={this.state.lists} deleteAList={this.handlerDeleteAList} googlemap={this.map}/>
       
      </div>
    )
  }
}
