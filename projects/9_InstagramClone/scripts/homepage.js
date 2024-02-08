document.addEventListener("DOMContentLoaded", function () {
  //header
  let searchInput = document.getElementById("searchInput");
  let searchList = document.querySelector(".searchlist");
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      let searchText = searchInput.value.trim();

      if (searchText.length > 0) {
        searchList.textContent = searchList.innerHTML + ", " + searchText;
        searchInput.value = "";
      }
    }
  });

  const searchIcon = document.getElementById("searchIcon");
  searchIcon.addEventListener("click", function () {
    const searchModal = document.querySelector(".searchModal");
    if (searchModal.style.display === "none") {
      searchModal.style.display = "block";
    } else {
      searchModal.style.display = "none";
    }
  });

  const messageIcon = document.getElementById("messageIcon");
  messageIcon.addEventListener("click", function () {
    const messageModal = document.querySelector(".messageModal");
    if (messageModal.style.display === "none") {
      messageModal.style.display = "block";
    } else {
      messageModal.style.display = "none";
    }
  });

  const messageContainer = document.querySelector(".message-container");

  const messages = [
    {
      name: "Jenny Gupta",
      message: "Hey there!",
      imagesrc: "./assets/images/homeScreen/pp1.jpg",
    },
    {
      name: "John Doe",
      message: "Hello!",
      imagesrc: "./assets/images/homeScreen/pp7.jpg",
    },
    {
      name: "Alice Smith",
      message: "Good morning!",
      imagesrc: "./assets/images/homeScreen/pp8.jpg",
    },
    {
      name: "Michael Johnson",
      message: "How are you?",
      imagesrc: "./assets/images/homeScreen/pp4.jpg",
    },
    {
      name: "Sarah Lee",
      message: "I'm doing well, thanks!",
      imagesrc: "./assets/images/homeScreen/pp9.jpg",
    },
    {
      name: "David Kim",
      message: "What's up?",
      imagesrc: "./assets/images/homeScreen/pp10.jpg",
    },
  ];

  messages.forEach((messageData) => {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.style.cssText =
      "display: flex; align-items: center; border: 0.666667px solid rgb(38, 38, 38); border-radius: 10px; margin: 10px;";
    messageDiv.innerHTML = `
        <img src="${messageData.imagesrc}" alt="Profile Picture" style="height: 40px; width: 40px; border-radius: 30%; margin: 10px;">
        <div class="message-details">
            <h6 style="margin: 0; padding: 0;">${messageData.name}</h6>
            <p style="margin: 0; padding: 0;">${messageData.message}</p>
        </div>
    `;
    messageContainer.appendChild(messageDiv);
  });

  //main
  const profileIcon = document.getElementById("profileIcon");
  profileIcon.addEventListener("click", function () {
    const profileModal = document.querySelector(".profileModal");
    if (profileModal.style.display === "none") {
      profileModal.style.display = "block";
    } else {
      profileModal.style.display = "none";
    }
  });

  let canvases = document.querySelectorAll(".story-item, .profile-canvas");
  canvases.forEach(function (canvas) {
    var ctx = canvas.getContext("2d");
    canvas.width = 66;
    canvas.height = 66;

    var gradient = ctx.createRadialGradient(1, 45, 0, 50, 70, 100);
    gradient.addColorStop(0, "#feda75");
    gradient.addColorStop(0.25, "#fa7e1e");
    gradient.addColorStop(0.5, "#d62976");
    gradient.addColorStop(0.75, "#962fbf");
    gradient.addColorStop(1, "#4f5bd5");

    //circular gradient border
    ctx.beginPath();
    ctx.arc(
      canvas.width / 2,
      canvas.height / 2,
      canvas.width / 2 - 3,
      0,
      2 * Math.PI
    );
    ctx.lineWidth = 2.9;
    ctx.strokeStyle = gradient;
    ctx.stroke();

    //circular clipping path for image
    ctx.beginPath();
    ctx.arc(33, 33, 27, 0, 2 * Math.PI);
    ctx.clip();

    var img = new Image();
    img.src = canvas.querySelector(".story-item img, .profile-canvas img").src;

    img.onload = function () {
      ctx.drawImage(img, 3, 3, canvas.width - 6, canvas.width - 6);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#262626";
      ctx.stroke();
    };
  });

  setInterval(() => {
    let times = document.querySelectorAll(".current-time");
    let currenttime = new Date();
    let currentHour = currenttime.getHours();
    let currentMin = currenttime.getMinutes();
    times.forEach((time) => {
      if (currentHour === 0) {
        time.textContent = currentMin + "min";
      } else {
        time.textContent = currentHour + "hr " + currentMin + "min";
      }
    });
  }, 0);

  var moreOptions = document.querySelectorAll(".more-option");
  moreOptions.forEach((option) => {
    option.addEventListener("click", () => { });
  });

  function likes() {
    let totalLikes = document.querySelectorAll(".totalLikes");
    let heart = document.querySelectorAll(".heart");

    heart.forEach((btn, index) => {
      let isLiked = false;
      btn.addEventListener("click", () => {
        if (!isLiked) {
          btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
          btn.style.color = "red";
          totalLikes[index].textContent =
            parseInt(totalLikes[index].textContent) + 1 + " likes";
          isLiked = true;
        } else {
          btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
          btn.style.color = "red";
          totalLikes[index].textContent =
            parseInt(totalLikes[index].textContent) - 1 + " likes";
          isLiked = false;
        }
      });
    });
  }
  likes();

  function comments() {
    let totalComments = document.querySelectorAll(".totalComments");
    let commentInput = document.querySelectorAll("#commentInput");

    commentInput.forEach((input, index) => {
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          let currentCount = parseInt(
            totalComments[index].textContent.replace(/\D/g, ""),
            10
          );
          let newCount = currentCount + 1;
          totalComments[index].textContent =
            "View all " + newCount + " comments";
          input.value = "";
        }
      });
    });
  }
  comments();
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".story");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[slideIndex].style.display = "block";
}

function moveSlide(n) {
  slideIndex += n;
  showSlides();
  likes();
  comments();
}

let storySections = document.querySelectorAll(".story-container");
storySections.forEach((section, index) => {
  section.addEventListener("click", () => {
    showStoryArticle(index);
  });
});

let storyContainers = document.querySelectorAll(".story-container .story-item");
storyContainers.forEach((storyItem, index) => {
  let storyArticle = document.querySelectorAll(".story")[index];
  let imgSrc = storyItem.querySelector("img").getAttribute("src");
  storyArticle.querySelector(".image-video img").src = imgSrc;
});

function showStoryArticle(index) {
  let slides = document.querySelectorAll(".story-article");
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "block";
}

document.querySelectorAll(".close").forEach((closeBtn, index) => {
  closeBtn.addEventListener("click", () => {
    closeStoryArticle(index);
  });
});
function closeStoryArticle(index) {
  let slides = document.querySelectorAll(".story-article");
  slides[index].style.display = "none";
}

//last section
let following = document.querySelectorAll(".follow-btn");
following.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "Follow") {
      btn.textContent = "Following";
    } else {
      btn.textContent = "Follow";
    }
  });
});

function handleScreenSize() {
  const navBars = document.querySelectorAll("#nav-bar-container .nav-bar");
  const screenWidth = window.innerWidth;

  navBars.forEach((navBar) => {
    const secondSpan = navBar.querySelector("span:nth-child(2)");
    if (screenWidth <= 720 && secondSpan) {
      secondSpan.style.display = "none";
    } else if (secondSpan) {
      secondSpan.style.display = "inline-block";
    }
  });
}
handleScreenSize();
window.addEventListener("resize", handleScreenSize);
