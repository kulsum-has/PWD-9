let aktif = false;
function UbahLampu(){
    let gambar = document.getElementById("glampu");
    let tombol = document.getElementById("tombol");

    if (aktif==false){
        gambar.src="./img/on.png";
        tombol.innerText="Matikan Lampu";
    }else{
        gambar.src="./img/of.png";
        tombol.innerText="Nyalakan Lampu";
    }
    aktif=!aktif
}