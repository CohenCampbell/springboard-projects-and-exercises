"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story, mine = false) {
  // console.debug("generateStoryMarkup", story);

  const showStar = Boolean(currentUser);
  const showDelete = Boolean(mine)

  return $(`
      <li id="${story.storyId}">
      <div>
        ${showDelete ? getDeleteBtn() : ""}
        ${showStar ? getStarHTML(story, currentUser) : ""}
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${story.getHostName()})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
        </div>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function getStarHTML(story, user){
  const isFavorite = user.isFavorite(story); //located in models.js
  const starType = isFavorite ? "fas" : "far";
  return `
  <span class="star">
  <i class="${starType} fa-star"></i>
  </span>`;
}

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

function putFormOnPage(){
  console.debug("putFormOnPage");
}

async function reciveCreateForm(){

  let title1 = document.querySelector("#story-title-input").value;
  let author1 = document.querySelector("#author-name-input").value;
  let url1 = document.querySelector("#url-input").value;
 
  let newStory = await storyList.addStory(currentUser,
    {title: title1, author: author1, url: url1});
  
  putStoriesOnPage()

  $("#author-name-input").val("");
  $("#story-title-input").val("");
  $("#url-input").val("");
  return
}

function putFavoritesListOnPage() {
  console.debug("putFavoritesListOnPage");

  $favoritedStories.empty();

  if (currentUser.favorites.length === 0) {
    $favoritedStories.append("<h5>No favorites added!</h5>");
  } else {
    // loop through all of users favorites and generate HTML for them
    for (let story of currentUser.favorites) {
      const $story = generateStoryMarkup(story);
      $favoritedStories.append($story);
    }
  }

  $favoritedStories.show();
}

async function toggleStoryFavorite(evt) {
  console.debug("toggleStoryFavorite");

  const $tgt = $(evt.target);
  const $closestLi = $tgt.closest("li");
  const storyId = $closestLi.attr("id");
  const story = storyList.stories.find(s => s.storyId === storyId);

  // see if the item is already favorited (checking by presence of star)
  if ($tgt.hasClass("fas")) {
    // currently a favorite: remove from user's fav list and change star
    await currentUser.removeFavorite(story);
    $tgt.closest("i").toggleClass("fas far");
  } else {
    // currently not a favorite: do the opposite
    await currentUser.addFavorite(story);
    $tgt.closest("i").toggleClass("fas far");
  }
}

$allStoriesList.on("click", ".star", toggleStoryFavorite);
$favoritedStories.on("click", ".star", toggleStoryFavorite);

function putMyStoriesListOnPage() {
  console.debug("putMyStoriesListOnPage")

  $myStoryList.empty();

  if(currentUser.ownStories.length === 0){
    $myStoryList.append("<h5>No stories created!</h5>")
  } else{
    for (let story of currentUser.ownStories) {
      const $story = generateStoryMarkup(story, true);
      $myStoryList.append($story);
    }
  }

}

function getDeleteBtn(){
  return `
      <span class="trash-can">
        <i class="fas fa-trash-alt"></i>
      </span>`;
}