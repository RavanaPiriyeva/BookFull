import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBooks } from './Store/bookSlice';
import Book from './Pages/Book';
function App() {
  let dispatch = useDispatch()

  useEffect(() => {

    dispatch(getBooks())

  }, [])
  return (
    <>
      <Book />
    </>
  );
}

export default App;
