import cards from '../../assets/LandingPage/cards.svg'
import pen from '../../assets/LandingPage/pen.svg'
import eye from '../../assets/LandingPage/eye.svg'
import { SignInButton } from '@clerk/clerk-react'

export const Hero = () => {
  return (
    <div className="px-8 sm:px-30">
        <div className="text-black">
            <h1 className="text-2xl font-bold mb-2">Key Features</h1>
            <p className="text-xs text-gray-500 mb-4">Explore the Powerful features that make FlashCard the ultimate learning companion.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-4">
                <div className="border border-gray-200 rounded-lg p-4 ">
                    <img src={cards} width={20} />
                    <h2 className='font-bold mt-2'>Create Custom Flashcards</h2>
                    <p className='text-sm text-gray-500'>Design your own flashcards with text, images, and audio to suit your learning style.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                    <img src={pen} width={20} />
                    <h2 className='font-bold mt-2'>Smart Study Modes</h2>
                    <p className='text-sm text-gray-500'>Choose from various study modes like spaced repetition, quizzes, and games to enhance retention.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                    <img src={eye} width={20} />
                    <h2 className='font-bold mt-2'>Progress Tracking</h2>
                    <p className='text-sm text-gray-500'>Monitor your learning progress with detailed analytics and insights.</p>
                </div>
            </div>
        </div>
        <div className="text-center mt-20">
            <h1 className='text-2xl text-black font-bold mb-2' >Ready to Elevate your Learning Game?</h1>    
            <p className='text-sm text-gray-500 mb-4'>Join thousands of learners who have transformed their Learning habits with FlashCard.</p>
            <SignInButton>
              <div className="bg-blue-500 w-30 m-auto text-white py-3 px-3 text-xs rounded hover:bg-blue-700 transition-all duration-200 cursor-pointer">
                Get Started
              </div>
            </SignInButton>
        </div>
    </div>
  )
}
