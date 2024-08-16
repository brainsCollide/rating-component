import React, { useState } from 'react';
import star from './assets/icon-star.svg';
import phone from './assets/phone.svg'


function app() {
  const rating = [1, 2, 3, 4, 5];
  const [selectedRating, setSelectedRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRating = (rate) => {
    selectedRating === rate ? setSelectedRating(0) : setSelectedRating(rate);
  }

  const handleSubmit = () => {
    if (selectedRating > 0) {
      setIsSubmitted(true);
    }
  }

  const handleReset = () => {
    setSelectedRating(0);
    setIsSubmitted(false);
  }

  return(
   <>
     <div className='flex items-center justify-center h-screen w-full bg-radial-zinc-to-white'>
      <div className=' bg-slate-700 p-10 rounded-xl w-96 relative' alt='card'>
        {isSubmitted ? (
          <div className='flex flex-col justify-center items-center text-center '>
            <button 
                onClick={handleReset} 
                className='text-orange-500 text-xl font-semibold top-2 right-4 absolute'
              >
                x
              </button>
            <img src={phone} alt='phone' className='w-40 h-4a0' />
            <p className='bg-slate-900 text-orange-500 text-sm font-light my-4 py-1 px-2 rounded-full' >You selected a <strong>{selectedRating}</strong> out of {rating.length}.</p>
            <h1 className='text-xl font-semibold my-2 text-white'>Thank you!</h1>
            <p className='text-m my-4 text-zinc-400'> We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>
          </div>
        ) : (
          <div>
            <div>
              <div className='relative flex items-center justify-center w-8 h-8'>
                <div className='absolute inset-0 bg-neutral-700 rounded-full'></div>
                <img src={star} alt='star' className='relative w-4 h-4 z-10' />
              </div>
              <h1 className='text-xl font-semibold my-4 text-white'>How did we do?</h1>
              <p className='text-m my-4 text-zinc-400'> Please let us know how we did with your support request. All feedback is appreciated 
                  to help us improve our offering!
              </p>
            </div>
            <div className="flex flex-row">
            {rating.map((rate) => (
              <div key={rate} className='flex mr-5 my-4'>
                <h3 className={`${
                      selectedRating === rate ? 'bg-white text-black' : 'bg-zinc-700 text-zinc-400'
                    } hover:bg-orange-600 cursor-pointer text-m font-bold py-2 px-4 rounded-full`}
                  onClick={() => handleRating(rate)}
                >
                  {rate}
                </h3>
              </div>
              ))}
            </div>
            <div className='flex justify-center'>
              <button>
                <h3 className='bg-orange-600 hover:bg-blue-700 text-white font-bold mt-5 py-2 px-28 rounded-full' onClick={handleSubmit}>Submit</h3>
              </button>
            </div>
          </div>
        )}
      </div> 
    </div>
   </>
  );
}

export default app;