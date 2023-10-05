# MongoDB

## Setting up MongoDB Atlas


### Step 1

#### Make account on MongoDB

Create an account in [MongoDB](https://www.mongodb.com/)

### Step 2
#### Create New Project

Create a `New Project`,
- By clicking on the dropdown that is on top left, just below Atlas logo.
- Give the project a name. Let's name it `IO`, you can chose any other name
- Keep the default options.
    - It will ask you to add members and their roles. For now just keep it defualt so that only you are the owner of that repository.


### Step 3

#### Create Cluster

- Go to the [Main Page](https://cloud.mongodb.com/)
- Click on Create a deplyment option that is under `Overview > Deployment` section. 
- It will ask you to chose the database template. Select **M0** as it is free tier provider with sufficient resources for our project.
- Select the provider. Here I will be using **AWS**, which is the default option.
- Select the region. You should chose that location that is nearest to the location of your users, and not actually your location. For now, I will be selecting **Mumbai**.
- Give the cluster a name. I will be naming it `IO-Cluster`.
- Hit `Create`.

### Step 4 

#### Add specification

- It will ask for you the **username** and **password**. Make sure you save both somewhere as we require both of these later on.
- It will ask you Where would you like to connect from? Keep the default perferencee `My Local Environment`.
- After that in the Add entries to your IP Access List section. Click on `Add My Current IP` and optionally you add `0.0.0.0` in the ip so that it can be access by user all over the globe and in the Description you may write `Anywhere from the world`.

> If this setting is not done correctly then warnings may appear like this "Current IP Address not added. You will not be able to connect to databases from this address."

- Finally click `Finish and Close`
- It will take some time to create the cluster. You can see the progress in the `Overview` section.

>  You can continue to add and update access rules in Database Access and Network Access section.

### Step 5

#### Configuring VS Code to connect Atlast

- Go to the `Deployment > Database` section. If you are able to see a cluster with the name you gave without any warning then congratulations you are on right track.
- In the cluster card, `IO-Cluster`. Click on `Connect`.
- After that you have to select how do you want to connect MongoDB to you project. Select `Drivers`.
- Read the instructions that come after this.
- You need to copy the `Connectin string` that stars with `mongodb+src://...`.
- Using this particular string you can connect to your database from anywhere in the world. So make sure you don't share this with anyone. Keep that in [.env](https://medium.com/how-to-react/using-env-file-in-react-js-b2714235e77e) file.


*And done.. You are all set to use MongoDB Atlas using your code editor.*

---