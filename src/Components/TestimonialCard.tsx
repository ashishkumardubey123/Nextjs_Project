"use client";
import { div } from "framer-motion/client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const MusicSchoolTestimonials = [
  {
    quote:
      "The music school has completely transformed my skills. The teachers are so patient and knowledgeable.",
    name: "Arjun Mehta",
    title: "Beginner Guitarist",
  },
  {
    quote:
      "I never thought I could learn to play the piano so well in such a short time. The lessons are clear and easy to follow.",
    name: "Nisha Verma",
    title: "Piano Enthusiast",
  },
  {
    quote:
      "The vocal training classes helped me improve my range and confidence. It's an amazing place for aspiring singers.",
    name: "Rahul Sharma",
    title: "Aspiring Vocalist",
  },
  {
    quote:
      "The atmosphere here is so inspiring, and the staff truly cares about each student's progress.",
    name: "Priya Kapoor",
    title: "Intermediate Violinist",
  },
  {
    quote:
      "Thanks to this school, I was able to compose my first original song. The support I received was incredible!",
    name: "Kabir Singh",
    title: "Budding Composer",
  },
  {
    quote:
      "The music theory classes gave me a deeper understanding of music and helped me in my performances.",
    name: "Anjali Jain",
    title: "Advanced Flutist",
  },
];

function musicSchoolTestimonialCard() {
  return (
    <div className=" h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">

     <h2 className=" text-3xl font-bold  text-center mb-8 z-10  ">Hear Our Harmony: voices of Success</h2>

 <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
 <div className="w-full max-w-6xl">
        <InfiniteMovingCards
          items={MusicSchoolTestimonials}
          direction="right"
          speed="slow"
        />
      </div>
 </div>
      


    </div>
  );
}

export default musicSchoolTestimonialCard;
