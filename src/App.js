import React from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";
import "./global/estilo.css";

const App = () => {
  const { githubState } = useGithub();

  function darkModo() {
    var dark = document.querySelector("body");
    var dt = new Date();
    var horas = dt.getHours();
    console.log(horas);
    if (horas <= 6 || horas >= 18) {
      dark.classList.add("dark");
    }
  }
  darkModo();
  return (
    <Layout>
      {githubState.hasUser ? (
        <main>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </main>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;
