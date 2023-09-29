import React from "react";
import Cards from "./components/Cards";
import Search from "./components/Search";

const postData = [
  {
    title: "The Art of Coffee Brewing",
    desc: "Explore the fascinating world of coffee brewing methods. From pour-over to espresso, we delve into the rich history and techniques that make each cup a unique experience.",
    rating: 4.8,
    tags: ["Coffee", "Brewing", "Barista", "Coffee Culture"],
  },
  {
    title: "Discovering Hidden Gems in Tokyo",
    desc: "Embark on a journey through the vibrant streets of Tokyo. Uncover secret spots, mouthwatering street food, and cultural treasures that await you in the heart of Japan's bustling metropolis.",
    rating: 4.9,
    tags: ["Travel", "Tokyo", "Adventure", "Culture"],
  },
  {
    title: "Healthy Eating Habits for a Balanced Life",
    desc: "Learn how to maintain a nutritious diet and make smart food choices. We provide tips, recipes, and insights into creating a healthier lifestyle through mindful eating.",
    rating: 4.7,
    tags: ["Health", "Nutrition", "Diet", "Wellness"],
  },
  {
    title: "The Art of Gardening",
    desc: "Discover the joy of gardening and cultivating your own green oasis. Whether you have a small balcony or a spacious backyard, we share gardening tips, plant care advice, and inspiring garden designs.",
    rating: 4.6,
    tags: ["Gardening", "Plants", "Landscaping", "Outdoor"],
  },
  {
    title: "Mastering the Piano: A Step-by-Step Guide",
    desc: "Embark on a musical journey and learn to play the piano like a pro. Our comprehensive guide covers everything from basic scales to complex compositions, helping you unleash your inner pianist.",
    rating: 4.9,
    tags: ["Music", "Piano", "Learning", "Music Theory"],
  },
  {
    title: "The Science of Space Exploration",
    desc: "Dive into the cosmos and explore the wonders of space. From the latest Mars rover missions to the mysteries of black holes, we bring you the latest in space science and exploration.",
    rating: 4.8,
    tags: ["Space", "Science", "Astronomy", "NASA"],
  },
  {
    title: "Sustainable Living: Eco-Friendly Tips",
    desc: "Join the eco-conscious movement and adopt sustainable practices in your daily life. We offer eco-friendly tips, product reviews, and DIY projects to help you reduce your carbon footprint.",
    rating: 4.7,
    tags: ["Sustainability", "Environment", "Green Living", "Eco-Friendly"],
  },
  {
    title: "The Art of Photography",
    desc: "Capture life's moments through the lens of a camera. Learn photography techniques, composition, and post-processing skills to transform your snapshots into stunning works of art.",
    rating: 4.6,
    tags: ["Photography", "Camera", "Composition", "Visual Arts"],
  },
  {
    title: "Culinary Adventures: Exploring World Cuisine",
    desc: "Embark on a culinary journey around the world. From Italian pasta to Thai curry, we take you on a gastronomic adventure, sharing recipes and stories from diverse culinary traditions.",
    rating: 4.8,
    tags: ["Cooking", "Food", "Cuisine", "Recipes"],
  },
  {
    title: "Hiking Trails for Nature Enthusiasts",
    desc: "Connect with nature by exploring scenic hiking trails. Discover breathtaking landscapes, wildlife encounters, and hiking tips to make the most of your outdoor adventures.",
    rating: 4.9,
    tags: ["Hiking", "Nature", "Outdoors", "Adventure"],
  },
];

const postDataFetch = async () => {
  const posts = await fetch("https://dummyjson.com/posts");
  const data = await posts.json();
  console.log(data);
};

postDataFetch();

const App = () => {
  return (
    <div className="m-2 sm:mx-4 sm:my-10 md:mx-20">
      <Search />

      <h1 className="text-2xl font-semibold mt-5 mb-2">Your posts</h1>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {postData.map((post) => (
          <Cards
            title={post.title}
            desc={post.desc}
            rating={post.rating}
            tags={post.tags}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
