import React from "react";
import { CardContacts} from "../components/CardContacts";
import { CardCopyRight} from "../components/CardCopyRight";

export const Footer = () => {
  return (
    
    <div className="footer">
      <div className="boxCircleFooter"></div>
      <CardContacts />
      <CardCopyRight/>
    </div>
    
  );
};
