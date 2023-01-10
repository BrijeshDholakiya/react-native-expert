import "../styles/globals.css";
import CalendlyContext from "../constants/Context/Calendly-Context";

function MyApp({ Component, pageProps }) {
  return (
    <CalendlyContext>
      <Component {...pageProps} />
    </CalendlyContext>
  );
}

export default MyApp;
