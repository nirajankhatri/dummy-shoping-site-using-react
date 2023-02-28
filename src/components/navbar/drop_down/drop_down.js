import React, { Fragment } from "react";
import '../../../sass/components/_dropdown.scss'

const Drop_down = () => {
  return (
      <div class="dropdown">
        <label class="dropdown--label">
          <input type="checkbox" class="dropdown--checkbox" />
          <span class="dropdown--text">
            Use cases
            <span class="dropdown--arrow"></span>
          </span>

          <div class="dropdown--list">
            <ul>
              <li>
                <a href="">Use case 1</a>
              </li>
              <li>
                <a href="">Use case 2</a>
              </li>
              <li>
                <a href="">Use case 3</a>
              </li>
            </ul>
          </div>
        </label>
      </div>
  );
};

export default Drop_down;
