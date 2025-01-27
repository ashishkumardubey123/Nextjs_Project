"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";


const musicSchoolContent = [
  {
    title: "Collaborative Practice Sessions",
    description:
      "Engage in real-time practice sessions with your peers, instructors, and band members. Collaborate on compositions, share musical ideas, and enhance your skills together. Our platform helps streamline your learning experience and boosts your productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Practice Sessions
      </div>
    ),
  },
  {
    title: "Live Performance Feedback",
    description:
      "Receive real-time feedback on your performances. With our platform, you can track your progress as it happens. No more uncertainty about your practice sessions. Embrace the simplicity of live feedback and continuous improvement.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
       Live Performance Feed
      </div>
    ),
  },
  {
    title: "Sheet Music Management",
    description:
      "Experience real-time updates and never stress about managing your sheet music again. Our platform ensures that you're always working with the most recent versions of your pieces, eliminating the need for constant manual updates. Stay organized, keep your practice sessions smooth, and maintain the flow of your music without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Sheet Music Management
      </div>
    ),
  },
  {
    title: "Virtual Jam Sessions",
    description:
      "Experience real-time collaboration and never worry about running out of inspiration. Our platform ensures that you can jam with others, no matter where they are. Stay connected, keep your creativity flowing, and enjoy uninterrupted musical exploration.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Virtual Jam Sessions
      </div>
    ),
  },
];


export default function WhaychooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}
