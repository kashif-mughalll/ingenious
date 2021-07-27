import React from "react";
import './CountryRegionSelector.css'
import {
  CountryDropdown,
  RegionDropdown,
} from "react-country-region-selector-material-ui-new";

var CountryRegionSelector = ({ country, setCountry }) => {
  return (
    <div>
      <CountryDropdown className="CountryRegionSelector" 
        value={country}
        onChange={(val) => setCountry(val)}
      />
      {/* <RegionDropdown
        country={location.country}
        value={"Sindh"}
        onChange={(val) => setLocation({...location,region : val})}
      /> */}
    </div>
  );
};

export default CountryRegionSelector;
