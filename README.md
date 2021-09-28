<h1 align="center">MYFLIX</h1>

<p>This project is created with React and handcrafted from scratch, without the use of a boilerplate or third-party library. It is based on the Netflix website in style, using TheMovieDatabase API to create a homepage with three carousels of movies: top rated, upcoming and most popular.</p> 

<p>Each carousel contains a number of movies which, when clicked, take the user to a single movie page with movie details and a 'favourite' section. The individual movie pages have a different font style and colour, depending on the carousel that they are associated with.</p>

## Links

- Repo: https://github.com/Miki-Geoghegan/mytheresa-react-app "mytheresa-react-app Repo"

- API: https://developers.themoviedb.org/3/getting-started/introduction "TheMovieDatabase API"

## Screenshots

Home Page:
![image](https://user-images.githubusercontent.com/83708369/135143127-3e134132-1819-4e3a-8ce8-0b27e382a492.png)

Movie Details and Liked Movies:
![image](https://user-images.githubusercontent.com/83708369/135143637-5f2f1d58-bbfd-4684-81fb-74dfad7ce6e8.png)

## Available Commands

In the project directory, you can run:

### `npm start`

The app is not built using `create-react-app` but is configured so that npm start will run the code on the browser. Open [http://localhost:8080] to view it in the browser.

## Built With

- React, JavaScript ES6
- Webpack
- HTML
- CSS

## Testing

Testing was done on all API calls with Postman

## Known Bugs

<p>The main issue with the app comes from separating the design of the movie detail pages for each carousel. Not knowing the exact cutoff points for "top rated" and "most popular" (as these were not provided in the API Documentation) meant that there were some inaccuracies and they did not all display correctly. If I had more time, I would have looked for a workaround and looked to change font style and colour through the "title" passed to the Carosel through props</p>

<p>A secondary issue was a struggle to access the API key through the .env file. As the challenge needed to be viewed via GitHub, it was important to hardcode the API key in the main document (as the .env file would be ingored when pushed). As API keys generally need to be hidden, for testing I tried to use the .env file and call it through `${process.env.API_KEY}`. While this printed to the console, it would not complete the API as requested. This is something I would like to look into further in the future</p>


## Future Updates

<p>Updates I would like to make include:</p>
<ul>
<li>Adding a "remove favourite button"</li>
<li>Adding an image to favourites list, in addition to the title</li>
<li>Adding a link to each title in the favourites list, leading to movie details</li>
</ul>

## Author

**Miki Geoghegan**

- [Profile](https://github.com/Miki-Geoghegan)

Thank you for your time ⭐️!
