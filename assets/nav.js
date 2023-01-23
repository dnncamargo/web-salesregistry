console.log("nav.js");

/** Função acionada pelo onclick em ../index.html */

function loadHtml(id, filename){
    console.log(`div id: ${id}, filename: ${filename}`);
    let xhttp;
    let element = document.getElementById(id);
    let file = filename;

    if(file){
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4) {
                if(this.status == 200) {element.innerHTML = this.responseText; }
                if(this.status == 404) {element.innerHTML = "<div>Página não encontrada!</div>" }
            }
        }
        xhttp.open("GET", `public/${file}`, true);
        xhttp.send();

        loadJS("./assets/viacep.js", true);

        return;
    }
}

function loadJS(FILE_URL, async = true) {
    let scriptEle = document.createElement("script");
  
    scriptEle.setAttribute("src", FILE_URL);
    scriptEle.setAttribute("type", "text/javascript");
    scriptEle.setAttribute("async", async);
  
    document.body.appendChild(scriptEle);
  }