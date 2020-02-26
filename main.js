const ratings = {
  nokia: 3.5,
  samsung: 4.2,
  apple: 3.1,
  oneplus: 4
}

//        Total Stars

const starsTotal = 5;

//      Run getRating when Dom load
document.addEventListener('DOMContentLoaded', getRatings);

//        Form element

const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

//        Init product

let product;

//      Product select change

productSelect.addEventListener('change', (e) => {
  product = e.target.value;
  //      Enable rating
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

//  Rating Control change
ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;

    //      Make sure under 5
    if(rating > 5){
      alert('Please rate under 5');
      return;
    }

    //        Change rating
    ratings[product] = rating;
  
    getRatings();
});


//        Get rating

function getRatings(){
  for(let rating in ratings){
//        Get percentage
    const starPercent = (ratings[rating] / starsTotal) * 100;

    //        Round to nearest 10
    const starPercentRound = `${Math.round(starPercent / 10) * 10}%`;

    console.log(starPercentRound);

    //      Set width of star-inner to Percentage
    document.querySelector(`.${rating} .star-inner`).style.width = starPercentRound;

    //      Add number rating
    document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
  }
}