var slideIndex;
//hàm hiển thị slide
        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
               slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
  
            slides[slideIndex].style.display = "block";  
            dots[slideIndex].className += " active";
            slideIndex++; //chuyển đến slide tiếp theo
            if (slideIndex > slides.length - 1) { //nếu đang ở slide cuối cùng thì chuyển về slide đầu
              slideIndex = 0
            }    
            setTimeout(showSlides, 2000); //tự động huywrn sau 5s
        }
        showSlides(slideIndex = 0); //mặc định slide đầu
  
  
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }