const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    comment: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    comment: 'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
];

const renderHTML = posts.map((post) => {
  return `<section class="profile">
  <div class="profile-details">
  <img src="${post.avatar}" alt="${post.name} profile image" class="profile-img" width="34" height="34" />


  <div class="profile-info">
    <p class="profile-name bold">${post.name}</p>
    <p class="profile-location">${post.location}</p>
  </div>
</div>

  <img src="${post.post}" alt="${post.name} selfie img" class="profile-selfie" width="375" height="375" />

  <div class="profile-interactions">
    <div class="profile-icons">
    <img class="icon-img like-icon" src="images/icon-heart.png" alt="like this image" width="25" height="25" />
      <img class="icon-img" src="images/icon-comment.png" alt="Leave a comment" width="25" height="25"  />
      <img class="icon-img" src="images/icon-dm.png" alt="share this image" width="25" height="25"  />


    </div>
    <p class="profile-likes bold"> <span class="likes-number">${post.likes}</span> likes</p>
    <p class="profile-comments">
      <span class="bold">${post.username}</span> ${post.comment}
    </p>
  </div>
</section>`;
});

document.querySelector('.container').innerHTML += renderHTML.join('');
const likeIcons = document.querySelectorAll('.like-icon');
const selfieImg = document.querySelectorAll('.profile-selfie');

likeIcons.forEach((likeIcon) => {
  likeIcon.addEventListener('click', (e) => {
    //Extract likes number
    let likesNumberElement = e.target.parentElement.nextElementSibling.firstElementChild;

    likesNumberElement.textContent = Number(likesNumberElement.textContent) + 1;
  });
});

selfieImg.forEach((img) => {
  img.addEventListener('click', (e) => {
    //Extract likes number
    let likesNumberElement = e.target.nextElementSibling.children[1].firstElementChild;

    likesNumberElement.textContent = Number(likesNumberElement.textContent) + 1;
  });
});
