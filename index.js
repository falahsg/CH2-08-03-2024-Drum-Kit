// // membuat fungsi handleClick
// function handleClick() {
//   console.log("woi");
// }

// mengambil elemen button
let drums = document.querySelectorAll(".drum");

// Membuat perulangan agar semua button terseleksi
for (let i = 0; i < drums.length; i++) {

  // menambahkan addEventListener saat click akan menjalankan fungsi anonym play audio
  drums[i].addEventListener("click", function () {
    let btnInnerHTML = this.innerHTML;
    makeSound(btnInnerHTML);
    buttonAnimation(btnInnerHTML)
 });
}

// menambahkan fungsi menekan tombol
document.addEventListener("keypress", function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
});

// membuat fungsi agar memunculkan suara dengan parameter key
function makeSound(key) {
    // menambahkan percabangan switch untuk setiap button
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();            
            break;
            
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();            
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();            
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();            
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();            
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();            
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();            
            break;
        default:
        alert ("tidak ada")
    }
}

// membuat fungsi untuk menambahkan animasi
function buttonAnimation (key){
    let activeBtn = document.querySelector("." + key)
    activeBtn.classList.add("pressed") /** menambahkan class pressed dari css */
    activeBtn.classList.add("white") /**menambahkan class white dari css */

    // membuat fungsi timeout agar mendelete animasi dan balik lagi seperti default css
    setTimeout(function () {
        // menghapus elemet yang sudah di tambahkan diatas
      activeBtn.classList.remove("pressed");
      activeBtn.classList.remove("white");
    }, 200 /** milisec timeout  */);
}
