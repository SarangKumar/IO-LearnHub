# API Routes

Following the principles of [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) we can also create [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes). These are routes that are not meant to be rendered by Next.js, but instead are meant to be used as an API endpoint.

API routes are created under the `app/api` directory. The files inside this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

> Putting all the routes inside the api folder is just a convention so that api routes and page routes don't mix up.

## Creating a route

Creating a route has two parts:

-   creating _endpoints_
-   creating _methods_ for that endpoint

### Creating endpoints

To create a endpoint, create a folder inside the `app/api` directory with the desired route name. For example, if we want to create a route for `http://localhost:3000/api/hello`, we would create a folder called `hello` inside the `app/api` directory and inside that `hello folder` we would create a file called `route.{js, ts}`. (here route is a keyword just like page)

Path for the api: `app > api > hello > route.js`.

### Creating methods for that endpoint

Inside the `route.js` file, we can create methods for the endpoint. For example, if we want to create a `GET` method for the endpoint, we would create a function called `GET` inside the `route.js` file. Similarly, we can create `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONs` methods for the endpoint.

> If an unsupported method is called, Next.js will return a 405 Method Not Allowed response.

```js
import { NextResponse } from "next/server";

export async function GET() {
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/albums/2",
		{}
	);
	const data = await res.json();

	return NextResponse.json({ data });
}
```

If we visit `http://localhost:3000/api/hello` we will get the following response:

```json
{
	"data": {
		"userId": 1,
		"id": 2,
		"title": "sunt qui excepturi placeat culpa"
	}
}
```

---

## Hands On

#### Creating Static routes

-   Open terminal in this path: `day_11/lessons/next_api`
-   Run `npm install` to install the dependencies
-   Run `npm run dev` to start the development server
-   Open [http://localhost:3000/api/hello](http://localhost:3000/api/hello) in your browser to see the response that will execult the code corresponding to [app/api/hello/route.js](/day_11/lessons/next_api/app/api/hello/route.js)

Result:
```js
{
    "data": {
    "userId": 1,
    "id": 2,
    "title": "sunt qui excepturi placeat culpa"
  }
}
```

Similarly for the route [http://localhost:3000/api/comments](http://localhost:3000/api/comments) the code corresponding to [app/api/comments/route.js](/day_11/lessons/next_api/app/api/comments/route.js) will be executed.

Result:
```js
"data": [
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
},
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et"
},
...]
```

#### Creating Dynamic routes

To create a dynamic route you have to use the same method as you would use for creating a dynamic page. For example, if we want to create a dynamic route for `http://localhost:3000/api/comments/1`, we would create a folder called `[id]` inside the `pages/api` directory and inside that `[id] folder` we would create a file called `route.{js, ts}`. (here route is a keyword just like page)

Code snippet for the dynamic route, [app/api/[id]/route.js](/day_11/lessons/next_api/app/api/comments/[id]/route.js):

```js
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
	const { id } = params;
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/comments/${id}`
	);
	const data = await res.json();

	return NextResponse.json({ data });
}
```

Here we are using the `params` object to get the `id` from the url. We are then using that `id` to fetch the data from the API.

Open [http://localhost:3000/api/comments/1](http://localhost:3000/api/comments/1). 

Result:
```json
{
	"data": {
		"postId": 3,
		"id": 12,
		"name": "modi ut eos dolores illum nam dolor",
		"email": "Oswald.Vandervort@leanne.org",
		"body": "expedita maiores dignissimos facilis ipsum est rem est fugit velit sequi eum odio dolores dolor totam occaecati ratione eius rem velit"
	}
}
```

_Congratulations! Now you know how to work with API routes in nextjs and use `fetch` in `route.js` and create different types of methods._
