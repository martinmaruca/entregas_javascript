export default function carroLista(panelbtn, panel) {
  const d = document;

  d.addEventListener("click",e => {
    if(e.target.matches(panelbtn)){ 
        d.querySelector(panel).classList.toggle("is-active");
  }    
});
}