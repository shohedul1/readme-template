import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateBook } from "./BooksSlice";
import { useNavigate } from "react-router-dom";

function EditBook() {
  const style = {
    width:'100%',
    height:'563px'
  };

 const location = useLocation();
 const dispatch = useDispatch();
 const navigate = useNavigate() ;

  const[id,setId] = useState(location.state.id);
  const[title,setTitle] = useState(location.state.title);
  const[author,setAuthor] = useState(location.state.author);


const handleSubmit = (e) =>{
  e.preventDefault();
  dispatch(updateBook( {id,title,author}));
  navigate("/show-books",{replace: true });
}
 



  return (
    <div className='bg-info text-center'>
      <div className="container" style={style}>
      <h1>Edit book</h1>
   
     <form onSubmit={handleSubmit}>
     <div>
     <label htmlFor="title">Title:</label><br />
      <input type="text"
      id="title"
      name="title"
      value={title}
      onChange={(e)=>setTitle(e.target.value)} 
      required/>
     </div>
     <div>
     <label htmlFor="author">author:</label><br />
      <input type="text"
      id="author"
      name="author"
      value={author}
      onChange={(e)=>setAuthor(e.target.value)} 
      required/>
     </div><br />
     <button type="submit" className="btn btn-outline-dark">Update Book</button><br />
     </form>
    

      </div>
    </div>
  )
}

export default EditBook;