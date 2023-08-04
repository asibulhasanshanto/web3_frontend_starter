import React from "react";
import useNotification from "../hooks/useNotification";
import Layout from "../components/Layout";
const Home = () => {
  const notification = useNotification();
  return (
    <Layout>
      Home
      <button
        onClick={() => {
          notification("test", "success");
        }}
        className="show_notification px-3 py-2 bg-black text-white"
      >
        button
      </button>
    </Layout>
  );
};

export default Home;
