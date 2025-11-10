import Footer from "./Footer"
import Navbar from "./Navbar"

const About = () => {
  return (
    <div className="text-[var(--color-leaf)] text-center">
      <Navbar/>
      <div className="bg-[var(--color-room)]">
        <h1 className="text-4xl pt-12 font-bold text-[var(--color-ocean)] mb-6 text-center">About SecureKey</h1>

        <h3 className="text-2xl p-6 mt-2 text-[var(--color-ocean)] font-bold">About the App:</h3>
        <p className="text-[var(--color-leaf)] mb-6 leading-relaxed">
          SecureKey is a modern and easy-to-use platform<br/>
          designed to help users generate and manage secure keys efficiently.<br/>
          Whether you need strong passwords, encryption keys, or secure access tokens, SecureKey simplifies the process.
        </p>

        <h3 className="text-2xl p-6 text-[var(--color-ocean)] font-bold">Why Use SecureKey?</h3>
        <ul className="mb-6 list-disc list-inside space-y-2">
          <li>Generates highly secure keys and passwords.</li>
          <li>Provides an intuitive interface with smooth performance.</li>
          <li>Reduces the risk of weak passwords and security breaches.</li>
          <li>Fast and reliable, working directly in your browser.</li>
        </ul>

        <h3 className="text-2xl p-6 text-[var(--color-ocean)] font-bold">What Makes SecureKey Special?</h3>
        <ul className="mb-6 list-disc list-inside space-y-2">
          <li>Intuitive design for both beginners and advanced users.</li>
          <li>Supports multiple types of key generation.</li>
          <li>Responsive layout that works perfectly on desktop and mobile.</li>
          <li>Lightweight and secure, with no unnecessary dependencies.</li>
        </ul>

        <Footer/>
      </div>
    </div>
  )
}

export default About
