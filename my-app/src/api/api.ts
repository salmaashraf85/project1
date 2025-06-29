import { LearningItem,DetailedCourse } from "../types/courseTypes";

export const myLearning: LearningItem[] = [
  {
    title: "Becoming a Photographer",
    author: "Clara Manning",
    progress: 69,
    img: "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxEYXNoYWhlJTIwUGFyayUyQyUyMFNoZW56aGVuJTIwU2hpJTJDJTIwQ2hpbmF8ZW58MXx8fHwxNjUxNzYxNjEw&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    title: "Design Thinking 2.0",
    author: "Chris Kinley",
    progress: 27,
    img: "https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg",
    
  },
];

export const courseItems: LearningItem[] = [
  ...myLearning,
  {
    title: "Product Photography",
    author: "Lena Gold",
    progress: 11,
    img: "https://assets.api.uizard.io/api/cdn/stream/937fc2b0-e1c5-4a5a-93f7-34d23cd5ca6d.jpg",
  },
  {
    title: "Learn How to make portraits",
    author: "Maria",
    progress: 27,
    img: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMXx8cG9ydGFpdHxlbnwxfHx8fDE2NzI5OTU4MzA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];


export const DetailedItems: DetailedCourse[] = [
  {
    title: "Becoming a Photographer",
    author: "Clara Manning",
    img: "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxEYXNoYWhlJTIwUGFyayUyQyUyMFNoZW56aGVuJTIwU2hpJTJDJTIwQ2hpbmF8ZW58MXx8fHwxNjUxNzYxNjEw&ixlib=rb-1.2.1&q=80&w=1080",
    btn1:"",
    btn2:"",
    time:"43m",
    price:"",
    description:"The online course was made for you if you are interested  in taking great digital photos and learning how to make photography unique and outstanding.",
    rating:4.7,
    authorImg:"https://assets.api.uizard.io/api/cdn/stream/01585e0f-4fe2-478d-930d-de730b3ccdc0.jpg"
  },
  {
    title:"Building iOS15 App",
    author: "Tom Colinos",
    img: "https://assets.api.uizard.io/api/cdn/stream/c4abf0fb-78c0-4ced-9b10-ce75c6350a1c.jpg",
    btn1:"",
    btn2:"",
    time:"1h 13m",
    price:"",
    description:"In this course you will learn how to build iOS app. We will go through the whole process beginning with first line of code,managing the user interface storyboard and creating logic.",
    rating:5.0,
    authorImg:"https://assets.api.uizard.io/api/cdn/stream/01585e0f-4fe2-478d-930d-de730b3ccdc0.jpg",
    topics:{
      "Introduction":1,
      "Software setup":3,
      "UI fundamentals":6,
      "Testing and finishing":2,
      "Skill test":1
    }
  }

];

export const courses = [
  {
    title: "TypeFace Design",
    author: "Gary Saltz",
    img: "https://assets.api.uizard.io/api/cdn/stream/8a82fb6d-e077-4930-b16d-a47ec1537f4a.jpg"
  },
  {
    title: "Building iOS15 App",
    author: "Tom Colins",
    img: "https://assets.api.uizard.io/api/cdn/stream/c4abf0fb-78c0-4ced-9b10-ce75c6350a1c.jpg"
  },
  {
    title: "Excel:Formulas and functions",
    author: "Mike Curtis",
    img: "https://assets.api.uizard.io/api/cdn/stream/6b7ace23-9ec2-4b4e-963f-c0097a8bba79.jpg"
  }
];

