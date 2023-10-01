import React from 'react';
import './App.css';          

// function App() {             
// return (                    
//   <div>
//     <h1 className="title">Hello World!</h1>
//       <p> This is a paragraph of text</p>
// </div>
//   );
// }  

function App() {
  
  const name = "Andy";
  const age = 36;

  return (
    <div>
      <p>My name is {name} and I'm {age} years old</p>
    </div>
  );
}

export default App;