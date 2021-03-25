
    function mainPage(d) {
       //create elements
        let data = d;
        let htmlBody = document.getElementById("fT");
        let bootdeyDiv = document.createElement("div");
        let mainNavDiv  = document.createElement("div");

        //set attributes
        bootdeyDiv.classList.add("container");    
        bootdeyDiv.classList.add("bootdey"); 
        mainNavDiv.classList.add("col-md-3");

        //append
        bootdeyDiv.appendChild(mainNavDiv);
        htmlBody.appendChild(bootdeyDiv);

        //call elementsß
        addSearch(mainNavDiv);
        addCategory(data, mainNavDiv, bootdeyDiv);
        addProducts(data, mainNavDiv);

  
      }


      function addSearch(mainNavDiv) {
         //create elements
        let searchSection = document.createElement("section");
        let searchDiv = document.createElement("div");
        let searchInput = document.createElement("input");

        //search Attribute
        searchSection.classList.add("panel");
        searchDiv.classList.add("panel-body");
        searchInput.setAttribute("type", "text"); 
        searchInput.setAttribute("placeholder", "Keyword Search");
        searchInput.classList.add("form-control");

        //append search
        searchDiv.appendChild(searchInput)
        searchSection.appendChild(searchDiv);
        mainNavDiv.appendChild(searchSection);
      }

      function addCategory(data, mainNavDiv, bootdeyDiv) {
       //create elements
       let categorySection = document.createElement("section");
       let categoryHeader = document.createElement("header");
       let categoryDiv = document.createElement("div");
       let categoryUl = document.createElement("ul");
 
       //category Attributes
       categorySection.classList.add("panel");
       categoryHeader.classList.add("panel-heading");
       categoryDiv.classList.add("panel-body");
       categoryUl.classList.add("nav");
       categoryUl.classList.add("prod-cat");

       // category values
       categoryHeader.innerHTML = "Categorie";
       let categoryIDCounter = 1;

       //loop through data
       Object.values(data["Kategorie"]["KategorieName"]).forEach(e => {
         let categoryLi = document.createElement("li");
         let categoryA = document.createElement("a");
         let categoryI = document.createElement("i");
         let id = "category" + categoryIDCounter
         //set Attribute
         categoryI.classList.add("fa");
         categoryI.classList.add("fa-angle-right");
         categoryA.setAttribute("id", id);
         categoryA.setAttribute("style", "cursor: pointer");
         //value
         categoryA.innerHTML = e + " ";

        //  categoryA.onclick = category;
        categoryA.addEventListener('click', function(){
          category(data, id, bootdeyDiv);
      });
         //append
         categoryA.appendChild(categoryI);
         categoryLi.appendChild(categoryA);
         categoryUl.appendChild(categoryLi);
         categoryIDCounter++;
       })
 
       //append category
       categoryDiv.appendChild(categoryUl);
       categorySection.appendChild(categoryHeader);
       categorySection.appendChild(categoryDiv);
       mainNavDiv.appendChild(categorySection);
 
       //set first category selected
       document.getElementById("category1").classList.add("active");
      }


      function addProducts(data, mainNavDiv) {

   
         
        // switchCategory()

        Object.keys(data["Artikel"]["A_IDS"]).forEach(a_IDS => {
          // console.log(a_IDS)

          //das sind die Kategorien
          // console.log(data["Artikel"]["A_KategorieID"][a_IDS]);
      

        })
      }

      function switchCategory() {
        console.log("function switch category")
      }

      function category(data, id, bootdeyDiv) {
        let cartMainDiv = document.createElement("div");
        let cartPanelSelection = document.createElement("section");

        let cartDiv = document.createElement("div");

        cartPanelSelection.classList.add("panel");
        cartMainDiv.classList.add("col-md-9");

        cartDiv.classList.add("row");
        cartDiv.classList.add("product-list");


        // console.log("data: ", data, " id: ", id)
        console.log("click")
        Object.keys(data["Artikel"]["A_IDS"]).forEach(a_IDS => {
          if(id.substring(8) == data["Artikel"]["A_KategorieID"][a_IDS]) {
            // console.log("this id: ", id.substring(8))
            // console.log("A_IDS: ", a_IDS)
            // console.log(data["Artikel"]["A_Name"][a_IDS])
            let rowDiv = document.createElement("div");
            rowDiv.classList.add("col-md-4");
            let productName = data["Artikel"]["A_Name"][a_IDS]
            let section = document.createElement("section");
            section.classList.add("panel");
            let div = document.createElement("div");
            div.classList.add("pro-img-box");
            let img = document.createElement("img");
            img.setAttribute("alt", productName);
            img.setAttribute("src", "img/" + productName + ".png")
            let a = document.createElement("a");
            a.classList.add("adtocart");
            a.setAttribute("href", "#");
             let i = document.createElement("i");
             i.classList.add("fa");
             i.classList.add("fa-shopping-cart");
             let div2 = document.createElement("div");
             div2.classList.add("panel-body");
             div2.classList.add("text-center");
             let h4 = document.createElement("h4");
             let a2 = document.createElement("a");
             a2.classList.add("pro-title");
             a2.innerHTML = productName;
             let p= document.createElement("a");
             p.classList.add("price");
             p.innerHTML = "$" + data["Artikel"]["A_Preis"][a_IDS];

             div.appendChild(img);
             a.appendChild(i);
             div.appendChild(a);
             section.appendChild(div);
             h4.appendChild(a2);
             div2.appendChild(h4);
             div2.appendChild(p);
             section.appendChild(div2);
             rowDiv.appendChild(section);
             cartDiv.appendChild(rowDiv);
          }
        })


        cartMainDiv.appendChild(cartPanelSelection);
        cartMainDiv.appendChild(cartDiv);
        bootdeyDiv.appendChild(cartMainDiv);
      }
      export { mainPage };