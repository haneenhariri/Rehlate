import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout/Layout.tsx";
import App from "./App.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <Layout>
        <App />
      </Layout>
    </I18nextProvider>
  </StrictMode>
);
