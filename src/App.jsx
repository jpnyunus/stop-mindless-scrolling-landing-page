import { useState } from 'react'
import './index.css'
import Pricing from './Components/Pricing.jsx'
import { FaArrowDown } from "react-icons/fa";
import Faq from './Components/Faq.jsx';

function App() {

  return (
    <>
      <main className='flex flex-col justify-center items-center h-screen max-w-screen-lg mx-auto relative top-1/2 gap-4'>

        <h1 className="mb-4 text-5xl font-extrabold font-title leading-none tracking-tight text-white">STOP Mindless Scrolling</h1>
          <p className="mb-6 text-xl font-normal text-center text-gray-400">
          Feeling trapped in the endless scroll? Let's hit pause, shall we? <br />
          </p>
            <a href="#section1" className="inline-flex items-center justify-center h-14 w-36 px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4
              focus:ring-blue-300"> <FaArrowDown /> </a>
      </main>


      <section id='section1' className='flex flex-col justify-center items-center max-w-screen-lg mx-auto'>
        <h2 className='mb-8 text-3xl font-extrabold font-title leading-none tracking-tight text-white'>What's This About?</h2>
        <p className="text-gray-400 font-robot font-normal text-xl text-center w-9/12">Tired of losing hours to mindless scrolling? We've got your back. Our solution combines technology and psychology to help you break free. Gain insights, set limits, and reclaim your time. It's time to scroll with purpose. <span className=' text-red-300'>Ready to take control?</span></p>
      
        <img
          className="max-w-screen-md mx-auto rounded-lg static mt-8 w-77"
          src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fb002ed2c-9b05-44d4-af1e-18de005331c7_2048x2048.jpeg"
          alt="image"
        />
      </section>

      <section className='grid grid-cols-2 gap-2 max-w-screen-md mx-auto relative top-14'>
        <div>
          <h2 className='col-span-2 mb-8 text-3xl font-extrabold font-title leading-none tracking-tight text-gray-200'>Deep Dive</h2>
          <p className='text-gray-300 col-span-2 mb-8'>Are you ready to dive deep into reclaiming your digital freedom? Let's start by understanding the root of mindless scrolling. It's not just about the time we lose, it's about the moments we miss, the connections we neglect, and the experiences left unexplored.</p>
          <p className='text-gray-300 col-span-2 mb-8'>To begin your journey, we'll delve into the patterns and triggers behind your scrolling habits. Through insightful analysis, we'll uncover where your time truly goes and illuminate the moments when you're most susceptible to distraction.</p>
        </div>

        <div className='mt-2'>
          <p className='bg-red-300 rounded-sm text-black mt-2 p-4'>But knowledge alone isn't enough. That's why we'll equip you with practical strategies and actionable insights to disrupt the cycle of mindless scrolling. From setting boundaries to creating intentional digital spaces, we'll empower you to take back control of your online experience. <br /> <br />So, are you ready to take the plunge? Let's embark on this journey together and uncover the keys to a more mindful relationship with technology. It's time to dive deep and emerge with clarity, purpose, and a renewed sense of digital well-being.</p>
        </div>
      </section>

      <section id='section2' className='grid grid-row-2 max-w-screen-md mx-auto relative top-24'>
        <div className=''>
          <p className='text-gray-300 col-span-2 mb-4'>In this deep dive, we'll shine a light on the hidden forces driving your scrolling habits. Together, we'll explore the triggers that lure you into endless digital distractions and the underlying motivations behind them.</p>
          <p className='text-gray-300 col-span-2 mb-4'>But fear not, for knowledge is power. Armed with a deeper understanding of your scrolling patterns, you'll gain the insights needed to break free from the cycle. From identifying your personal "scrolling hotspots" to learning to recognize when boredom or stress kicks in, we'll equip you with the tools to navigate the digital landscape with intentionality.</p>
        </div>

      </section>

      <section className='text-center relative top-44 h-5/6 max-w-screen-lg mx-auto'>
        <h1 className='text-4xl font-bold font-title leading-none tracking-tight text-gray-200 mb-4'>Pricing</h1>
        <p className='text-md text-gray-300 font-poppin mb-12'>Explore and choose the right package to start your journey! Each package offers different features tailored  <br /> to your needs and goals. For more information, you can check out the options below</p>

        <div className='flex justify-between gap-4'>
          <Pricing
          title="Rookie" desc='Best for Little Brain Damage' price='19$'
          list1='3 Months Support'
          list2='Regular Updates'
          list3='Community Forum Access'
          list4='Access to Basic Content'/>

          <Pricing
          title="Beast" desc='Best for Big Brain Damage' price='49$'
          list1='12 Months Support'
          list2='Full Access Library'
          list3='Priority Assistance'
          list4='Exclusive Webinars '/>
          
          <Pricing
          title="Sigma" desc='Best for Mid Brain Damage' price='29$'
          list1='6 Months Support'
          list2='Premium Content Access'
          list3='Personalized Recommendations'
          list4='Ad-Free Experience'/>
        </div>
      </section>

      <section className='text-center relative top-72 h-96 max-w-screen-lg mx-auto'>
        <h1 className='text-4xl font-bold font-title leading-none tracking-tight text-gray-200 mb-4'>FAQ</h1>

        <ul class="bg-white max-w-2xl mx-auto mt-20 divide-y shadow shadow-red-300 rounded-sm">
        <Faq title='What will i get?'
                desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci consequatur inventore provident maxime illum a illo. Facilis, labore eaque?'/>

        <Faq title='How can i cancel?'
                desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci consequatur inventore provident maxime illum a illo. Facilis, labore eaque?'/>

    
        <Faq title='Is this eBook?'
                desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci consequatur inventore provident maxime illum a illo. Facilis, labore eaque?'/>
        </ul>
        
      </section>

      </>
  )
}

export default App
