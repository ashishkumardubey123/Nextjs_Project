import Featuresdcourses from "@/Components/Featuresdcourses";
import HeroSaction from "@/Components/heroSaction";
import WhaychooseUs from "@/Components/WhaychooseUs";
import MusicSchoolTestimonialCard from "@/Components/TestimonialCard";
import Upcomingwebinars from "@/Components/Upcomingwebinars";
import Instructers from "@/Components/Instructers";
import Footers from "@/Components/Footers";

export default function Home() {
  return (
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] 
      ">  

     
         <HeroSaction/>
         <Featuresdcourses/>
         <WhaychooseUs/>
        <MusicSchoolTestimonialCard/>
        <Upcomingwebinars/>
        <Instructers/>
        <Footers/>
         </main>
  );
}
