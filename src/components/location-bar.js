import React from "react";

const LocationBar = ({ info }) => {
    return (
        <div className="location-bar">
            <div className="">IP ADDRESS<br /><span>{`${info.ip}`}</span></div>
            <div>LOCATION<br />
                <span>{`${info.location.city}, ${info.location.country} ${info.location.postalCode}`}</span>
            </div>
            <div>Timezone {info.location.timezone}</div>
            <div>ISP  {info.isp}</div>
        </div>
    )
}

export default LocationBar;