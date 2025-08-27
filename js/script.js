// Script Search Menu
const searchInput = document.getElementById("search");
const menuItems = document.querySelectorAll("#menu li");

searchInput.addEventListener("keyup", function() {
  let filter = searchInput.value.toLowerCase();
  menuItems.forEach(item => {
    let text = item.textContent.toLowerCase();
    if (text.includes(filter)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

// side bar
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleSidebar");
  const sidebar = document.querySelector(".sidebar"); // pake class, bukan id
  const content = document.querySelector(".content");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hide");   // sesuai CSS
    content.classList.toggle("expand"); // bikin tambahan class untuk full
  });
});
