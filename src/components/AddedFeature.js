import React from 'react';


const AddedFeature = props => {

  const handleRemoveFeature = () =>{
    props.remove(props.feature)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleRemoveFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
