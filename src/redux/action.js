export const saveAction = (post) => {
  return {
    type: 'SAVE_ARTICLE',
    payload: post,
  };
};

export const changePage = (post) => {
  return {
    type: 'CHANGE_PAGE',
    payload: post,
  };
};

export const setId = (post) => {
  return {
    type: 'SET_ID',
    payload: post,
  };
};

export const targetId = (post) => {
  return {
    type: 'TARGET_ID',
    payload: post,
  };
};

export const changeArticlesPage = (post) => {
  return {
    type: 'CHANGE_ARTICLSE_PAGE',
    payload: post,
  };
};

export const changeCurrentPage = (post) => {
  return {
    type: 'CHANGE_CURRENT_PAGE',
    payload: post,
  };
};
