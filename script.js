function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  /*   
    pegar a tag img e substituir a imagem, se tiver light mode, adicionar a imagem light, e se tiver sem light mode manter a imagem normal.
 */
  const img = document.querySelector("#profile img")
    if(html.classList.contains('light')) {
      img.setAttribute("src", "./assets/avatar-light.png")
      img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando oculos de sol e jaqueta preta com fundo degrade de roza para azul.")
  } else {
      img.setAttribute("src", "./assets/avatar-dark.png")
      img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando oculos e jaqueta preta com fundo degrade de roza para azul.")
  } 
 


}