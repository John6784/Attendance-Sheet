// pages/_app.js
import '../styles/global.css'; // Adjust the path as needed

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
