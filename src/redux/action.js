export const changeAction = (post) => {
  return {
    type: 'CHANGE_TARGET_SECTION',
    payload: post,
  };
};
export const closeAction = (post) => {
  return {
    type: 'CLOSE_TARGET_SECTION',
    payload: post,
  };
};
