/*----MENU DESPEGABLE----*/
$(document).ready(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
  });

  /*----CARRITO---*/
  //Productos
  /*---Agregar al carrito---*/

  const agregarCarrito = document.querySelectorAll(".agregar-carrito"); // Botón "Agregar al carrito"

  agregarCarrito.forEach(function (botonClick) {
    botonClick.addEventListener("click", function () {
      /*---variables para cada elemento del carrito--*/
      var prodImg =
        botonClick.parentElement.parentElement.previousElementSibling
          .firstElementChild.src;
      var prodNombre =
        botonClick.parentElement.querySelector(".card-title").innerHTML;
      var prodPrecio =
        botonClick.parentElement.querySelector(".card-precio").innerHTML;

      const showCart = document.querySelector(".show-cart");
      const carritoDiv = document.createElement("div-cart");
      carritoDiv.innerHTML = ` 
                                  <div class="row shoppingCartProduct mt-3 text-center">
                                     <div class="col-3">
                                         <img src=${prodImg} class="modalImg"/>
                                         <h6 class="mt-2 card-title">${prodNombre}</h6>
                                     </div> 
                                     <div class="col-3">
                                         <p class="modalPrice">${prodPrecio}</p>
                                     </div>
                                     <div class="col-3">
                                         <input class="text-center modalQuantity" onfocus="this.oldvalue = this.value;" type="number" value="1">
                                     </div>
                                     <div class="col-3">
                                      <a href="#" class="remove-product" ><i class="fas fa-trash-alt"></i></a>

                                     </div>
                                 </div>
                             `;

      /*---TOTAL SEGUN LA CANTIDAD DEL INPUT DEL MODAL---*/

      carritoDiv.firstElementChild
        .querySelectorAll(".col-3")[2]
        .firstElementChild.addEventListener("click", function () {
          var totalPrice = document.querySelector("#total-price");
          var price = Number(totalPrice.innerHTML);
          price = price - Number(this.oldvalue) * prodPrecio;
          price = price + Number(this.value) * prodPrecio;
          totalPrice.innerHTML = price; //Corregir el precio total en base a la cantidad de items
          this.oldvalue = this.value;
        });

      var cartCounter = document.querySelector("#cart-counter");
      cartCounter.innerHTML = Number(cartCounter.innerHTML) + 1; //Añadir al contador de elementos del carrito

      var totalPrice = document.querySelector("#total-price");

      totalPrice.innerHTML = Number(totalPrice.innerHTML) + Number(prodPrecio); //Añadir el precio al total del carrito
      showCart.appendChild(carritoDiv);

      /*----VACIAR TODO EL CARRITO--*/
      $(".btn-vaciar-carrito").click(function () {
        showCart.innerHTML = "";
        totalPrice.innerHTML = Number(0);
        cartCounter.innerHTML = Number(0);
      });

      /*---ELIMINAR CADA PRODUCTO DEL CARRITO---*/
      $(".remove-product")
        .unbind("click")
        .click(function removeProductFromCart(event) {
          //"unbind" se usa para evitar que el primer elemento triggeree 2 veces esta funcion
          var cartCounter = document.querySelector("#cart-counter");
          cartCounter.innerHTML = Number(cartCounter.innerHTML) - 1; //actualizar la cantidad de items del carrito

          var totalPrice = document.querySelector("#total-price");
          totalPrice.innerHTML =
            Number(totalPrice.innerHTML) -
            Number(
              this.parentElement.previousElementSibling.firstElementChild.value
            ) *
              parseInt(
                this.parentElement.previousElementSibling.previousElementSibling
                  .firstElementChild.innerHTML
              );

          const removeProductBtn = event.target;
          removeProductBtn.closest(".shoppingCartProduct").remove(); //sacar elemento
        });
    });
  });
  /*---FINALIZAR COMPRA---*/
  $(".btn-finalizar-compra").click(function () {
    alert("Gracias por su compra!");
  });
});
