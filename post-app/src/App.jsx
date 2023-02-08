import { useState } from 'react';
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function showModalHandler() {
    setIsModalVisible(true);
  }

  function hideModalHandler() {
    setIsModalVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={isModalVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
