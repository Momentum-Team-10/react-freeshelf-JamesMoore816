import './App.css';
import { useState } from 'react'
import Book from './components/Book.js'
import { bookData } from './bookData'

export function App() {
  const [books] = useState(bookData)
  return (
    <>
    <h1>React Freeshelf Books</h1>
    {books.map((book, index) => (
      <Book title={book.title} key={index} author={book.author} shortDescription = {book.shortDescription} coverImageUrl = {book.coverImageUrl} url={book.url} publisher={book.publisher} publicationDate={book.publicationDate} detailedDescription={book.detailedDescription} />
      ))}
   </> 
  )
}

export { App as default }
