import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";


export default class ListTail extends React.Component
{
    
    delete = ()=>{
        console.log("delete resturant")
         
    }
    render(){
        return(
            <section className="list-item-tail">
            <div className="stars">
                <p style={{color:'yellow'}}><IoIosStarOutline size={25}/></p>
                <p style={{color:'yellow'}}><IoIosStarOutline size={25}/></p>
                <p style={{color:'yellow'}}><IoIosStarOutline size={25}/></p>
            </div>
            <span onClick={this.delete} className="icon"><MdDeleteForever size={25}/></span>
            </section>

        )
    }
}
 