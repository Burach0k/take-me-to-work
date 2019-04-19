import React from 'react';
import TableOfArticles from '../../controlls/TableOfArticles/TableOfArticles';
import Pagintion from '../../controlls/Pagination/Pagination';
import AddArticle from '../../views/AddArticle/AddArticle';

const ArticlePage = (props) => (
  <div id='table-articles'>
    <AddArticle />
    <TableOfArticles location={props.location} />
    <Pagintion />
  </div>
);

export default ArticlePage;
