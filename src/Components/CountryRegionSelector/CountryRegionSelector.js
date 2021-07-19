import React from "react";
import './CountryRegionSelector.css'
import {
  CountryDropdown,
  RegionDropdown,
} from "react-country-region-selector-material-ui-new";

var CountryRegionSelector = ({ location, setLocation }) => {
  return (
    <div>
      <CountryDropdown classname="CountryRegionSelector"
        value={location.country}
        onChange={(val) => setLocation({...location,country : val})}
      />
      <RegionDropdown
        country={location.country}
        value={location.region}
        onChange={(val) => setLocation({...location,region : val})}
      />
    </div>
  );
};

export default CountryRegionSelector;
