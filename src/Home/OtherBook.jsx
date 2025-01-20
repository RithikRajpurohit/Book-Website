import React, { useEffect, useState } from 'react'
import BookCard from '../Components/BookCard';

const OtherBook = () => {

    const[books,setBooks] = useState([]);

    useEffect(()=>
    {
        fetch("https://book-server-jfl6.onrender.com/all-books").then(res=>res.json()).then(data=>setBooks(data))
    },[])

  return (
    <div>
      <BookCard books={books} headLine = "Other Books"/>
    </div>
  )
  
}

export default OtherBook
