import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const InfoBox = ({text, link, btnText}) => (
  <div className="info-box">
    <p className='font-medium sm:text-xl text-center'>
      {text}
    </p>
    <Link to={link} className='neo-brutalism-white neo-btn'>        
          {btnText}
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
  </div>
)

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Fahim Kamal</span>
        👋
        <br />
        A Game Developer from Bangladesh, crafting immersive experiences with Unreal Engine & Unity.
        {/* A Game Developer from Bangladesh, crafting immersive experiences over the years.  */}
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Crafted gameplay experiences <br /> across multiple projects, mastering new skills at every Level.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Contributed to and shaped multiple game projects, <br /> growing from Junior to a Game Mechanics Engineer. 
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Explore My Work
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Have an idea or need a dev? <br/> Let's bring your vision to life-just a message away!
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
