import { useState } from "react";
import React from "react";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
let Comment = () => {
    let [comment, setComment] = useState([])
    let AddComment = (event) => {
        event.preventDefault()
        let commentObj = {
            title: event.target.title.value,
            body: event.target.body.value,
            author: event.target.author.value,
            Submission: new Date().toLocaleString()
        }
        let newComment = [...comment, commentObj]
        setComment(newComment);
    }
    let deleteThis = (indexToDelete) => {
        let newComment = comment.filter(function(val, index) {
            if(indexToDelete == index){
                return false
            }
            return true
        });
        setComment(newComment)
    }
    return (
        <div>
            <form onSubmit={AddComment}>
                <input type="text" name="title" placeholder="Title" className="titleClass"/>
                <input type="text" name="author" placeholder="Your Name : " className="authorClass"/>
                <br />
                <input type="text" name="body" placeholder="Your comment" className="bodyClass"/> 
                <br />
                <button className="bigButton">Post your Comment</button>
            </form>
            {comment.map((val, index) => {
                if( val.title == "" && val.body == "" && val.author == "" ){
                    return <div className="errordata">
                        enter data
                        </div>
                }else{
                    try{
                    document.querySelector(".errordata").textContent = ""
                    }
                    catch{
                        return true
                    }
                    finally{
                    return (
                        <div className="commentDiv">
                            <h2>
                                {val.title}
                            </h2>
                            <p>
                                {val.body}
                            </p>
                            <p>
                            posted by <strong>{val.author}</strong> on  <strong> {val.Submission}</strong>
                            </p>
                            <button  
                            onClick={ () => {
                                deleteThis(index)
                            }}
                            >
                            Delete this comment
                            </button>
                        </div>
                    ) 
                }
                }         
            })}
        </div>
    )
}
export default Comment;
