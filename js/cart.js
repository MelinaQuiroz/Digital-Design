
/*----CARRITO---*/
  //Productos

  const prodImg = document.querySelector(".prod-img").src;
  const prodNombre = document.querySelector(".card-title").textContent;
  const prodPrecio = document.querySelector(".card-precio").textContent;

 

    /*---Agregar al carrito---*/
        const agregarCarrito = document.querySelectorAll(".agregar-carrito"); // Botón "Agregar al carrito"
        
  
          agregarCarrito.forEach(function(botonClick) {
            
            botonClick.addEventListener("click", function() {
                
              const showCart = document.querySelector( ".show-cart" );
              const carritoDiv = document.createElement( 'div' );
                    carritoDiv.innerHTML =
                                 ` 
                                  <div class="row mt-3 text-center">
                                     <div class="col-3">
                                         <img src=${prodImg} class="modalImg"/>
                                         <h6 class="mt-2 card-title">${prodNombre}</h6>
                                     </div> 
                                     <div class="col-3">
                                         <p class="modalPrecio">${prodPrecio}</p>
                                     </div>
                                     <div class="col-3">
                                         <input class="text-center" type="number" value="1">
                                     </div>
                                     <div class="col-3">
                                     <a href="#"<i class="fas fa-trash-alt"></i></a>
                                     </div>
                                 </div>
                             `
                      showCart.appendChild(carritoDiv);     
            
            })
          });

          /*--JQUERY--*/

          // $(document).ready(function() {
             
          //   $(".total-price").css("color", "violet"); 
          
          // });
                        
                        

          
        

        
                
        
        