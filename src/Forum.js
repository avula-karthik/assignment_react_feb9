import propTypes from "prop-types" ;
import React from "react" ;
import { useState } from "react";
function Forum(props){
    let [reply, setReply] = useState([])
    let addReply = (event) => {
        event.preventDefault();
        let replyObj = {
            data: event.target.reply.value,
            author : event.target.author.value

        };
        let newReplies = [...reply, replyObj];
        setReply(newReplies);
    }
    return(
        <div>
            <form onSubmit={addReply}>
            <h1>{props.topic}</h1>
            <h4>Post your comments here</h4>
            <input type="text"  placeholder="Reply" name="reply" className="biginput"/>
            <br />
            <input type="text" placeholder="Name" name="author"  />
            <button className="bigButton" >Add your reply now</button>
            </form>
           {reply.map((val,index)=>{
               return(
                   <div>
                       <table>
                           <tr>
                               <td>
                               Reply : { val.data}
                               </td>
                                <td>
                                Author : {val.author} 
                                </td>
                           </tr>
                       </table>
                   </div>
               )
           } )}
        </div>
    )
}
export default Forum;