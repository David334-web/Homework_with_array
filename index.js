listeItem = []

function additioner(){
    let item = document.getElementById("item").value
    listeItem.push(item)
    reset()
    imprimer()
}

function reset(){
    document.getElementById("item").value = ""
}

function imprimer(){
    document.getElementById("liste").innerText = listeItem.join(" / ")
}