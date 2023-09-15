import { v4 as uuidv4 } from 'uuid';

// Array of movie objects with unique IDs generated using uuidv4
const movies = [
  {
    id: uuidv4(),
    title: "Punisher",
    description: "Action",
    rating: 2,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d9/Punisher_ver2.jpg",
    desc: "The Punisher is an Action Movie About lorem",
    videoLink: "https://www.youtube.com/embed/q7CMnRv8Mqc?si=BP3_N5PoX176BKOQ"
  },
  {
    id: uuidv4(),
    title: "Hitman",
    description: "Action",
    rating: 3,
    imageUrl: "https://m.media-amazon.com/images/I/71PU4YDq+mL._AC_UF894,1000_QL80_.jpg",
    videoLink: "https://www.youtube.com/embed/q7CMnRv8Mqc?si=BP3_N5PoX176BKOQ",
    desc: "The Punisher is an Action Movie About lorem",
  },
  {
    id: uuidv4(),
    title: "Resident Evil",
    description: "Action",
    rating: 2,
    videoLink: "https://www.youtube.com/embed/q7CMnRv8Mqc?si=BP3_N5PoX176BKOQ",
    desc: "The Punisher is an Action Movie About lorem",
    imageUrl: "https://tube.hk/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fimages%2Ftitles%2Fmovie%2F571%2Fposters%2Fresident_evil-us_teaser.jpg&w=1920&q=75",
  },
  {
    id: uuidv4(),
    desc: "The Punisher is an Action Movie About lorem",
    title: "Prince of Persia",
    description: "Action",
    rating: 3,
    imageUrl: "https://flxt.tmsimg.com/assets/p3546197_p_v8_av.jpg",
    videoLink: "https://www.youtube.com/embed/q7CMnRv8Mqc?si=BP3_N5PoX176BKOQ"
  },
];

export default movies;
