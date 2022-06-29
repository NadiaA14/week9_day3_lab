import React, {useEffect} from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:9000/')
      .then(response => response.json())
      .then(data => console.log(data));
  });