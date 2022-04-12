import React from "react";

// ==== Styles ====

import './Footer.css'

// ==== Dependencies ===

import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Footer(){
    return(
        <div className="footer">
            <div className="mailFooter">
                <EmailIcon color="white" fontSize="small"/>
                <p>contact@ikambaorganics.com</p>
            </div>
            <div className="adressFooter">
                <LocationOnIcon color="white" fontSize="small"/>
                <p>IKAMBA Organics
                    <br/>
                   39 Rue des Granges Galand
                   <br/>
                   37550 Saint Avertin
                </p>
            </div>
            <div className="phoneFooter">
                <PhoneIcon color="white" fontSize="small"/>
                <p>
                    33 (0)9 72 53 55 79
                    <br/>
                    +33 (0)9 72 53 55 77
                    <br/>
                    +33 (0)6 71 87 02 54
                </p>
            </div>
        </div>
    )
}