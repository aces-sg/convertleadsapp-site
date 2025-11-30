import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "./index.css";

const ReactWhatsapp = () => {
  return (
    <WhatsAppWidget
      phoneNo="6598182573"
      position="right"
      widgetWidth="300px"
      widgetWidthMobile="260px"
      autoOpen={false}
      autoOpenTimer={2000}
      messageBox={true}
      messageBoxTxt=""
      iconSize="40"
      iconColor="white"
      iconBgColor="#25D366"
      headerIcon="https://www.aceplp.com.sg/wp-content/uploads/2019/03/cropped-favicon_acelogo-1.png"
      headerIconColor="pink"
      headerTxtColor="black"
      headerBgColor="white"
      headerTitle="Support"
      headerCaption="Online"
      bodyBgColor="#bbb"
      chatPersonName="Support"
      chatMessage={
        <>
          Hi there 👋 <br />
          <br /> How can I help you?
        </>
      }
      footerBgColor="#999"
      placeholder="Type a message.."
      btnBgColor="yellow"
      btnTxt="Start Chat"
      btnTxtColor="black"
    />
  );
};

export default ReactWhatsapp;
