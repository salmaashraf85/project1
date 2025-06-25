export interface LearningItem {
  title: string;
  author: string;
  progress?: number;
  img: string;
  width?:  object | string | number;
  sx?:object;
  onClick?: () => void;
}

export interface Course extends LearningItem {
  title: string;
  author: string;
  time: string;
  rating: number;
  price: string;
  img: string;
  authorImg: string;
 
}

export interface DetailedCourse extends Course {
  description:string;
  btn1:string;
  btn2:string;
  overlay?:React.ReactNode;
}

