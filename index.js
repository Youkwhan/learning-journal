/* Set the width of the sidebar to 250px (show it) */
function openNav() {
	document.getElementById("mySidepanel").style.width = "150px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
	document.getElementById("mySidepanel").style.width = "0";
}

//  View more section
// grab main.posts to render our hidden, when viewmore onclick
const viewMoreBtn = document.getElementById("view-more");
const viewLessBtn = document.getElementById("view-less");
const postsItems = document.querySelector(".posts__items");
const tempPosts = postsItems.innerHTML;
viewMoreBtn.addEventListener("click", function () {
	renderPosts();
	viewMoreBtn.classList.add("hidden");
	viewLessBtn.classList.remove("hidden");
});

function renderPosts() {
	// 3
	for (let i = 1; i < 4; i++) {
		postsItems.innerHTML += `
			<article>
				<img
					class="article__img"
					src="./images/blog-image-0${i}.png"
					alt="Post thumbnail"
				/>
				<span class="article__date">APRIL 11, 2023</span>
				<h2 class="article__title">Blog ${i + 3}</h2>
				<p class="article__preview">
					I'm excited to start a new learning journey where I get to review
					code and meet like-minded peers. After several months of learning in
					the Frontend Developer Career Path.
				</p>
			</article>
		`;
	}
}

viewLessBtn.addEventListener("click", function () {
	removePosts();
	viewMoreBtn.classList.remove("hidden");
	viewLessBtn.classList.add("hidden");
});

function removePosts() {
	postsItems.innerHTML = tempPosts;
}
