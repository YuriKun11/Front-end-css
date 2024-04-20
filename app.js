function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

// Function to copy a text inside the css class
function copyToClipboard(elementId) {
  var codeText = document.getElementById(elementId).innerText;
  var textarea = document.createElement("textarea");
  textarea.value = codeText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  // Create a toast message when the user copied the text
   var toast = document.createElement("div");
   toast.textContent = "Code copied to clipboard!";
   toast.classList.add("toast");
   document.body.appendChild(toast);
   toast.classList.add("show"); 
   setTimeout(function() {
     toast.classList.remove("show");
     toast.addEventListener("transitionend", function() {
       document.body.removeChild(toast);
     });
   }, 2000);
}

//Function that can scroll smoothly back to the top of the page.
//Refer the the css and html
var mybutton = document.getElementById("scrollToTopBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
