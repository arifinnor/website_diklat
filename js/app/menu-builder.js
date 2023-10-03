$(document).ready(function () {
    
    let menuList = [];
    $.ajax({
        url: 'js/app/data-master.json',
        dataType: 'json',
        success: function (data) {
            // Simpan data dalam variabel
            menuList = data.data;
            let navbarElement = document.getElementById("navbarMenu");
            buildMenu(menuList, navbarElement);

        }
    });


    function buildMenu(menuData, parentElement) {
        let ul = document.createElement("ul");
        ul.classList.add("nav", "navbar-nav", "navbar-right", "main-nav");

        for (let i = 0; i < menuData.length; i++) {
            let menuItem = menuData[i];
            let li = document.createElement("li");
            let div = document.createElement("div");
            div.classList.add("dropdown");
            let a = document.createElement("a");
            a.href = menuItem.url;
            a.innerHTML = menuItem.label;

            div.appendChild(a);

            if (menuItem.submenu && menuItem.submenu.length > 0) {
                let submenuDiv = document.createElement("div");
                submenuDiv.classList.add("dropdown-menu");

                for (let j = 0; j < menuItem.submenu.length; j++) {
                    let submenuItem = menuItem.submenu[j];
                    let submenuA = document.createElement("a");
                    submenuA.classList.add("dropdown-item");
                    submenuA.href = submenuItem.url;
                    submenuA.innerHTML = submenuItem.label;
                    submenuDiv.appendChild(submenuA);
                }

                div.appendChild(submenuDiv);
            }

            li.appendChild(div);
            ul.appendChild(li);
        }

        parentElement.appendChild(ul);
    }

});