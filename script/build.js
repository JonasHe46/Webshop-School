    let shoppingCart = {};
    shoppingCart["Count"] = 1;
    shoppingCart["Product"] = {};
    shoppingCart["Product"]["Name"] = [];
    shoppingCart["Product"]["Price"] = [];
    shoppingCart["Price"] = [];
    
    function mainPage(d, catID) {
       //create elements
        let data = d;
        let htmlBody = document.getElementById("fT");
        let bootdeyDiv = document.createElement("div");
        let mainNavDiv  = document.createElement("div");

        //set attributes
        bootdeyDiv.classList.add("container");    
        bootdeyDiv.classList.add("bootdey"); 
        bootdeyDiv.setAttribute("id", "bootdeyDiv")
        mainNavDiv.classList.add("col-md-3");

        //append
        bootdeyDiv.appendChild(mainNavDiv);
        htmlBody.appendChild(bootdeyDiv);

        //call elementsß
        addSearch(mainNavDiv);
        addCategory(data, mainNavDiv, bootdeyDiv, catID);
        // addProducts(data, mainNavDiv);

        buildFooter();
      }

      function buildFooter() {
        let footer = document.createElement("footer");
        footer.classList.add("freshTekFooter");
        footer.setAttribute("id", "footer");
        let div = document.createElement("div");
        div.classList.add("container");
        let p = document.createElement("p");
        p.classList.add("m-0");
        p.classList.add("text-center");
        p.classList.add("text-white");
        p.innerHTML = "Fresh Tek";

        div.appendChild(p);
        footer.appendChild(div);
        document.getElementById("fT").appendChild(footer);
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

      function addCategory(data, mainNavDiv, bootdeyDiv, catID) {
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
         let id = "category" + categoryIDCounter;
         //set Attribute
         categoryI.classList.add("fa");
         categoryI.classList.add("fa-angle-right");
         categoryA.setAttribute("id", id);
         categoryA.classList.add("categorieSelect")
         categoryA.setAttribute("style", "cursor: pointer");
         //value
         categoryA.innerHTML = e + " ";

        //  categoryA.onclick = category;
        categoryA.addEventListener('click', function(){
          addProducts(data, id, bootdeyDiv);
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
       if(catID){
         let cat = "category" + catID;
        document.getElementById(cat).classList.add("active");
        addProducts(data, cat, bootdeyDiv);
       }else {
        document.getElementById("category1").classList.add("active");
        addProducts(data, "category1", bootdeyDiv);
       }
      }


      function addProducts(data, id, bootdeyDiv) {
        if(document.getElementById("cartMainDiv")) {
          switchCategory(id);
        }
        wipeCartDiv();


        let cartMainDiv = document.createElement("div");
        let cartPanelSelection = document.createElement("section");

        let cartDiv = document.createElement("div");

        cartPanelSelection.classList.add("panel");
        cartMainDiv.classList.add("col-md-9");
        cartMainDiv.setAttribute("id", "cartMainDiv");

        cartDiv.classList.add("row");
        cartDiv.classList.add("product-list");

       
        // console.log("data: ", data, " id: ", id)
      // console.log("click " + id)
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
          img.classList.add("productImg");
          // let a = document.createElement("a");
          // a.classList.add("adtocart");
          // a.setAttribute("href", "#");
          //  let i = document.createElement("i");
          //  i.classList.add("fa");
          //  i.classList.add("fa-shopping-cart");
           let div2 = document.createElement("div");
           div2.classList.add("panel-body");
           div2.classList.add("text-center");
           let h4 = document.createElement("h4");
           let a2 = document.createElement("a");
           a2.classList.add("pro-title");
           a2.innerHTML = productName;
           a2.setAttribute("style", "cursor:pointer")
           let p= document.createElement("a");
           p.classList.add("price");
           p.innerHTML = "$" + data["Artikel"]["A_Preis"][a_IDS];

           div.appendChild(img);
          //  a.appendChild(i);
          //  div.appendChild(a);
           section.appendChild(div);
           h4.appendChild(a2);
           div2.appendChild(h4);
           div2.appendChild(p);
           section.appendChild(div2);
           rowDiv.appendChild(section);
           cartDiv.appendChild(rowDiv);

            //on Product click
           a2.addEventListener('click', function(){
            showProduct(data, a_IDS, bootdeyDiv, productName);
        });
        }
      })


      cartMainDiv.appendChild(cartPanelSelection);
      cartMainDiv.appendChild(cartDiv);
  
  
        bootdeyDiv.appendChild(cartMainDiv);
      }

      
      function switchCategory(id) {
        document.querySelectorAll(".categorieSelect").forEach(function (categorie) {
          if (categorie.getAttribute("class").indexOf('active') > -1) {
            document.getElementById(categorie.getAttribute("id")).classList.remove("active");
          } 
        });
        document.getElementById(id).classList.add("active");
      }

     function showProduct(data, a_IDS, bootdeyDiv, productName) {
        wipeBootdeyDiv();
        let productSection = document.createElement("section");
        productSection.classList.add("mb-5");
        let productMainRowDiv = document.createElement("div");
        productMainRowDiv.classList.add("row");
        let productColDiv = document.createElement("div");
        productColDiv.classList.add("col-md-6");
        productColDiv.classList.add("mb-4");
        productColDiv.classList.add("mb-md-0");
        let lightboxDivUi = document.createElement("div");
        lightboxDivUi.setAttribute("id", "mdb-lightbox-ui");
        let lightboxDiv = document.createElement("div");
        lightboxDiv.classList.add("mdb-lightbox");
        let productGalleryDiv = document.createElement("div");
        productGalleryDiv.classList.add("row");
        productGalleryDiv.classList.add("product-gallery");
        productGalleryDiv.classList.add("mx-1");
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        img.setAttribute("alt", productName);
        img.setAttribute("src", "img/" + productName + ".png")
        img.classList.add("img-fluid");
        img.classList.add("z-depth-1");
        img.classList.add("maxWidth");
        //append img
        figure.appendChild(img);
        productGalleryDiv.appendChild(figure);
        lightboxDivUi.appendChild(productGalleryDiv);
        lightboxDivUi.appendChild(lightboxDiv);
        productColDiv.appendChild(lightboxDivUi);
        productMainRowDiv.appendChild(productColDiv);
        

        let textDiv = document.createElement("div");
        textDiv.classList.add("col-md-6");
        let title = document.createElement("h3");
        title.classList.add("mb-2");
        title.classList.add("text-uppercase");
        title.classList.add("extra-large");
        title.classList.add("font-weight-bold"); 
        title.classList.add("cart-title"); 
        title.innerHTML = productName;
        let priceP = document.createElement("p");
        let priceSpan = document.createElement("span");
        priceSpan.classList.add("mr-1");
        let PriceStrong = document.createElement("strong");
        PriceStrong.innerHTML = "$" + data["Artikel"]["A_Preis"][a_IDS];
        let descriptionP = document.createElement("p");
        descriptionP.classList.add("pt-1");
        descriptionP.innerHTML = data["Artikel"]["A_Beschreibung"][a_IDS];
        let hr = document.createElement("hr");
        let button = document.createElement("button");
        
        button.setAttribute("type", "button");
        button.classList.add("btn");
        button.classList.add("btn-primary");
        button.classList.add("btn-md");
        button.classList.add("mr-1");
        button.classList.add("mb-2");
        button.innerHTML = "Add to cart";
        let arrowLeftBtn = document.createElement("button");
        let arrowLeftI = document.createElement("span");
        arrowLeftI.classList.add("glyphicon");
        arrowLeftI.classList.add("glyphicon-arrow-left");
        // arrowLeftI.classList.add("bi-lg");
        
     
    
      //   <div class="d-flex justify-content-between align-items-center mb-3">
      //   <h5 class="card-title mb-0">Card title</h5>
      //   <button type="button" class="btn btn-success">Primary</button>
      // </div>



        arrowLeftBtn.appendChild(arrowLeftI);
        textDiv.appendChild(arrowLeftBtn);
        textDiv.appendChild(title)
        textDiv.appendChild(priceP);
        priceP.appendChild(priceSpan);
        priceSpan.appendChild(PriceStrong);
        textDiv.appendChild(descriptionP);
        textDiv.appendChild(hr);
        textDiv.appendChild(button);
        
        productMainRowDiv.appendChild(textDiv);
        productSection.appendChild(productMainRowDiv);
        bootdeyDiv.appendChild(productSection);

        arrowLeftBtn.addEventListener('click', function(){
          goBack(data, bootdeyDiv, a_IDS)
        });

        button.addEventListener('click', function(){
          addToShoppingCart(data, a_IDS, bootdeyDiv);
        });
      }

      function addToShoppingCart(data, a_IDS, bootdeyDiv) {
        if(document.getElementById("cartCount")) {
          shoppingCart["Count"]++;
          // console.log("Test: ",shoppingCart["Price"])
          shoppingCart["Price"].push(parseFloat(data["Artikel"]["A_Preis"][a_IDS]));
          document.getElementById("cartCount").innerHTML = shoppingCart["Count"];
        }else {
          let shoppingCartLi = document.getElementById("shoppingCartLi");
          //  <span class='badge badge-warning' id='lblCartCount'> 2 </span><
          let number = document.createElement("span");
          number.classList.add("badge");
          number.classList.add("badge-warning");
          number.setAttribute("id", "cartCount");
          number.classList.add("d-flex")
          number.innerHTML = shoppingCart["Count"];
          shoppingCartLi.appendChild(number);
          document.getElementById("shoppingCart").classList.remove("sC3");
          document.getElementById("shoppingCart").classList.add("sC2");
          shoppingCart["Price"].push(parseFloat(data["Artikel"]["A_Preis"][a_IDS]));

          document.getElementById("shoppingCart").addEventListener('click', function(){
            shoppingCartView(bootdeyDiv, data);
          });
        }
        shoppingCart["Product"]["Name"].push(data["Artikel"]["A_Name"][a_IDS]);
        shoppingCart["Product"]["Price"].push(data["Artikel"]["A_Preis"][a_IDS]);
        
      }

      function shoppingCartView(bootdeyDiv, data) {
        wipeBootdeyDiv();
        let mainCardDiv = document.createElement("div");
        mainCardDiv.classList.add("card");
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        rowDiv.setAttribute("style", "background-color: #ddd;");
        let colDiv = document.createElement("div");
        colDiv.classList.add("col-md-8");
        colDiv.classList.add("cart");
        let titleDiv = document.createElement("div");
        let titleColDiv = document.createElement("div");
        titleColDiv.classList.add("col")
        let titleRowDiv = document.createElement("div");
        titleRowDiv.classList.add("row");
        let titleh4 = document.createElement("h4");
        let title = document.createElement("b");
        title.innerHTML = "Shopping Cart";
        let generalCountDiv = document.createElement("div");
        generalCountDiv.classList.add("col");
        generalCountDiv.classList.add("align-self-center");
        generalCountDiv.classList.add("text-right");
        generalCountDiv.classList.add("text-muted");
        generalCountDiv.innerHTML = shoppingCart["Count"] + " Items"

        titleh4.appendChild(title);
        titleColDiv.appendChild(titleh4);
        titleRowDiv.appendChild(titleColDiv);
        titleRowDiv.appendChild(generalCountDiv);

        let backToShop = document.createElement("div");
        backToShop.classList.add("back-to-shop");
        let backToShopBtn = document.createElement("button");
        let backToShopI = document.createElement("span");
        backToShopI.classList.add("glyphicon");
        backToShopI.classList.add("glyphicon-arrow-left");

        backToShopBtn.appendChild(backToShopI);
        let backToShopSpan = document.createElement("span");
        backToShopSpan.classList.add("text-muted");
        backToShopSpan.innerHTML = " Back to shop";
        backToShop.appendChild(backToShopBtn);
        backToShop.appendChild(backToShopSpan);

 

        colDiv.appendChild(backToShop);
        colDiv.appendChild(titleRowDiv);
        
        titleDiv.appendChild(colDiv);
        rowDiv.appendChild(titleDiv);
       
        // console.log(shoppingCart["Product"]["Name"])
        Object.keys(shoppingCart["Product"]["Name"]).forEach(e => {
          // console.log("e: ", shoppingCart["Product"]["Name"][e]);
          let ProductRowDiv = document.createElement("div");
          ProductRowDiv.classList.add("row");
          ProductRowDiv.setAttribute("style", "display: flex;")
          let rowMainAlignDiv = document.createElement("div");
          rowMainAlignDiv.classList.add("row");
          rowMainAlignDiv.classList.add("main");
          rowMainAlignDiv.classList.add("align-items-center");
          let imgDiv = document.createElement("div");
          imgDiv.classList.add("col-md-5");
          let img = document.createElement("img");
          img.setAttribute("alt", shoppingCart["Product"]["Name"][e]);
          img.setAttribute("src", "img/" + shoppingCart["Product"]["Name"][e] + ".png");
          img.classList.add("img-fluid");
          // img.classList.add("z-depth-1");
          img.classList.add("maxWidth2");
          let titleDiv = document.createElement("div");
          titleDiv.classList.add("col-md-5");
          titleDiv.classList.add("align-items-center");
          let title = document.createElement("div");
          title.classList.add("row");
          title.innerHTML = shoppingCart["Product"]["Name"][e];
          let priceDiv = document.createElement("div");
          priceDiv.classList.add("col-md-2");
          priceDiv.classList.add("align-items-center");
          priceDiv.innerHTML = "$" + shoppingCart["Product"]["Price"][e];
          
          // eventuell delete
          // let priceSpan = document.createElement("span");
        
        
          imgDiv.appendChild(img);
          titleDiv.appendChild(title);
          rowMainAlignDiv.appendChild(imgDiv);
          rowMainAlignDiv.appendChild(titleDiv);
          rowMainAlignDiv.appendChild(priceDiv);
          ProductRowDiv.appendChild(rowMainAlignDiv);
          colDiv.appendChild(ProductRowDiv);
        })
        const totalPriceConst = shoppingCart["Price"].reduce((partial_sum, a) => partial_sum + a,0); 
    

        let summaryDiv = document.createElement("div");
        summaryDiv.classList.add("col-md-4");
        summaryDiv.setAttribute("style", "background-color: #ddd");
        summaryDiv.classList.add("summary");
        let summaryTitleDiv = document.createElement("div");
        let summaryTitleH5 = document.createElement("h1");
        let summaryTitleBr = document.createElement("h1");
        summaryTitleBr.innerHTML = "Summary";
        let summaryHr = document.createElement("hr");
        let summaryPriceRowDiv = document.createElement("div");
        summaryPriceRowDiv.classList.add("row");
        let summaryItemDiv = document.createElement("div");
        summaryItemDiv.classList.add("col");
        summaryItemDiv.setAttribute("style", "padding-left:0");
        summaryItemDiv.innerHTML = "ITEMS " + shoppingCart["Count"];
        let summaryPriceDiv = document.createElement("div");
        summaryPriceDiv.classList.add("col");
        summaryPriceDiv.setAttribute("style", "padding-left:0");
        // summaryPriceDiv.classList.add("text-right");
        summaryPriceDiv.innerHTML = "$" + totalPriceConst;
        let shippingForm = document.createElement("form");
        let shippingP = document.createElement("p");
        shippingP.innerHTML = "SHIPPING";
        let shippingSelect = document.createElement("select");
        let selectOption = document.createElement("option");
        selectOption.classList.add("text-muted");
        selectOption.innerHTML = "Standard-Delivery $0.00";

        let checkoutDiv = document.createElement("div");
        checkoutDiv.classList.add("row");
        checkoutDiv.setAttribute("style", "border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;");
        let totalPriceDiv = document.createElement("div");
        totalPriceDiv.classList.add("col");
        totalPriceDiv.innerHTML = "TOTAL PRICE";
        let totaPrice = document.createElement("div");
        totaPrice.classList.add("col");
        totalPriceDiv.classList.add("text-left");
        // console.log(shoppingCart["Price"])
        totaPrice.innerHTML = "$" + totalPriceConst;
        let checkoutBtn = document.createElement("button");
        checkoutBtn.classList.add("btnCart");
        checkoutBtn.innerHTML = "CHECKOUT";
      


        // shippingSelect.appendChild(selectOption);
        // shippingForm.appendChild(shippingP);
        // shippingForm.appendChild(shippingSelect);
        // summaryDiv.appendChild(shippingForm);

        summaryTitleH5.appendChild(summaryTitleBr);
        summaryTitleDiv.appendChild(summaryTitleH5);
        summaryDiv.appendChild(summaryTitleDiv);
        summaryDiv.appendChild(summaryHr);
        summaryPriceRowDiv.appendChild(summaryItemDiv);
        summaryPriceRowDiv.appendChild(summaryPriceDiv);
        summaryDiv.appendChild(summaryPriceRowDiv);
   
        shippingForm.appendChild(shippingP);
        shippingSelect.appendChild(selectOption);
        shippingForm.appendChild(shippingSelect)
        summaryDiv.appendChild(shippingForm);
       
        checkoutDiv.appendChild(totalPriceDiv);
        checkoutDiv.appendChild(totaPrice);
        summaryDiv.appendChild(checkoutDiv);
        
        
     
        summaryDiv.appendChild(checkoutBtn);
        rowDiv.appendChild(summaryDiv);
        mainCardDiv.appendChild(rowDiv);
        
        document.getElementById("bootdeyDiv").appendChild(mainCardDiv);

        checkoutBtn.addEventListener("click", function() {
          // console.log(shoppingCart["Product"])
          $.ajax({
            url: '/webshop/script/sendData.php',
            type: "POST",
            data: {data:shoppingCart["Product"]},
            success: function(data) {
//               <div class="jumbotron text-center">
//   <h1 class="display-3">Thank You!</h1>
//   <p class="lead"><strong>Please check your email</strong> for further instructions on how to complete your account setup.</p>
//   <hr>
//   <p>
//     Having trouble? <a href="">Contact us</a>
//   </p>
//   <p class="lead">
//     <a class="btn btn-primary btn-sm" href="https://bootstrapcreative.com/" role="button">Continue to homepage</a>
//   </p>
// </div>
//              
   
              if(data == "false") {
                mainCardDiv.innerHTML = "";
                let confirmationDiv = document.createElement("div");
                confirmationDiv.setAttribute("style", "background-color: white");
                confirmationDiv.classList.add("jumbotron");
                confirmationDiv.classList.add("text-center");
                let confirmationH1 = document.createElement("h1");
                confirmationH1.classList.add("display-3");
                confirmationH1.innerHTML = "Ups... something went wrong";
                let confirmationP = document.createElement("p");
                confirmationP.innerHTML = "Please login first 🙂";
                confirmationH1.setAttribute("style", "color: black");
                confirmationP.setAttribute("style", "color: black");
                let buttonP = document.createElement("p");
                let buttonA = document.createElement("a");
                buttonP.classList.add("lead");
                buttonA.classList.add("btn");
                buttonA.classList.add("btn-primary");
                buttonA.classList.add("btn-sm");
                buttonA.setAttribute("role", "button");
                buttonA.innerHTML = "Click here to login :)";
                buttonA.setAttribute("href", "login.html");
                confirmationDiv.appendChild(confirmationH1);
                confirmationDiv.appendChild(confirmationP);
                buttonP.appendChild(buttonA);
                confirmationDiv.appendChild(buttonP);
                mainCardDiv.appendChild(confirmationDiv);
                // buttonA.addEventListener("click", function() {

                // })

              }
              if(data.substring(0,4) == "true") {
                mainCardDiv.innerHTML = "";
                let confirmationDiv = document.createElement("div");
                confirmationDiv.setAttribute("style", "background-color: white");
                confirmationDiv.classList.add("jumbotron");
                confirmationDiv.classList.add("text-center");
                let confirmationH1 = document.createElement("h1");
                confirmationH1.classList.add("display-3");
                confirmationH1.innerHTML = "Thank You";
                let confirmationP = document.createElement("p");
                confirmationP.innerHTML = "Yay, thank you for your order. We will take care that your package will be with you as soon as possible 🙂";
                let buttonP = document.createElement("p");
                let buttonA = document.createElement("a");
                confirmationH1.setAttribute("style", "color: black");
                confirmationP.setAttribute("style", "color: black");
                buttonP.classList.add("lead");
                buttonA.classList.add("btn");
                buttonA.classList.add("btn-primary");
                buttonA.classList.add("btn-sm");
                buttonA.setAttribute("role", "button");
                buttonA.innerHTML = "Continue shopping";
                buttonA.setAttribute("href", "index.php");

                confirmationDiv.appendChild(confirmationH1);
                confirmationDiv.appendChild(confirmationP);
                buttonP.appendChild(buttonA);
                confirmationDiv.appendChild(buttonP);
                mainCardDiv.appendChild(confirmationDiv);

                // buttonA.addEventListener("click", function() {
                //   goBack(data, bootdeyDiv);
                // })
              }
            }
          })
        });

        backToShopBtn.addEventListener('click', function(){
          goBack(data, bootdeyDiv);
        });
      }

    
      function goBack(data, bootdeyDiv, a_IDS) {
          document.getElementById("footer").remove();
  
          document.getElementById("bootdeyDiv").remove();
          // console.log(this.parentElement)
          mainPage(data, data["Artikel"]["A_KategorieID"][a_IDS]);
      }


      function wipeCartDiv() {
        if(document.getElementById("cartMainDiv")) {
          document.getElementById("cartMainDiv").remove();
          
        }
      }

      function wipeBootdeyDiv() {
        if(document.getElementById("bootdeyDiv")) {
          document.getElementById("bootdeyDiv").innerHTML = "";
        }
      }

      // Element.prototype.remove = function() {
      //   this.parentElement.removeChild(this);
    // }
    // NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    //     for(var i = this.length - 1; i >= 0; i--) {
    //         if(this[i] && this[i].parentElement) {
    //             this[i].parentElement.removeChild(this[i]);
    //         }
    //     }
    // }


      export { mainPage };