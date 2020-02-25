import React from 'react';
import ListContainer from './listContainer';
import Giphy from './giphy';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    resturantName: '',
    cusine:'',
    lists: [],
    resturantNameObj: {},
    img:'',
    fav:[],
    
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
    //  const resturantob = this.state.resturantNameObj;
    //  resturantob.name =this.state.resturantName ;
    //  resturantob.cusine = this.state.cusine;
      // this.setState({resturantNameObj: {
      //   name: this.state.resturantName,
      //   cusine: this.state.cusine,
      // } })
      console.log(this.state.resturantNameObj)
    // this.state.lists.push(this.state.resturantNameObj)}

    ////////
    // localStorage.setItem('resturant', this.state.resturant);
    // var cat = localStorage.getItem('resturant');
    /////////
    console.log(this.state.lists)
    this.setState({
      lists: [...this.state.lists, {
        name: this.state.resturantName,
        cusine: this.state.cusine,
      }],
      resturantName: '', 
      cusine:'', 
    });
  }
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
   giveMeMood = (url)=>
   {
     this.state.img = url
   }
   imgtoApper = (giphy)=>{
     this.setState({img:giphy})
   }

   favAll= (obj)=>{
     const newfav = [...this.state.fav];
     newfav.push(obj);
     this.setState({ fav:newfav});
  
   }
  //  favAllDisplay = ()=>{
  //    const allFav = this.state.map()
  //  }
  render(){
    return(
      <div>
      <h1>Let's Eat</h1>
      <div className="home-page">
        <div>
        <label>Add Your Favorite Resturant: </label>
        <input 
        type="text"
        name="resturantName"
        placeholder="I like ....."
        value={this.state.resturantName}
        onChange={this.handleChangeRS} /><br/>
        <label>Cousine </label>
        <input 
        type="text"
        name="cusine"
        placeholder="is it fastfood .."
        value={this.state.cusine}
        onChange={this.handleChangeCU} /> <br />
        <label>location</label><button onClick={this.map}>find my resturant</button><br/>
        <button  onClick={this.handleSubmit}>Submit</button>
        <button  onClick={this.handleDeleteAll}>Delete All</button>
        <button  onClick={this.favAllDisplay}>view All Favorites</button><br/>

        <Giphy imgto ={this.imgtoApper}/> <br />
        <img src={this.state.img}  className="giphy-name"></img> 
        </div>
        <div className="list">
        <ListContainer lists={this.state.lists} deleteAList={this.handlerDeleteAList} heartAll={this.favAll} googlemap={this.map}/>
        
        
        </div>
        
      </div>
      
      </div>
    )
  }
}
