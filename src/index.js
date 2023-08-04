import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { sepolia } from "wagmi/chains";
const ALCHEMY_ID = "ab63e207636043c7bae04e1beb6ddd1d";
const WALLETCONNECT_PROJECT_ID = "f6adbe04febb278b8d497cf6a75276de";
const chains = [sepolia];

const config = createConfig(
  getDefaultConfig({
    // autoConnect: true,
    // Required API Keys
    //alchemyId: process.env.ALCHEMY_ID, // or infuraId
    //walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,
    alchemyId: ALCHEMY_ID, // or infuraId
    walletConnectProjectId: WALLETCONNECT_PROJECT_ID,
    chains,
    // Required
    appName: "frs",

    // Optional
    // appDescription: "Your App Description",
    // appUrl: "https://family.co", // your app's url
    // appLogo: "https://family.co/logo.png", // your app's logo,no bigger than 1024x1024px (max. 1MB)
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
