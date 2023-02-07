import 'bootstrap/dist/css/bootstrap.css'
import "@@/css/style.css"
import "@@/css/responsive.css"  
// import "@@/css/fontawesome.min.css"

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
      offset: 120,
      delay: 0,
      duration: 800,

    });
  }, []);
  return <Component {...pageProps} />
}
