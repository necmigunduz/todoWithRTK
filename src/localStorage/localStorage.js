const saveName = (name) => {
    localStorage.name = JSON.stringify(name);
  };
  
  const loadName = () => {
    const name = JSON.parse(localStorage.name);
    return name;
  };
  
  export { saveName, loadName };