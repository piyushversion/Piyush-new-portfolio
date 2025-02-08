import React from 'react';
import styled from 'styled-components';

const Form = () => {

  return (


      <div className="contact-form w-full bg-[#FAF5FF] dark:bg-black dark:text-white p-5 rounded-lg shadow-[0_0_10px_#ff6384] dark:shadow-[0_0_10px_#6b7280] dark:border-gray-500 border border-[#ff6384] ">

        <span className="font-rubik text-3xl mb-3 block">Get in Touch</span>

        <form action='https://getform.io/f/bejjgnka' method='POST' className='font-nuninto flex flex-col'>

          <label htmlFor="name" className='mb-2'>Name:</label>
          <input type="text" name='name' id='name' required className='p-2 rounded-md mb-5 transition-all duration-300 border border-[#ff6384]/30 outline-0 focus:shadow-[0_0_5px_#ff6384] focus:scale-[1.02] dark:focus:shadow-[0_0_5px_#6b7280] dark:border dark:border-[#6b7289]/30 dark:bg-black'/>

          <label htmlFor="email" className='mb-2'>Email:</label>
          <input type="email" id="email" name="email" required className='p-2 rounded-md mb-5 transition-all duration-300 border border-[#ff6384]/30 outline-0 focus:shadow-[0_0_5px_#ff6384] focus:scale-[1.02] dark:focus:shadow-[0_0_5px_#6b7280] dark:border dark:border-[#6b7289]/30 dark:bg-black'/>

          <label htmlFor="message" className='mb-2'>Message:</label>
          <textarea id="message" name="message" required defaultValue={" "} className='resize-none p-2 rounded-md mb-5 transition-all duration-300 border border-[#ff6384]/30 outline-0 focus:shadow-[0_0_5px_#ff6384] focus:scale-[1.02] dark:focus:shadow-[0_0_5px_#6b7280] dark:border dark:border-[#6b7289]/30 dark:bg-black' />

          {/* <button type="submit" className='bg-[#ff6384] text-[#fff] rounded-[5px] px-5 py-2 text-base cursor-pointer transistion-all duration-300 hover:scale-[1.02] self-center'>Connect</button> */}

            <button alt="connect" className='formbtn rounded-r-xl rounded-bl-xl self-center'>
              <i>c</i>
              <i>o</i>
              <i>n</i>
              <i>n</i>
              <i>e</i>
              <i>c</i>
              <i>t</i>
            </button>

        </form>
        
      </div>

  );
}

export default Form;