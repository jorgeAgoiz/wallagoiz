/*
    Algunas anotaciones acerca de esta llamada:
        - Cuando el backend este implementado, en caso de estar el usuario autenticado la llamada se realizara pasandole por parametro
        la localización del usuario y se mostraran ordenadamente los mas cercanos y luego los mas lejanos
        - En caso de no estar autenticado se llamaran por más recientes a menos recientes.
*/

export const getArticles = () => {
  /* global fetch */
  return fetch('http://localhost:3012/articles')
    .then(result => result.json())
    .catch(err => err)
}
