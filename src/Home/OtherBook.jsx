import React, { useEffect, useState } from 'react'
import BookCard from '../Components/BookCard';

const OtherBook = () => {

    const[books,setBooks] = useState([]);

    useEffect(()=>
    {
        fetch("https://book-server-ten-xi.vercel.app/all-books").then(res=>res.json()).then(data=>setBooks(data))
    },[])

  return (
    <div>
      <BookCard books={books} headLine = "Other Books"/>
    </div>
  )
  
}

export default OtherBook
