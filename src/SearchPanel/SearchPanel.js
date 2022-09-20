import React from "react";
import "./SearchPanel.css";

const SearchPanel = ({ setSearchValue, handleChangeFav, handleChangeDone, data, ...props }) => {
  return (

    <div className="searchpanel__main">

      <div className="searchpanel__main-wrapper">

        <div className="searchpanel__main_check">

          <i className={props.doneChecked

            ? "fa-regular fa-square fa-lg"
            : 'fa-regular fa-square-check fa-lg'}
            onClick={handleChangeDone}
          />

          <p onClick={handleChangeDone}>Show incomplete</p>

          <i className={!props.favChecked

            ? "fa-regular fa-square fa-lg"
            : 'fa-regular fa-square-check fa-lg'}
            onClick={handleChangeFav}
          />

          <p onClick={handleChangeFav}>Show favorites</p>

        </div>

        <form>

          <input

            id="standartInput"
            type="text"
            placeholder="Start search here"
            onChange={(event) => setSearchValue(event.target.value)}

          />

        </form>

      </div>

    </div>
  );
};

export default SearchPanel;
