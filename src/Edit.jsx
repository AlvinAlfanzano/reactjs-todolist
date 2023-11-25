import React from "react";

function Edit(props) {
  let edata = props.data;
  const setedit = props.setedit;
  function handleInput(e) {
    setedit(e.target.value);
  }

  return (
    <div>
      <div className="box2">
        <input
          type="text"
          placeholder={edata}
          value={props.edit}
          onChange={handleInput}
        />
        <button
          onClick={() => {
            props.onUpdate(props.edit, props.id);
          }}
        >
          update
        </button>
      </div>
      <br />
    </div>
  );
}

export default Edit;
