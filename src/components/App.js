import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  function handleSearch(criteria) {
    setSearchTerm(criteria)
  }
  
  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <ListingsContainer searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
