import React from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from './BooksSlice';
import { Link } from 'react-router-dom';

function BooksView() {
  const books = useSelector((state)=>state.booksReducer.books);
  const dispatch = useDispatch();
  const handleDelete = (id) =>{
    dispatch(deleteBook(id));
  }

  const style ={
    width:'100%',
    height:'563px'
  };

  return (
    <div className='bg-info text-center' style={style}>
      <div className='container'>
      <h1>List of book</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th> Author</th>
          <th>Action</th>
        </tr>
      </thead>
      
      <tbody>
      {books && books.map((book)=>{
          const {id,title,author} = book; 
          return <tr key={id}>
           
            <td>{title}</td>
            <td>{author}</td>
            <td>
              <Link to ="/edit-books" state={{id,title,author}}>
               <button className='btn btn-outline-dark ms-5 px-5'>Edit</button>
              </Link>
              <button onClick={()=>{handleDelete(id)}} className='btn btn-outline-warning ms-5 px-5'>Delete</button>
            </td>
          </tr>
         })}
      </tbody>
  
    </Table>
   
  
      </div>
    </div>
  )
}

export default BooksView;