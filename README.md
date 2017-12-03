# Image Search Abstraction Layer

##Objectives

The *Objective* of the api is to allow the user to search for a image phrase using the google custom search api. The user will then receive back a link, snippet, thumbnail, and context for the search.

The api will also log the search entered by the user and store the phrase and date of the search.

 1. The api is accessed through the ../api/imagesearch/ adding the term at the end and a JSON formatted array will be returned
 
 2. The search history can be accesed through the ../api/latest router It will return the last 10 searches, with the term and date

## User Stories 

1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.

3. I can get a list of the most recently submitted search strings.

## Examples 
1. [https://warm-gorge-32119.herokuapp.com/api/imagesearch/yoda](https://warm-gorge-32119.herokuapp.com/api/imagesearch/yoda)

2. [https://warm-gorge-32119.herokuapp.com/api/latest](https://warm-gorge-32119.herokuapp.com/api/latest)
