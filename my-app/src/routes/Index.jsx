import React from 'react';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Home from '../pages/Home';
import Error from '../pages/Error';
import BooksView from '../fetaures bookls/BooksView';
import AddBoox from '../fetaures bookls/AddBoox';
import Header from '../layouts/Header';
import EditBook from './../fetaures bookls/EditBook';


function Index() {
  return (
    <BrowserRouter>
    <Header/>
    <main>
    <Routes>
        <Route path = "/" element ={<Home/>} />
        <Route path = "/show-books" element ={<BooksView/>}/>
        <Route path = "/add-books" element ={<AddBoox/>}/>
        <Route path = "/edit-books" element ={<EditBook/>}/>

        <Route path = "*" element ={<Error/>}/>

    </Routes>
    </main>
    </BrowserRouter>

    )
}



export default Index;