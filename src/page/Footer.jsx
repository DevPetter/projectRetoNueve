import React from "react";
import { CardContacts} from "../components/CardContacts";
import { CardCopyRight} from "../components/CardCopyRight";

import "../assets/style/footer.css"

export const Footer = () => {
  return (
    <>
    <div className="footer">
      <CardContacts />
      <div className="box-CircleFooter">
      </div>
      <CardCopyRight/>
    </div>
    </>
    
  );
};
