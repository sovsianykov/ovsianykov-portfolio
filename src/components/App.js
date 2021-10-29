import React from "react";
import Home from "pages/Home/Home";
import Modal from "components/Modal/Modal";
import Sidebar from "components/Sidebar/Sidebar";
import Layout from "../layout/layout";

function App() {
  return (
    <Layout>
        <Home />
        <Modal />
        <Sidebar />
    </Layout>
  );
}

export default App;
