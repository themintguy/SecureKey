import Footer from "./Footer";
import Generate from "./Generate";
import Navbar from "./Navbar";
import TestimonailCard from "./TestimonialCard";
import Faqs from "./Faqs"

const Home = () => {
  return (
    <div className="bg-[var(--color-night)]">
      <Navbar />
      
      <Generate />
      <h1 className="text-center font-bold text-[var(--color-ocean)] text-4xl mt-48">
        TESTIMONIALS
      </h1>
      <div className="mt-10 flex justify-center items-center">
        <TestimonailCard
          name="Ali Ahmed"
          place="Hargeisa , Somaliland"
          review="A clean interface and smooth performance — highly recommend!"
          image="https://i.pinimg.com/236x/9b/18/da/9b18da370d20a0d3c4efcbbb34bdee3c.jpg"
        />
      </div>
      <Faqs
      />
      

      <Footer />
    </div>
  );
};

export default Home;
