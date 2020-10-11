import React from "react";
import { Link } from "react-router-dom";
import "./ConceptCatalog.css";

const ConceptionCatalog = (props) => {
  const { title, children, id, catalog, colored } = props;
  return (
    <Link to={catalog ? `/catalog/${id}` : `/products/${id}`}>
      <div className={`concept-block ${colored ? "colored" : ""}`}>
        <h3 className="concept-block__title">{title}</h3>
        {children}
      </div>
    </Link>
  );
};

export default ConceptionCatalog;
