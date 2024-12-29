// Get modal and plus icon
var modal = document.getElementById("myModal");
var plusIcon = document.querySelector(".plus-icon");
var closeBtn = document.querySelector(".close-btn");

// When the plus icon is clicked, open the modal
plusIcon.onclick = function() {
  modal.style.display = "block";
}

// When the close button is clicked, close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When clicking outside the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Get modal and plus icon
var modal = document.getElementById("myModal");
var plusIcon = document.querySelector(".plus-icon");
var closeBtn = document.querySelector(".close-btn");

// When the plus icon is clicked, open the modal
plusIcon.onclick = function() {
  modal.style.display = "block";
}

// When the close button is clicked, close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When clicking outside the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Optional: Handle sending functionality (e.g., image and write-up)
document.getElementById('sendBtn').addEventListener('click', function() {
  let imageInput = document.getElementById('imageInput').files[0];
  let writeUp = document.getElementById('writeUp').value;

  if (imageInput || writeUp) {
    // Handle sending logic here (e.g., save or display data)
    console.log("Image:", imageInput);
    console.log("Write-up:", writeUp);
    alert('Your content has been sent!');
  } else {
    alert('Please add an image or a write-up before sending.');
  }
});
// Get modal, plus icon, and elements for handling emoji container
var modal = document.getElementById("myModal");
var plusIcon = document.querySelector(".plus-icon");
var closeBtn = document.querySelector(".close-btn");
var emojiContainer = document.getElementById("emojiContainer");
var stickerBtn = document.getElementById("stickerBtn");

// Open modal when plus icon is clicked
plusIcon.onclick = function () {
    modal.style.display = "block";
}

// Close modal when close button is clicked
closeBtn.onclick = function () {
    modal.style.display = "none";
    emojiContainer.style.display = "none"; // Hide emoji container when modal closes
}

// Handle emoji container visibility
stickerBtn.onclick = function () {
    // Toggle the sliding effect for the emoji container
    if (emojiContainer.style.maxHeight) {
        emojiContainer.style.maxHeight = null;
    } else {
        emojiContainer.style.maxHeight = emojiContainer.scrollHeight + "px"; // Slide down
    }
}

// Insert selected emoji into the write-up text area
emojiContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("emoji")) {
        var emoji = event.target.getAttribute("data-emoji");
        var writeUp = document.getElementById("writeUp");
        writeUp.value += emoji; // Append emoji to write-up
    }
});

// Close modal when clicking outside the modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        emojiContainer.style.display = "none"; // Hide emoji container when modal closes
    }
}
// Function to display the new post
function displayPost(text, image, stickers, postTime) {
    var postContainer = document.getElementById("postContainer");
  
    var post = document.createElement("div");
    post.classList.add("post");
  
    var postText = document.createElement("div");
    postText.classList.add("post-text");
    postText.textContent = text;
  
    var postImage = document.createElement("img");
    postImage.classList.add("post-image");
    if (image) {
      postImage.src = URL.createObjectURL(image); // If image is uploaded, display it
    }
  
    var postTimeDiv = document.createElement("div");
    postTimeDiv.classList.add("post-time");
    var currentTime = new Date(postTime);
    postTimeDiv.textContent = currentTime.toLocaleString(); // Display current date and time
  
    post.appendChild(postText);
    if (image) post.appendChild(postImage);
    post.appendChild(postTimeDiv);
  
    postContainer.appendChild(post); // Add new post to the main page
  }
  
  // Save posts to local storage
  function savePostToLocalStorage(text, image, stickers) {
    var postTime = new Date().getTime(); // Get current time in milliseconds
  
    var post = {
      text: text,
      image: image ? URL.createObjectURL(image) : null,
      stickers: stickers,
      postTime: postTime
    };
  
    // Get existing posts from local storage
    var posts = JSON.parse(localStorage.getItem("posts")) || [];
  
    // Add new post
    posts.push(post);
  
    // Save updated posts to local storage
    localStorage.setItem("posts", JSON.stringify(posts));
  }
  
  // Load posts from local storage
  function loadPostsFromLocalStorage() {
    var posts = JSON.parse(localStorage.getItem("posts")) || [];
    var currentTime = new Date().getTime();
  
    // Filter out posts older than 24 hours
    posts = posts.filter(function(post) {
      // If post is older than 24 hours, remove it
      return currentTime - post.postTime <= 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    });
  
    // Re-save valid posts
    localStorage.setItem("posts", JSON.stringify(posts));
  
    // Display valid posts
    posts.forEach(function(post) {
      displayPost(post.text, post.image, post.stickers, post.postTime);
    });
  }
  
  // Handle the "Send" button click
  document.getElementById("sendBtn").onclick = function() {
    var writeUp = document.getElementById("writeUp").value;
    var imageInput = document.getElementById("imageInput").files[0];
    
    // Get the sticker (emoji) if any
    var selectedEmoji = writeUp.match(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}]/gu); // Regex for emojis
    var stickers = selectedEmoji ? selectedEmoji.join(" ") : '';
  
    // Save the post to local storage
    savePostToLocalStorage(writeUp, imageInput, stickers);
  
    // Display the post on the page immediately
    displayPost(writeUp, imageInput, stickers, new Date().getTime());
  
    // Clear the fields after posting
    document.getElementById("writeUp").value = '';
    document.getElementById("imageInput").value = '';
    modal.style.display = "none";
  };
  
  // Load posts when the page loads
  window.onload = function() {
    loadPostsFromLocalStorage();
  };
  