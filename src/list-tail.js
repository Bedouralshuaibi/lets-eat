import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";


export default class ListTail extends React.Component
{
    
    deleteClicked = (e)=>{
        console.log("delete resturant")
        // this.props.resturant = this.props.resturant(this)
        this.props.deleteAList(this.props.id);
    }
    render(){
        return(
            <section className="list-item-tail">
            <div className="stars">
                <p style={{color:'yellow'}}><IoIosStarOutline size={22}/></p>
                <p style={{color:'yellow'}}><IoIosStarOutline size={22}/></p>
                <p style={{color:'yellow'}}><IoIosStarOutline size={22}/></p>
            </div>
            <span onClick={this.deleteClicked} className="icon"><MdDeleteForever size={27}/></span>
            </section>

        )
    }
}
 