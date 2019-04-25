import React from "react";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Content from "./components/content/content.js";
import List from "./components/list/list.js";

const App = () => {
  return (
    <>
      {/* <Header title="React Design" />
      <Content />
      <Footer>
        <div>&copy; 2018 Code Fellows</div>
      </Footer> */}
      <List items={[2, 1, 1, 3, "I like good trees"]} type="ordered" />
      ------------------------------------------------------------------------
      <List items={[2, 1, 1, 3, "I like good trees"]} type="unordered" />
    </>
  );
};

export default App;
