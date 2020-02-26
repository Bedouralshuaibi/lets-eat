import React from 'react';
import ListTail from './list-tail';
import { MdDeleteForever } from "react-icons/md";


export default class List extends React.Component{
   
    cheaked = () =>{
        console.log(this.props.resturant + "im list component")
        this.props.deleteSelected(this.props.resturant)
    }
    deleteClicked = (e)=>{
        console.log("delete resturant")
        // this.props.resturant = this.props.resturant(this)
        this.props.deleteAList(this.props.id);
    }

   
    render(){
        
        return(
            
            <div class="list-container">
             <input type="checkbox" className="checkbox" onClick={this.cheaked}></input>
             <h1>{this.props.resturant.name.charAt(0).toUpperCase() + this.props.resturant.name.slice(1)}</h1>
             <p>{this.props.resturant.cusine}</p>
             <p>{this.props.resturant.countrySelected}</p>
             <p>{this.props.resturant.comment}</p>

                <div className="footerList">
                  <span onClick={this.deleteClicked} className="icondelete"><MdDeleteForever size={27}/></span> 
                  <ListTail fav ={this.props.fav} notHeart ={this.props.notHeart} isFav = {this.props.isFav} heartAll={this.props.heartAll} deleteAList={this.props.deleteAList} resturant={this.props.resturant} key={this.props.index} id={this.props.index}/>
                </div>
            </div>

             )
    }
}