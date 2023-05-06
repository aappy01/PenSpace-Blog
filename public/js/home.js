const blogSection = document.querySelector('.articles');

db.collection("blogs").get().then((blogs) => {
    blogs.forEach(blog => {
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            createBlog(blog);
        }
    })
})

const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML += `
    <div class="article-card">
        <img src="${data.bannerImage}" class="article-image" alt="">
        <h1 class="article-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="article-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${blog.id}" class="btn dark">Read Post</a>
    </div>
    `;
}

const menuList = document.querySelector(".menu-icon");
const menuIconList = document.querySelector('.menu-icon-list')

        menuList.style.maxHeight = "50px";
        menuIconList.style.display = "none"

      function togglemenu() {
        if ((menuList.style.maxHeight == "50px") && (menuIconList.style.display == "none")) {
          menuList.style.maxHeight = "100vh";
          menuIconList.style.display = "block"

        } else {
          menuList.style.maxHeight = "50px";
          menuIconList.style.display = "none"
        }
      }