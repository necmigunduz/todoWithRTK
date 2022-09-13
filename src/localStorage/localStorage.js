const saveName = (name) => {
  localStorage.name = JSON.stringify(name);
};

const loadName = () => {
  const name = JSON.parse(localStorage.name);
  return name;
};

const saveID = (ID) => {
  localStorage.ID = JSON.stringify(ID);
};

const loadID = () => {
  const ID = JSON.parse(localStorage.ID);
  return ID;
};

export { saveName, loadName, saveID, loadID };
