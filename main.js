document.addEventListener("DOMContentLoaded", function(){

  //This is a json object not unlike one that would come from an api.
  var blogData = {
    "posts" : [
      {
        "headline":"Eight Questions with MeatEater's Mark Kenyon",
        "image": "https://assets.onxmaps.com/images/_AUTOx500_crop_center-center_auto/Back-40-Mark-Kenyon-interview_-Hero.jpg", 
        "link":"https://www.onxmaps.com/blog/eight-questions-with-mark-kenyon"
      },
      {
        "headline":"Morel Mushroom Maps with the onX Hunt App",
        "image": "https://assets.onxmaps.com/images/_AUTOx500_crop_center-center_auto/Mushroom_Hero_v1.jpg",
        "link":"https://www.onxmaps.com/blog/morel-mushroom-hunting-maps-where-to-find"
      },
      {
        "headline":"Finding Turkeys with The Hunting Public",
        "image": "https://assets.onxmaps.com/images/_AUTOx500_crop_center-center_auto/The-THP-Turkey_Hero.jpg",
        "link":"https://www.onxmaps.com/blog/finding-turkeys-with-the-hunting-public"
      },
      {
        "headline":"MeatEater’s Back 40 Project",
        "image": "https://assets.onxmaps.com/images/_AUTOx500_crop_center-center_auto/MeateaterBack40Refresh_Hero2.jpg",
        "link":"https://www.onxmaps.com/blog/meateaters-back-40-project"
      }
    ]
  };

  // var blogEntry = `
  // <a class="post-wrapper" href="${blogData.posts[0].link}">
  //   <div class="image-wrapper">
  //     <img src="${blogData.posts[0].image}" alt="">
  //   </div>
  //   <h4>${blogData.posts[0].headline}</h4>
  //   <div class="button">Read Article</div>
  // </a>
  // <a class="post-wrapper" href="${blogData.posts[1].link}">
  //   <div class="image-wrapper">
  //     <img src="${blogData.posts[1].image}" alt="">
  //   </div>
  //   <h4>${blogData.posts[1].headline}</h4>
  //   <div class="button">Read Article</div>
  // </a>
  // <a class="post-wrapper" href="${blogData.posts[2].link}">
  //   <div class="image-wrapper">
  //     <img src="${blogData.posts[2].image}" alt="">
  //   </div>
  //   <h4>${blogData.posts[2].headline}</h4>
  //   <div class="button">Read Article</div>
  // </a>
  // <a class="post-wrapper" href="${blogData.posts[3].link}">
  //   <div class="image-wrapper">
  //     <img src="${blogData.posts[3].image}" alt="">
  //   </div>
  //   <h4>${blogData.posts[3].headline}</h4>
  //   <div class="button">Read Article</div>
  // </a>
  // `

  // DRY code goes here

  //A forEach could be used here to parse the objects & keys
// blogData.posts.forEach ( i => {
  for (  i = 0; i < blogData.posts.length ; i++) {
    var blogFeed = document.getElementsByClassName("blog-posts")[0];
    blogFeed.innerHTML = blogEntryButDRY;
    
    console.log(i);
      var blogEntryButDRY = ` <a class="post-wrapper" href="${blogData.posts[i].link}">
      <div class="image-wrapper">
        <img src="${blogData.posts[i].image}" alt="">
      </div>
      <h4>${blogData.posts[i].headline}</h4>
      <div class="button">Read Article</div>
    </a>`
// When set to i, it displays the first article only, it is looping through the array but getting hung up by the innerHTML doc error. 
// Granted more time, I would have looked further into the error. 
// when set to 0, it consoles out the full 0-3, but only displays one article which is the fourth & last one
  
  // blogFeed.innerHTML = blogEntry;
  

  }
});

