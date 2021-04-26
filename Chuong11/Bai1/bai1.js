// Tạo mảng card để chứa tất cả các card
let card = document.getElementsByClassName("card");
let cards = [...card];

// Lấy id 
const deck = document.getElementById("card-deck");

// Khai báo biến di chuyển
let moves = 0;
let counter = document.querySelector(".moves");

// Khai báo các biến cho biểu tượng ngôi sao 
const stars = document.querySelectorAll(".fa-star");

// Khai báo biến để nhận tất cả các phần tử với tên lớp là "match"
let matchedCard = document.getElementsByClassName("match");

 // Khai báo biến chứa danh sách các "stars"
 let starsList = document.querySelectorAll(".stars li");

 // Khai báo biến nhận phương thức "close"
 let closeicon = document.querySelector(".close");

 // Khai báo phương thức
 let modal = document.getElementById("popup1")

 // Khai báo mảng chứa các thẻ đã mở
var openedCards = [];


//Hàm để xáo trộn các thẻ 
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex; //Khai báo 1 biến gán giá trị là chiều dài của mảng, khai báo 1 biến tạm và 1 chỉ số ngẫu nhiên để random

    while (currentIndex !== 0) { //Kiểm tra điều kiện
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};


// Xáo trộn thẻ khi trang được làm mới
document.body.onload = startGame();


// Xây dựng hàm để bắt đầu trò chơi
function startGame(){
    openedCards = []; //làm trống mảng 
    cards = shuffle(cards); //Xáo trộn các card
    for (var i = 0; i < cards.length; i++){ //Dùng vòng lặp để xóa các phương thức hiện có của các thẻ
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }
    moves = 0; //Đặt lại các bước di chuyển
    counter.innerHTML = moves; //Đặt lại xếp hạng của sao
    for (var i= 0; i < stars.length; i++){
        stars[i].style.color = "#FFD700";
        stars[i].style.visibility = "visible";
    }
    //Đặt lại thời gian 
    second = 0;
    minute = 0; 
    hour = 0;
    var timer = document.querySelector(".timer");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval); //Sử dụng clearInterval để dừng thời gian
}


// Chuyển đổi và hiển thị lớp để hiển thị thẻ
var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};


// Xây dựng hàm để thêm các thẻ đã mở vào danh sách OpenCards 
function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){ //Kiểm tra xem các thẻ có khớp nhau hay không?
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            openedCards[0].classList.add("match", "disabled");
    		openedCards[1].classList.add("match", "disabled");
    		openedCards[0].classList.remove("show", "open", "no-event");
    		openedCards[1].classList.remove("show", "open", "no-event");
    		openedCards = [];
        } else {
             openedCards[0].classList.add("unmatched");
    		openedCards[1].classList.add("unmatched");
    		disable();
    		setTimeout(function(){
        	openedCards[0].classList.remove("show", "open", "no-event","unmatched");
        	openedCards[1].classList.remove("show", "open", "no-event","unmatched");
        	enable();
        	openedCards = [];
    	},1100);
        }
    }
};

// Xây dựng hàm này để vô hiệu hóa các thẻ tạm thời
function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}

// Kích hoạt và tắt đi các thẻ phù hợp 
function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}
//Xây dựng bộ đếm thời gian
var second = 0, minute = 0; hour = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}

//Xây dựng hàm để đếm số lượt chọn của người chơi
function moveCounter(){
    moves++;
    counter.innerHTML = moves;
    if(moves == 1){ //Bắt đầu hẹn giờ khi nhấp chuột chọn lần đầu tiên
        second = 0;
        minute = 0; 
        hour = 0;
        startTimer();
    }
    if (moves > 8 && moves < 12){
        for( i= 0; i < 3; i++){
            if(i > 1){
                stars[i].style.visibility = "collapse";
            }
        }
    }
    else if (moves > 13){
        for( i= 0; i < 3; i++){
            if(i > 0){
                stars[i].style.visibility = "collapse";
            }
        }
    }
}


// Xây dựng hàm để hiển thị ra kết quả khi kết thúc trò chơi
function congratulations(){
    if (matchedCard.length == 16){ //kiểm tra điều kiện nếu các thẻ đã được mở hết thì cho dừng thời gian
        clearInterval(interval);
        finalTime = timer.innerHTML;
        modal.classList.add("show"); //hiển thị phương thức chúc mừng
        var starRating = document.querySelector(".stars").innerHTML; //Khai báo biến để xếp hạng sao
        //hiển thị số lần chọn, sao và thời gian 
        document.getElementById("finalMove").innerHTML = moves;
        document.getElementById("starRating").innerHTML = starRating;
        document.getElementById("totalTime").innerHTML = finalTime;
        //Đóng biểu tượng
        closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
        startGame();
    });
    };
}

// Hàm để người chơi có thể chơi lại 
function playAgain(){
    modal.classList.remove("show");
    startGame();
}

for (var i = 0; i < cards.length; i++){
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
    card.addEventListener("click",congratulations);
};