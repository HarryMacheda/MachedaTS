## LAYOUTS
Layouts are "containers" for pages, used for things like App bars or footers
They are added to a page like so, with the router handling the rest.
```ts
    function Home() {
        return <h1>Index Page</h1>;
    }

    (Home as any).layout = CenteredLayout;
    export default Home
```