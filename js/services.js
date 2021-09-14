var modal = document.getElementById("description");
var btn = document.getElementById("serv");
var image = document.querySelectorAll('.imgModal');

image.forEach(img => {
  img.addEventListener('click', (e) => {
   
    var detail = e.path[1];
    console.log(e);
    modal.innerHTML = `<div class="modal-content">
      <span class="close">&times;</span>
      <p>${detail.textContent}</p>
    </div>`;
    
    modal.style.display = "block";
    
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      modal.style.display = "none";
    }
  })
})

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }