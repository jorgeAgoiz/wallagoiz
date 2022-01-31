export const getArticles = () => {
  /* global fetch */
  return fetch('http://localhost:3012/articles')
    .then(result => result.json())
    .catch(err => err)
}
/* Inutilizado de momento */
