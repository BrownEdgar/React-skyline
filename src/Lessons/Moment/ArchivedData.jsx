import React, { useState, useEffect } from "react";
import axios from "axios";

const DB_URL_ARCHIVE = import.meta.env.VITE_DB_URL_ARCHIVE;

export default function ArchivedData() {
  const [archivedTitles, setArchivedTitles] = useState([]);

  useEffect(() => {
    axios(DB_URL_ARCHIVE)
      .then((res) => {
        const titles = res.data.map((item) => item.title);
        setArchivedTitles(titles);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Archived Titles:</h2>
      <ul>
        {archivedTitles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
