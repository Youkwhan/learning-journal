import { postData } from "./data.js";

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

viewLessBtn.addEventListener("click", function () {
	removePosts();
	viewMoreBtn.classList.remove("hidden");
	viewLessBtn.classList.add("hidden");
});

function renderPosts() {
	// 3
	postData.forEach((postObj) => {
		const { name, date, image, text } = postObj;
		postsItems.innerHTML += `
		<article>
			<img
				class="article__img"
				src="./images/${image}"
				alt="Post thumbnail"
			/>
			<span class="article__date">${date}</span>
			<h2 class="article__title">${name}</h2>
			<p class="article__preview">
				${text}
			</p>
		</article>
	`;
	});
}

function removePosts() {
	postsItems.innerHTML = tempPosts;
}
