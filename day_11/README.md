# Day 11

## What is MongoDB?


## What is API?

Let me explain what is API(Application Programming Interface) in with one scenario.

#### Imagine an Online Weather Service:

Let's say you want to build a weather app, but you don't have the resources to collect and maintain all the weather data yourself. Instead, you decide to use an online weather service's API. This service has a ton of weather data for locations all over the world, and they've made it available for developers to use.

<details>
    <summary>
        API Component
    </summary>

- **Endpoint**: Think of an endpoint as a specific URL or web address that the weather service provides. Each endpoint represents a different type of request you can make to the service. For example, there might be an endpoint for getting the current weather, another for getting forecasts, and one for historical weather data.

- **Methods**: In API lingo, methods are like actions you can perform on the endpoints. There are typically four main methods used in APIs:

    - **GET**: This method is like asking for information. You use it when you want to retrieve data from the weather service, such as getting the current weather for a specific city.

    - **POST**: This method is like sending data to the service. You use it when you want to add or create something on the service, like submitting your own weather data.

    - **PUT**: This method is used to update existing data on the service. For example, you might use it to change your preferences for weather alerts.

    - **DELETE**: As the name suggests, this method is used to remove data from the service. You might use it to delete your account or remove a location from your saved places.
</details>

#### Using the Weather Service API:

Here's how you would use the weather service's API to get the current weather for a city:

You make a GET request to the specific endpoint designed for retrieving current weather. Let's say the endpoint for this is https://weather-api.com/current. 

> Keep in mind that with [REST APIs](https://medium.com/edureka/what-is-rest-api-d26ea9000ee6#:~:text=REST%20suggests%20to%20create%20an,object%20on%20the%20server%20side.) you can have multiple methods for the same endpoint, so depending on the method you use, you might get different results.

In your request, you include additional information, like the city's name or coordinates. This helps the API understand which city's weather you're interested in.

The weather service's API processes your request, retrieves the current weather data for the city you specified, and sends it back to your app in a structured format, typically in a format like JSON (JavaScript Object Notation).

Your weather app can then display this weather data to the user, showing things like temperature, humidity, and conditions (sunny, rainy, etc.).

So, in this scenario:

The API endpoint is https://weather-api.com/current.
The method used is GET to request data.
The weather service processes your request and sends back the relevant weather information.
This way, your weather app can provide up-to-date weather information without having to collect and maintain all that data itself. It's like outsourcing the weather data and using the weather service's API as a bridge to access it.


Some of the examples for ~~Fake~~ APIs are:
- [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)
- [https://jsonplaceholder.typicode.com/comments](https://jsonplaceholder.typicode.com/comments)
- [https://jsonplaceholder.typicode.com/albums](https://jsonplaceholder.typicode.com/albums)

When you click on any of the above links it triggers that particular route, with `GET` method, since we can give just `GET` request to the browsers directly, that return the data in json format.

For example:
When a `GET` request is send to this [url](https://jsonplaceholder.typicode.com/albums/2), in simpler terms when someone just searches for this url then he will be getting a json object.

Result:
```json
{
    "userId": 1,
    "id": 2,
    "title": "sunt qui excepturi placeat culpa"
}
```

---










## MongoDB with NextJS

