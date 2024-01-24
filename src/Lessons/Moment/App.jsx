import React, { useState, useEffect } from "react";
import axios from "axios";
import AddProduct from "./AddProduct/AddProduct";
import Posts from "./Posts/Posts";
import ArchivedData from "./ArchivedData";

const DB_URL = import.meta.env.VITE_DB_URL;
const DB_URL_ARCHIVE = import.meta.env.VITE_DB_URL_ARCHIVE;

import "./App.scss";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [showArchived, setShowArchived] = useState(false);

  const archivePost = (postId) => {
    axios.get(`${DB_URL}/${postId}`).then((res) => {
      axios.post(DB_URL_ARCHIVE, res.data).then(() => {
        console.log("Archiving complete");
        axios.delete(`${DB_URL}/${postId}`).then(() => {
          refreshPosts();
        });
      });
    });
  };

  const refreshPosts = () => {
    axios(DB_URL)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    refreshPosts();
  }, []);

  const toggleArchived = () => {
    setShowArchived(!showArchived);
  };

  return (
    <div className="grid">
      <div className="grid__form">
        <AddProduct onPostSubmit={refreshPosts} />
      </div>
      <div className="grid__products">
        {showArchived ? (
          <ArchivedData />
        ) : (
          <Posts posts={posts} onArchive={archivePost} />
        )}
      </div>
      <div className="grid__archive">
        <button onClick={toggleArchived}>Show Archived</button>
      </div>
    </div>
  );
}
