import React from "react";
import PropTypes from 'prop-types';

export const Article = ({title, order, children, className}) => {

  let classNames = 'col tile article';
  if (order) {
    classNames += ' i' + order;
  }
  if (className) {
    classNames += ' ' + className;
  }

  return (
    <article className={classNames}>
      {(title) && <h2>{title}</h2>}
      <div>
        {children}
      </div>
    </article>
  )
}

Article.propTypes = {
  title: PropTypes.string.isRequired
};