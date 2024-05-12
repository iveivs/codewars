fetch(`https://swapi.dev/api/films/${id}/`).then(function (movies) {
  renderList(movies)
})
