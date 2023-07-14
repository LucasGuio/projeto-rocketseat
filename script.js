function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  /*   
    pegar a tag img e substituir a imagem, se tiver light mode, adicionar a imagem light, e se tiver sem light mode manter a imagem normal.
 */
  const img = document.querySelector("#profile img")
    if(html.classList.contains('light')) {
      img.setAttribute("src", "./assets/avatar.jpeg")
      img.setAttribute("alt", "Foto de Lucas Guio em preto e branco de oculos.")
  } else {
      img.setAttribute("src", "./assets/avatar.jpeg")
      img.setAttribute("alt", "Foto de Lucas Guio em preto e branco de oculos.")
  } 
 


}