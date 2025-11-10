import Footer from "./Footer"
import Navbar from "./Navbar"

const KnowMore = () => {
  return (
    <div className="text-[var(--color-leaf)] text-center">
      <Navbar/>
      <div className="bg-[var(--color-room)]">
        <h3 className="text-2xl p-6 text-[var(--color-ocean)] font-bold">Know More About Passwords</h3>
        <p className="text-[var(--color-leaf)] mb-4 leading-relaxed">
          Passwords are the first line of defense for protecting our personal information, online accounts, and digital assets.
          They ensure that only authorized users can access sensitive data and prevent unauthorized access.
        </p>

        <h4 className="text-xl p-4 text-[var(--color-ocean)] font-semibold">What Makes a Password Strong?</h4>
        <ul className="mb-4 list-disc list-inside space-y-2">
          <li>Length: At least 12–16 characters.</li>
          <li>Complexity: Mix of uppercase and lowercase letters, numbers, and special symbols.</li>
          <li>Unpredictability: Avoid common words, sequences, or personal info like birthdays.</li>
          <li>Uniqueness: Each account should have a unique password.</li>
        </ul>

        <h4 className="text-xl p-4 text-[var(--color-ocean)] font-semibold">Tips for Creating Strong Passwords</h4>
        <ul className="mb-4 list-disc list-inside space-y-2">
          <li>Use a password manager to generate and store passwords securely.</li>
          <li>Avoid reusing passwords across multiple accounts.</li>
          <li>Update passwords periodically, especially for critical accounts.</li>
        </ul>

        <h4 className="text-xl p-4 text-[var(--color-ocean)] font-semibold">Why Strong Passwords Are Important</h4>
        <ul className="mb-6 list-disc list-inside space-y-2">
          <li>Protects your accounts from hackers and identity theft.</li>
          <li>Prevents unauthorized access to sensitive personal or financial information.</li>
          <li>Ensures your online privacy and digital safety.</li>
        </ul>

        <p className="text-[var(--color-leaf)] mb-12 leading-relaxed">
          SecureKey helps you generate strong, random passwords that are impossible to guess, so you can stay safe online without the hassle of remembering complex combinations.
        </p>
        <Footer/>
      </div>
    </div>
  )
}

export default KnowMore;
