# README for HEADLINES (Frontend)

# Table of Contents
- About
- Features

## About
This README is for the Frontend that supports the `HEADLINES` project.

[Headlines Live Application](https://head-lines.herokuapp.com)

`HEADLINES` was brought to you by Becky Newborn and Gene Yoo. Its intent is to provide aggregated news headlines based on a user's preferences for news sources. All news headlines were sourced from News API (https://newsapi.org/), a HTTP REST API for searching and retrieving live articles from all over the web. We hope you enjoy!

## Features

#### 1. Sign Up ('/signup')
  - New users may sign up for an account by entering a username and password of their choosing. These login credentials will be used to authenticate a user and pull his/her custom preferences for future site use.
  - Users may choose from a curated selection of 30 news sources to aggregate live articles from. Users are able to edit their preferences through the 'Edit Profile' feature outlined in step 4.

#### 2. Search For Articles By Keyword ('/welcome')
  - Users can search for news articles by custom keyword (e.g. Bitcoin). Live articles will be pulled from all news sources containing recent articles with the keyword. Currently, this feature only pulls live articles written in English.
  - This feature is available to the public and does NOT require sign up. Users who would like to customize news sources should sign up for an account through the steps outlined in step 1.

#### 3. Search / Filter Articles By News Source ('/feed')
  - Users can save and/or share articles in their news feed via the buttons attached to each rendered article.
  - Articles can be filtered by news source via the toggle buttons on the left side of the 'My Feed' page.
  - Articles are sorted by published date (latest to oldest).

#### 4. My Profile ('/my_profile')
  - Any articles saved to a user's profile are rendered in the user's 'My Profile' page along with a list of the preferred news sources. Users can edit their profiles via the 'Edit Profile' button at the top of the page.

#### 5. Edit Profile ('/my_profile/edit')
  - Users can edit their usernames as well as turn on/off each news source for live articles in their feed.
  - Users can save any changes made via the 'Save Profile' button at the top of the page.

#### 6. Display Articles Shared via Network Feed ('/network')
  - Any articles shared by a user are displayed on the network feed sorted by shared date (most recent to oldest). At this time, this page renders all articles shared by any user on the 'Headlines' network.
