import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBook } from './BooksSlice';
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function AddBoox() {
  const style = {
    width:'100%',
    height:'563px'
  }
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
   
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const book = {id:uuidv4(), title,author};
    dispatch(addBook(book));
    navigate("/show-books",{replace: true});
  };
  return (
    

     <div className='bg-info text-center ' style={style}>
       <div className='container'>
       <h1>Add Books</h1>
       <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label><br />
          <input
           type="text" 
           id='title'
           name='title'
           value={title}
           onChange={(e) => setTitle(e.target.value)} 
           required />
        </div>
    
        <div>
          <label htmlFor="title">Author:</label><br />
          <input
           type="text" 
           id='author'
           name='author'
           value={author}
           onChange={(e) => setAuthor(e.target.value)} 
           required />
        </div><br />
        <button type='submit' className='btn btn-danger'>Add Book</button>

       </form>
       </div>
    </div>

  )
}

export default AddBoox;