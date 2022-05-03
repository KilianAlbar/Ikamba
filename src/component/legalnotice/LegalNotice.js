import React from "react";
import './LegalNotice.css';

import { useTranslation } from "react-i18next";

export default function LegalNotice() {

    const { t } = useTranslation();

    return(
        <div className="LegalNotice">
            
            <h1>{t('LegalNotice')}<br></br>IKAMBA Lab</h1>

39 Rue des Granges Galand
<br></br>
37550 Saint Avertin
<br></br>
Email: contact@ikambaorganics.com
<br></br>
{t("Phone")} +33 (0) 972 535 577
<br></br>
{t("Phone")} +33 (0) 972 535 579
<br></br>
{t("FurtherData")}
<br></br>
Tax number: FR24813741055
<br></br>
{t("SASCapital")} 33000 €
<br></br>
SIRET: 81374105500012
<br></br>
RCS: Tours
<br></br>
APE: 72.19Z
<br></br>
<h1>{t("PrivacyPolicy")}</h1>

{t("PrivacyDisclaimer")}
<br></br>
{t("ComputersAndLiberties")}
<br></br>
{t("Law")}
<br></br>
Copyright:
<br></br>
©IKAMBA Lab.
<br></br>
{t("ContentCopyRight")}
<br></br>
{t("Trademark")}
<br></br>
{t("Authorization")}
<br></br>
{t("LiabilityAdvice")}
<br></br>
{t("Responsibility")}
<br></br>
{t("PhotoCredits")}
<br></br>
IKAMBA LAB

        </div>
    )
}