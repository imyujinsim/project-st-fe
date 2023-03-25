const handleResultSubmit = (event, props) => {
  console.log(event);
  event.preventDefault();
  const query = event.target[0].value;
  // setFormData(query);
  // console.log(query);
  props.setValue(query);
};

const handleMainSubmit = (params) => {
  // event.preventDefault();
  const query = params.target[0].value;
  // setFormData(query);
  // console.log(query);
  params.setValue(query);
};

export default { handleResultSubmit, handleMainSubmit };
