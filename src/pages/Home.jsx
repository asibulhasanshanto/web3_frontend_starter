import React from "react";
import useNotification from "../hooks/useNotification";
import Layout from "../components/Layout";
const Home = () => {
  const notification = useNotification();

  return (
    <Layout>
      <div className="container py-10 ">
        <div className="search_and_connect_button py-5 flex items-center justify-between">
          <div className="search_holder">searchh</div>
          <button>Connect wallet</button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
