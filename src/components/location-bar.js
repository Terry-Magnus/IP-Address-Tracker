import React from "react";

const LocationBar = ({ info }) => {
    return (
        <div className="location-bar">
            <div>IP ADDRESS<br /><span>{`${info.ip}`}</span></div>
            <div>LOCATION<br />
                <span>{`${info.location.city}, ${info.location.country} ${info.location.postalCode}`}</span>
            </div>
            <div>Timezone <br />{info.location.timezone}</div>
            <div>ISP <br /> {info.isp}</div>
        </div>
    )
}

export default LocationBar;