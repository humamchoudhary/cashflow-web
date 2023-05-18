import "../styles/globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "../data/user";
const URL = "http://192.168.8.128:5000/";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main className={`${inter.variable} font-sans overflow-hidden h-screen`}>
        <Component {...pageProps} />;
      </main>
    </Provider>
  );
}
