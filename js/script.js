//Initialize Swiper
      var firstSwiper = new Swiper(".home .mySwiper", {
        navigation: {
          nextEl: ".home .swiper-button-next",
          prevEl: ".home .swiper-button-prev",
        },
        loop: true,
      });
      
      
      var secondSwiper = new Swiper(".products .mySwiper", {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 30,
        navigation: {
          nextEl: ".products .swiper-button-next",
          prevEl: ".products .swiper-button-prev",
        },
        pagination: {
          el: '.products .swiper-pagination',
          clickable: true,
        },
        
        breakpoints: {
          // when window width is >= 320px
          
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          
          // when window width is >= 576px
          576: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          
          // when window width is >= 640px
          992: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }
      });


      var thairdSwiper = new Swiper(".best-sellers .mySwiper", {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 2,
        navigation: {
          nextEl: ".best-sellers .swiper-button-next",
          prevEl: ".best-sellers .swiper-button-prev",
        },
        pagination: {
          el: '.best-sellers .swiper-pagination',
          clickable: true,
        },
        
        breakpoints: {
          // when window width is >= 320px
          
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          
          // when window width is >= 576px
          576: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          
          // when window width is >= 640px
          992: {
            slidesPerView: 5,
            spaceBetween: 20
          }
        }
      });


      var fourthSwiper = new Swiper(".review .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".review .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".review .swiper-button-next",
          prevEl: ".review .swiper-button-prev",
        },
      });
      
      var fifthSwiper = new Swiper(".blog .mySwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".blog .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".blog .swiper-button-next",
          prevEl: ".blog .swiper-button-prev",
        },
        
        breakpoints: {
          // when window width is >= 320px
          
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          
          // when window width is >= 576px
          576: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          
          // when window width is >= 640px
          992: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }
      });
      
      
      
      
      

let liItems = document.querySelectorAll(".products ul li");

let items = document.querySelectorAll(".products .swiper-slide");

let prevBtn = document.querySelector(".products .swiper-button-prev");

let nextBtn = document.querySelector(".products .swiper-button-next");

console.log(nextBtn)


liItems.forEach(li =>{
    li.addEventListener("click", ()=>{
        removeActive()
        li.classList.add("active")
        items.forEach(item =>{
            item.classList.add("hide")
            
            if(li.getAttribute("data-item") === item.getAttribute("data-cat")){
                item.classList.remove("hide")
                prevBtn.classList.add("swiper-button-disabled")
                nextBtn.classList.add("swiper-button-disabled")
            }
            
            else if(li.getAttribute("data-item") === "all"){
                    item.classList.remove("hide")
                    prevBtn.classList.remove("swiper-button-disabled")
                    nextBtn.classList.remove("swiper-button-disabled")
            }
            
        })
    })
})



// setInterval(function() {
//   if(window.innerWidth > 767){
//     if(items.length <= 4){
//       prevBtn.classList.add("swiper-button-disabled")
//       nextBtn.classList.add("swiper-button-disabled")
//     }
    
//     else{
//       prevBtn.classList.remove("swiper-button-disabled")
//       nextBtn.classList.remove("swiper-button-disabled")
//     }
//   }
// },100)




function removeActive(){
    liItems.forEach(li =>{
        li.classList.remove("active")
})
}