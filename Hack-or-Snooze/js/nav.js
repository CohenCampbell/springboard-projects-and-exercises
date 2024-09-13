"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

function navSubmitForm(evt){
  console.debug("navSubmitForm", evt);
  hidePageComponents();
  $createStoryForm.show();
}

$body.on("click", "#nav-submit", navSubmitForm);

 function createStoryFormSubmit(evt){
  hidePageComponents();
  reciveCreateForm();
  
  putStoriesOnPage();
}

$body.on("click", "#createStorySubmitBtn", createStoryFormSubmit)

function navFavoritesClick(evt) {
  console.debug("navFavoritesClick", evt);
  hidePageComponents();
  putFavoritesListOnPage();
}

$body.on("click", "#nav-favorites", navFavoritesClick);

function navMyStories(evt){
  console.debug("navMyStories", evt);
  hidePageComponents();
  putMyStoriesListOnPage();
  $($myStoryList).show();
}

$body.on("click", "#nav-my-stories", navMyStories)

async function deleteMyStory(evt){
  console.debug("deleteMyStory", evt);
  const $closestLi = $(evt.target).closest("li");
  const id = $closestLi.attr("id");

  $closestLi.remove();

  await storyList.delStory(currentUser, id)
}

$body.on("click", ".trash-can", deleteMyStory)