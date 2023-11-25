import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Mylist from "./Mylist";
import Edit from "./Edit";

function App() {
  const [item, setitem] = useState("");
  const [itemlist, setitemlist] = useState([]);
  const [edit, setedit] = useState("");
  const [update, setupdate] = useState(-1);

  const createItem = (e) => {
    setitem(e.target.value);
  };

  const additem = () => {
    setitemlist([...itemlist, item]);
  };
  const deleteitem = (id) => {
    setitemlist((itemlist) => {
      return itemlist.filter((arrelement, index) => {
        return index !== id;
      });
    });
  };

  function edititem(id, data) {
    setupdate(id);
  }
  const handleupdate = (edit, id) => {
    delete itemlist[id];
    itemlist[id] = edit;
    setupdate(-1);
  };

  return (
    <>
      <div className="container">
        <div className="innerbox">
          <h4>To Do List</h4>

          <div className="box2">
            <div>
              <input
                type="text"
                placeholder="add an item"
                onChange={createItem}
              />
            </div>
            <div>
              <button onClick={additem}>add</button>
            </div>
          </div>
          <br />

          <div>
            {itemlist.map((item, index) => {
              return (
                <>
                  <div key={index}>
                    {update === index ? (
                      <Edit
                        data={item}
                        edit={edit}
                        setedit={setedit}
                        id={index}
                        onUpdate={handleupdate}
                      />
                    ) : (
                      <Mylist
                        data={item}
                        id={index}
                        onSelect={deleteitem}
                        onEdit={edititem}
                      />
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
