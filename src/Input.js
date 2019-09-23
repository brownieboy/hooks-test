import React, { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width; 
}; 

const MyInput = () => {
  const [surname, setSurname] = useState("Potter");
  const [name, setName] = useState("Harry");
  const width = useWindowWidth();

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleSurnameChange = e => {
    setSurname(e.target.value);
  };

  useEffect(() => {
    document.title = `${name} ${surname}`;
  });

  return (
    <>
      <div>
        input: <input value={name} onChange={handleNameChange} />
      </div>
      <div>
        input: <input value={surname} onChange={handleSurnameChange} />
      </div>
      <div>Width: {width}</div>
    </>
  );
};



export default MyInput;
