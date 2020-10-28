var card_category_list = document.getElementsByClassName(
    "card-category-list child"
);
var item = document.getElementsByClassName("card-category-list-item");
function toggle(t) {
    var display = t.parentElement.nextSibling.style.display;
    if (display == "none") {
        t.parentElement.nextSibling.style.display = "block";
        t.parentElement.nextSibling.style.height = "100%";
        t.className = t.className.replace("fas fa-caret-left", "fas fa-caret-down");
    } else {
        t.parentElement.nextSibling.style.display = "none";
        t.className = t.className.replace("fas fa-caret-down", "fas fa-caret-left");
    }
}

for (var i = 0; i < card_category_list.length; i++) {
    card_category_list[i].style.display = "none";
    card_category_list[i].style.transition = "all 1s";
    card_category_list[i].previousSibling.innerHTML +=
        '<i class="fa fas fa-caret-left menus-expand  menus-closed" aria-hidden="true" style="margin-left:20px;" onclick="toggle(this)"></i>';
}

