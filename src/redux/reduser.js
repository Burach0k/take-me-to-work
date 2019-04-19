export const initialState = {
  articles: [],
  count: 0,
  currentPage: 1,
  currentId: '',
  targetId: '',
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_ARTICLE':
      for (let i = 0; i < state.articles.length; i++) {
        if (state.articles[i].page === action.payload.page) return state;
      }

      return {
        ...state,
        articles: [...state.articles.concat(action.payload)],
        count: action.payload.count,
        currentPage: action.payload.page,
      };

    case 'CHANGE_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };

    case 'SET_ID':
      return {
        ...state,
        currentId: action.payload,
      };

    case 'TARGET_ID':
      return {
        ...state,
        targetId: action.payload,
      };

    case 'CHANGE_ARTICLSE_PAGE':
      const articles = state.articles;
      let lostArticle;

      articles.map((article) => {
        if (lostArticle === undefined) article.articles.unshift(action.payload);
        else article.articles.unshift(lostArticle);

        lostArticle = article.articles[article.articles.length - 1];

        article.articles.pop();
      });

      return {
        ...state,
        articles: [...articles],
      };

    case 'CHANGE_CURRENT_PAGE':
      const currentArticles = state.articles;

      currentArticles.map((articlePage, pageIndex) => {
        if (articlePage.page === action.payload.page) {
          articlePage.articles.map((article, inde, mas) => {
            if (article._id === action.payload.article._id) {
              mas[inde] = action.payload.article;
            }
          });
        }
      });

      return {
        ...state,
        articles: [...currentArticles],
      };

    default:
      return state;
  }
}
