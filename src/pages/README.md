## PAGES
These are the main pages or routes for the application, they are automatically added using react-router and vite-plugin-pages. They will be added using the files name and must be TSX and export a defult element.
These are added to the route of the server e.g pages/home.tsx will map to https://server.ip/home with index representing a blank route. They should be formatted like this:

```ts 
function Home() {
  return <h1>Index Page</h1>;
}

export default Home
```

You can also use variables in the routes by having square brackets
see [id].tsx


The routes are wrapped in the Main Layout in _mainLayout.tsx, this is the global layout file. For layouts for routs name them the same as the sub folder. 
```
root
- users
-- profile
-- new
- users.tsx
```