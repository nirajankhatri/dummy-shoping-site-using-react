import React, { useState } from "react";
import "../../sass/components/_themeToggleButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext, themes } from "../../contexts/theme-context";
import '../../style/components/_themeToggleButton.scss'

const Theme_toggle_button = () => {
  const [lightMode, setLightMode] = useState(true);

  return (
    <div>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => {
              setLightMode(!lightMode);
              changeTheme(lightMode ? themes.dark : themes.light);
            }}
            
          />
        )}
      </ThemeContext.Consumer>
      <label htmlFor="checkbox" className="label">
        <FontAwesomeIcon className="sun" icon="sun" />
        <FontAwesomeIcon className="moon" icon="moon" />
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default Theme_toggle_button;
