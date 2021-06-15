import React from "react";
import { Link } from "react-router-dom";

const ChaperonRougeBook = () => (
  <div className="createProfilBookContainer">
    <Link
      to="/le_petit_chaperon_rouge"
      className="chaperon_rouge"
      type="button"
    >
      <p>Le petit</p> <p>chaperon</p> <p>rouge</p>
    </Link>
  </div>
);

export default ChaperonRougeBook;
