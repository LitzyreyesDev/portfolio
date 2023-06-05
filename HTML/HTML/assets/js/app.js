document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelectorAll(".fas.fa-search-plus");
  search.forEach((el) => {
    el.addEventListener("click", (evt) => {
      setTimeout(() => {
        const div = document.createElement("div");
        const id = evt.target.parentElement.getAttribute("id");
        let flag = false;
        if (id === "dash_centro") {
          div.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/9fZ4UmGtyFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
          flag = true;
        }
        if (id === "unicornio") {
          div.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/P_YguAhiXWQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
          flag = true;
        }
        if (id === "dash_unicornio") {
          div.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Me9hPZtEVyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
          flag = true;
        }
        //https://youtu.be/CSdXUdpt7i0
        if (id === "centro") {
          div.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/IZsVF4qpVrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
          flag = true;
        }
        if(id === "spa"){
          div.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/CSdXUdpt7i0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
          flag = true;
        }
        if(id === "non-material"){
          div.innerHTML = `<img src="./assets/images/Portfolio/Ncm_app.png" alt="spa" width="100%" height="100%">`;
          flag = true;
        }
        if(id === "eboard"){
          div.innerHTML = `<img src="./assets/images/Portfolio/eboard.png" alt="spa" width="100%" height="100%">`;
          flag = true;
        }
        if(id === "novelas"){
          div.innerHTML = `<img src="./assets/images/Portfolio/tvnovelas.png" alt="spa" width="100%" height="100%">`;
          flag = true;
        }

        if (flag) {
          const modal = document.querySelector(".modal");
          const modalParent = modal.parentElement;
          modal.appendChild(div);
          modalParent.classList.add("modal-seen");
          modalParent.addEventListener("click", (evt) => {
            modalParent.classList.remove("modal-seen");
            while (modal.firstChild) {
              modal.firstChild.remove();
            }
          });
        }
      }, 100);
    });
  });
});
