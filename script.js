// DOM Elements
let tvBrandsInput = document.getElementById("tv-brands");
let tvRatingInput = document.getElementById("tv-rating");
let sonyStarsDiv = document.getElementById("sony-stars");
let samsungStarsDiv = document.getElementById("samsung-stars");
let vizioStarsDiv = document.getElementById("vizio-stars");
let panasonicStarsDiv = document.getElementById("panasonic-stars");
let phillipsStarsDiv = document.getElementById("phillips-stars");

// Variables
let tv = {
  sony: {
    rating: 3.7,
    stars: ""
  },
  samsung: {
    rating: 4.5,
    stars: ""
  },
  vizio: {
    rating: 3,
    stars: ""
  },
  panasonic: {
    rating: 2.2,
    stars: ""
  },
  phillips: {
    rating: 3.6,
    stars: ""
  }
};

let emptyStarHtml = "<i class='far fa-star'></i>";
let halfStarHtml = "<i class='fas fa-star-half-alt'></i>";
let fullStarHtml = "<i class='fas fa-star'></i>";

function updateStars() {
  Object.keys(tv).forEach(function(item) {
    let fullStars = Math.floor(tv[item].rating);
    let halfStars;
    if (tv[item].rating - Math.floor(tv[item].rating).toFixed(1) >= 0.5) {
      halfStars = 1;
    } else {
      halfStars = 0;
    }
    let emptyStars = 5 - (fullStars + halfStars);

    for (let i = 0; i < fullStars; i++) {
      tv[item].stars += fullStarHtml;
    }

    if (halfStars == 1) {
      tv[item].stars += halfStarHtml;
    }
    for (let i = 0; i < emptyStars; i++) {
      tv[item].stars += emptyStarHtml;
    }

    if (item == "sony") {
      sonyStarsDiv.innerHTML = tv[item].stars + " " + tv[item].rating;
    } else if (item == "samsung") {
      samsungStarsDiv.innerHTML = tv[item].stars + " " + tv[item].rating;
    } else if (item == "vizio") {
      vizioStarsDiv.innerHTML = tv[item].stars + " " + tv[item].rating;
    } else if (item == "panasonic") {
      panasonicStarsDiv.innerHTML = tv[item].stars + " " + tv[item].rating;
    } else if (item == "phillips") {
      phillipsStarsDiv.innerHTML = tv[item].stars + " " + tv[item].rating;
    }

    tv[item].stars = "";
  });
}

window.onload = updateStars();

function updateRating(newRating) {
  if (newRating >= 0 && newRating <= 5) {
    tv[tvBrandsInput.value].rating = newRating;
    updateStars();
  } else {
    alert("Rate between 1-5!");
  }
}

function selectTV(tvBrand) {
  tvRatingInput.value = tv[tvBrand].rating;
}
