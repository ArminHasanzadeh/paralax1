import React from 'react';
import Icon from '../../../public/icon.svg'
import Icon2 from '../../../public/icon-black.svg'
import Img7 from '../../../public/pic (24).jpg'
import Img8 from '../../../public/pic (12).jpg'
import Img9 from '../../../public/pic (13).jpg'
import Img10 from '../../../public/pic (21).jpg'

import './finalmain.css'

function Finalmain() {
    return (
       <>
       <section className='w-[100%] lg:h-[50vh]   flex justify-center items-center mb-44!'>
        <div className=' w-[90%] h-[80%] lg:flex-row flex-col  flex'>
        <div className='mainsec lg:w-[70%] h-[100%]  '>
            <div className='text1 w-[100%] h-[20%] flex justify-start items-center text-4xl text-white '><p>OUR SERVICES</p></div>
            <div className='text2 w-[80%] h-[80%] flex justify-start items-center text-2xl text-white '><p>As landscaping specialists, we offer everything from innovative designs to the complete construction of gardens or terraces that reflect your style and adapt to your needs. We also provide comprehensive gardening services: pruning, plot cleaning, technical advice, periodic maintenance of terraces and gardens, installation of automatic irrigation systems, installation of natural and artificial grass, and more.</p></div>
        </div>
        <div className='icon lg:w-[30%] h-[100%] flex justify-center items-center overflow-hidden'>
          <figure className='flex w-[100%] h-[100%] justify-center items-center'>
          <img className='icon1 w-[100%] h-[100%] ' src={Icon} alt="" />
          <img className='icon2 w-[100%] h-[100%] ' src={Icon2} alt="" />
          </figure>
        </div>
        </div>
       </section>
       <section className='lastproject w-[100%] lg:h-[100vh]  flex justify-center items-center flex-col '>
       <div className='flex justify-center items-center flex-col w-[80%] h-[66.8%]  '>
       <h3 className='flex justify-start items-center w-[100%] h-[10%] text-3xl text-white'> LAST PROJECTS</h3>
        <div className='finalimg w-[100%] h-[90%] gap-5 flex justify-center items-center flex-wrap'>
            <figure className='lg:w-[calc(25%_-_28px)] w-[calc(50%_-_28px)]'><img src={Img7} alt="" /><span>RS_08</span></figure>
            <figure className='lg:w-[calc(25%_-_28px)] w-[calc(50%_-_28px)]'><img src={Img8} alt="" /><span>RS_07</span></figure>
            <figure className='lg:w-[calc(25%_-_28px)] w-[calc(50%_-_28px)]'><img src={Img9} alt="" /><span>RS_01</span></figure>
            <figure className='lg:w-[calc(25%_-_28px)] w-[calc(50%_-_28px)]'><img src={Img10} alt="" /><span>RS_05</span></figure>     
        </div>
       </div>
       </section>
       </>
    );
}

export default Finalmain;