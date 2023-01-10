import { createContext, useContext } from "react";

const UserContext = createContext();

// eslint-disable-next-line react-hooks/rules-of-hooks
export const calendlyContext = () => useContext(UserContext);

const CalendlyContext = (props) => {
  const handleOnClickCalendly = () => {
    Calendly.showPopupWidget(
      "https://calendly.com/brijeshdholakiya55/react-js-experts"
    );
    return false;
  };

  return (
    <UserContext.Provider value={{ handleOnClickCalendly }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default CalendlyContext;
