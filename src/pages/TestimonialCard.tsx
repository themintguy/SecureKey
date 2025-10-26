
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface TestimonailCardProps {
  name: string
  review: string
  place: string
  image: string
}

function TestimonailCard({ name, place, review, image }: TestimonailCardProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full px-6 md:px-16 py-8">

      <div className="md:w-1/2 w-full text-[var(--color-leaf)] text-base sm:text-xl leading-relaxed">
        <p>
          This app provides a smooth and intuitive user experience, combining simplicity with powerful functionality.
          The interface is clean, responsive, and easy to navigate, making it accessible for both beginners and advanced users.
        </p>
      </div>
      <div className="md:w-1/2 w-full bg-[var(--color-room)] rounded-2xl shadow-lg flex flex-col items-center text-center p-6 sm:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-ocean)] mb-4">
          What our client says
        </h1>

        <img
          src={image}
          alt={`${name}'s photo`}
          className="rounded-full h-40 w-40 sm:h-48 sm:w-48 mb-4 object-cover"
        />

        <h2 className="text-xl md:text-2xl text-[var(--color-ocean)] font-semibold">{name}</h2>
        <p className="text-sm md:text-base mb-3 text-[var(--color-leaf)]">{place}</p>

        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
          <FaArrowLeft size={28} color="#FFD700" className="cursor-pointer bg-[var(--color-ocean)] p-1 rounded-full" />
          
            <FaStar size={28} color="#FFD700" />
            <FaStar size={28} color="#FFD700" />
            <FaStar size={28} color="#FFD700" />
            <FaStar size={28} color="#FFD700" />
          
          <FaArrowRight size={28} color="#FFD700" className="cursor-pointer bg-[var(--color-ocean)] p-1 rounded-full" />
        </div>

        <p className="text-sm sm:text-base text-[var(--color-leaf)] leading-relaxed">
          {review}
        </p>
      </div>
    </div>
  )
}

export default TestimonailCard
