import React from "react";

const Landingpage = (props) => {
  let onChangeCreateNotes = () => {
    let updatedArr = [
      ...props.info[1],
      { id: Math.random() * 20, text: "Enter Title Here" },
    ];
    props.info[0](updatedArr);
    localStorage.setItem("notes", JSON.stringify(updatedArr));
  };

  return (
    <div>
      You have no notes
      <button onClick={onChangeCreateNotes}>Create One</button>
    </div>
  );
};

export default Landingpage;
