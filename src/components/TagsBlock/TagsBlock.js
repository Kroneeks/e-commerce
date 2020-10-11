import React from "react";
import { Link } from 'react-router-dom';

import "./TagsBlock.css";

const TagsBlock = (props) => {
  const { tags } = props;

  return (
    <div className="tags-block">
      <p className="tags-block__title">Подборки</p>
      <ul className="tags-block__body">
        {tags.map((tag, idx) => {
          return (
            <li className="tags-block__item" key={idx}>
              <Link to={`/catalog/${tag.id}`}>{tag.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TagsBlock;
