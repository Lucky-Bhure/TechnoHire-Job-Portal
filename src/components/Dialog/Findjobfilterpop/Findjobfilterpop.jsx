import React ,{useState} from  'react'
import Findjobsfilterheader from '../../../pages/modules/Findajob/Findjobsfilterheader/Findjobsfilterheader';
import { MdCurrencyRupee } from "react-icons/md";

const Findjobfilterpop = ({onclose}) => {
    const handelClose = (e)=>{
        if(e.target.id ==="wraper" ) onclose();
    }


  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
        flex justify-center items-center  ' id='wraper' onClick={handelClose}>
            <div className=' flex flex-col w-[75%] ' >
                <button className='text-white text-xl place-self-end'
                onClick={()=>onclose()} >X</button>
                <div className='bg-white p-2 roundedv   '>
                    {/* <Findjobsfilterheader/> */}
                   <form action="#">
                    <div>
                        <div className='mx- border mt-4 border-l-0 border-t-blue-500 border-b-0  border-r-0  mb-12 flex ' >
                          <div className='flex flex-col  p-10 w-[18%] border-[0.5px] border-l-0 border-t-0 border-b-0   border-r-blue-700' >  
                           <h1 className='mt-3 font-normal font-inter text-lg  ' > Experience </h1> 
                           <div className='mt-3' >

                           <div className="flex items-center gap-2">
                              <input type="radio" id="fresher" name="options" value="option1" 
                                    className="peer " />
                              <label htmlFor="fresher" 
                                   className="ml-1  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                  Freshers
                              </label>
                          </div>

                          <div className="flex items-center gap-2">
                              <input type="radio" id="1year" name="options" value="option2" 
                                    className="peer mt-2" />
                              <label htmlFor="1year" 
                                    className="ml-1 mt-2 font-inter cursor-pointer font-normal text-sm text-[#464D61] peer-checked:text-blue-500">
                                  1 - 2 Years 
                              </label>
                          </div>

                          <div className="flex items-center gap-2">
                              <input type="radio" id="2year" name="options" value="option3" 
                                    className="peer mt-2" />
                              <label htmlFor="2year" 
                                    className="ml-1 mt-2 font-inter cursor-pointer font-normal text-sm text-[#464D61] peer-checked:text-blue-500">
                                  2 - 4 Years 
                              </label>
                          </div>

                          <div className="flex items-center gap-2">
                              <input type="radio" id="4year" name="options" value="option4" 
                                    className="peer mt-2" />
                              <label htmlFor="4year" 
                                    className="ml-1 mt-2 font-inter cursor-pointer font-normal text-sm text-[#464D61] peer-checked:text-blue-500">
                                  4 - 5 Years 
                              </label>
                          </div>

                          <div className="flex items-center gap-2">
                              <input type="radio" id="6year" name="options" value="option5" 
                                    className="peer mt-2" />
                              <label htmlFor="6year" 
                                    className="ml-1 mt-2 font-inter cursor-pointer font-normal text-sm text-[#464D61] peer-checked:text-blue-500">
                                  6 - 7 Years 
                              </label>
                          </div>

                          <div className="flex items-center gap-2">
                              <input type="radio" id="8year" name="options" value="option6" 
                                    className="peer mt-2" />
                              <label htmlFor="8year" 
                                    className="ml-1 mt-2 font-inter cursor-pointer font-normal text-sm text-[#464D61] peer-checked:text-blue-500">
                                  8 - 9 Years 
                              </label>
                          </div>

                          <div className="flex items-center gap-2">
                              <input type="radio" id="10year" name="options" value="option7" 
                                    className="peer mt-2" />
                              <label htmlFor="10year" 
                                    className="ml-1 mt-2 font-inter cursor-pointer font-normal text-sm text-[#464D61] peer-checked:text-blue-500">
                                  10 - 15 Years 
                              </label>
                          </div>

                          <div className="flex items-center gap-2">
                              <input type="radio" id="15year" name="options" value="option8" 
                                    className="peer mt-2" />
                              <label htmlFor="15year" 
                                    className="ml-1 mt-2 font-inter cursor-pointer font-normal text-sm text-[#464D61] peer-checked:text-blue-500">
                                  15 + Years 
                              </label>
                          </div>
                          
                           </div> 
                           </div>

                           <div className='flex flex-col   p-10  w-[25%] border-[0.5px] border-l-0 border-t-0 border-b-0   border-r-blue-700' >  
                              <h1 className='mt-3 font-normal font-inter text-lg  ' > Salary </h1> 
                              <div className='mt-3' >

                              <div className="flex items-center gap-2">
                                  <input type="radio" id="5k" name="salary" value="rupee1" 
                                        className="peer" />
                                  <label htmlFor="5k" 
                                      className="ml-1  flex items-center gap-1 font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                      <MdCurrencyRupee/>5000 - <MdCurrencyRupee/>10000
                                  </label>
                              </div>
                                
                              <div className="flex items-center gap-2">
                                  <input type="radio" id="15k" name="salary" value="rupee2" 
                                        className="peer mt-2" />
                                  <label htmlFor="15k" 
                                      className="ml-1 mt-2 flex items-center gap-[0.5px]  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                      <MdCurrencyRupee/>15000 - <MdCurrencyRupee/>25000
                                  </label>
                              </div>
                              <div className="flex items-center gap-2">
                                  <input type="radio" id="30k" name="salary" value="rupee3" 
                                        className="peer mt-2" />
                                  <label htmlFor="30k" 
                                      className="ml-1 mt-2 flex items-center gap-[0.5px]  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                      <MdCurrencyRupee/>30000 - <MdCurrencyRupee/>45000
                                  </label>
                              </div>

                              <div className="flex items-center gap-2">
                                  <input type="radio" id="50k" name="salary" value="rupee4" 
                                        className="peer mt-2" />
                                  <label htmlFor="50k" 
                                      className="ml-1 mt-2 flex items-center gap-[0.5px]  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                      <MdCurrencyRupee/>50000 - <MdCurrencyRupee/>65000
                                  </label>
                              </div>

                              <div className="flex items-center gap-2">
                                  <input type="radio" id="70k" name="salary" value="rupee5" 
                                        className="peer mt-2" />
                                  <label htmlFor="70k" 
                                      className="ml-1 mt-2 flex items-center gap-[0.5px]  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                      <MdCurrencyRupee/>70000 - <MdCurrencyRupee/>90000
                                  </label>
                              </div>

                              <div className="flex items-center gap-2">
                                  <input type="radio" id="100k" name="salary" value="rupee6" 
                                        className="peer mt-2" />
                                  <label htmlFor="100k" 
                                      className="ml-1 mt-2 flex items-center gap-[0.5px]  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                      <MdCurrencyRupee/>100000 - <MdCurrencyRupee/>150000
                                  </label>
                              </div>

                              <div className="flex items-center gap-2">
                                  <input type="radio" id="200k" name="salary" value="rupee7" 
                                        className="peer mt-2" />
                                  <label htmlFor="200k" 
                                      className="ml-1 mt-2 flex items-center gap-[0.5px]  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                      <MdCurrencyRupee/>200000  +
                                  </label>
                              </div>
                           </div>
                          </div>
                           <div className='flex flex-col  p-10  w-[20%] border-[0.5px] border-l-0 border-t-0 border-b-0   border-r-blue-700' >  
                           <h1 className='mt-3 -500 ' > Job Type </h1> 
                           <div className='mt-3  ' >

                              <div className="flex items-center gap-2">
                                      <input type="checkbox" id="All" name="jobtype" value="" 
                                            className="peer " />
                                      <label htmlFor="All" 
                                          className="ml-1   font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                          All
                                      </label>
                                  </div>

                                  <div className="flex items-center gap-2">
                                      <input type="checkbox" id="fulltime" name="jobtype" value="" 
                                            className="peer mt-2" />
                                      <label htmlFor="fulltime" 
                                          className="ml-1 mt-2  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                          Full Time
                                      </label>
                                  </div>

                                  <div className="flex items-center gap-2">
                                      <input type="checkbox" id="internship" name="jobtype" value="" 
                                            className="peer mt-2" />
                                      <label htmlFor="internship" 
                                          className="ml-1 mt-2  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                          Internship
                                      </label>
                                  </div>

                                  <div className="flex items-center gap-2">
                                      <input type="checkbox" id="remote" name="jobtype" value="" 
                                            className="peer mt-2" />
                                      <label htmlFor="remote" 
                                          className="ml-1 mt-2  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                          Remote
                                      </label>
                                  </div>


                                  <div className="flex items-center gap-2">
                                      <input type="checkbox" id="parttime" name="jobtype" value="" 
                                            className="peer mt-2" />
                                      <label htmlFor="parttime" 
                                          className="ml-1 mt-2  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                          Part Time
                                      </label>
                                  </div>


                                  <div className="flex items-center gap-2">
                                      <input type="checkbox" id="contract" name="jobtype" value="" 
                                            className="peer mt-2" />
                                      <label htmlFor="contract" 
                                          className="ml-1 mt-2  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                          Contract Base
                                      </label>
                                  </div>

                                  <div className="flex items-center gap-2">
                                      <input type="checkbox" id="temporary" name="jobtype" value="" 
                                            className="peer mt-2" />
                                      <label htmlFor="temporary" 
                                          className="ml-1 mt-2  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                          Temporary
                                      </label>
                                  </div>

                           </div>
                           </div>

                           <div className='flex flex-col  p-10   w-[25%] border-[0.5px] border-l-0 border-t-0 border-b-0   border-r-blue-700' >  
                           <h1 className='mt-3 -500 ' > Education </h1> 
                           <div className='mt-3 ' >
                              <div className="flex items-center gap-2">
                                  <input type="checkbox" id="EAll" name="education" value="" 
                                            className="peer " />
                                      <label htmlFor="EAll" 
                                          className="ml-1   font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                          All
                                      </label>
                                  </div>

                                  <div className="flex items-center gap-2">
                                  <input type="checkbox" id="high" name="education" value="" 
                                            className="peer mt-2" />
                                      <label htmlFor="high" 
                                          className="ml-1 mt-2  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                          High School
                                      </label>
                                  </div>

                                  <div className="flex items-center gap-2">
                                  <input type="checkbox" id="intermediate" name="education" value="" 
                                            className="peer mt-2" />
                                      <label htmlFor="intermediate" 
                                          className="ml-1 mt-2  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                          Intermediate
                                      </label>
                                  </div>

                                  <div className="flex items-center gap-2">
                                  <input type="checkbox" id="graduation" name="education" value="" 
                                            className="peer mt-2" />
                                      <label htmlFor="graduation" 
                                          className="ml-1 mt-2  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                          Graduation
                                      </label>
                                  </div>

                                  <div className="flex items-center gap-2">
                                  <input type="checkbox" id="master" name="education" value="" 
                                            className="peer mt-2" />
                                      <label htmlFor="master" 
                                          className="ml-1 mt-2  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                          Master Degree
                                      </label>
                                  </div>


                                  <div className="flex items-center gap-2">
                                  <input type="checkbox" id="bachelor" name="education" value="" 
                                            className="peer mt-2" />
                                      <label htmlFor="bachelor" 
                                          className="ml-1 mt-2  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                          Bachelor Degree
                                      </label>
                                  </div>
                           </div>
                           </div>

                           <div className='flex flex-col p-10   w-[18%] border-l-0 ' >  
                           <h1 className='mt-3  ' > Job Level </h1> 
                           <div className='mt-3' >

                           <div className="flex items-center gap-2">
                              <input type="radio" id="entry" name="joblevel" value="" 
                                    className="peer " />
                              <label htmlFor="entry" 
                                   className="ml-1  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                  Entry level
                              </label>
                          </div>

                            
                          <div className="flex items-center gap-2">
                              <input type="radio" id="mid" name="joblevel" value="" 
                                    className="peer mt-2" />
                              <label htmlFor="mid" 
                                   className="ml-1 mt-2  font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                  Mid level
                              </label>
                          </div>

                          <div className="flex items-center gap-2">
                              <input type="radio" id="expert" name="joblevel" value="" 
                                    className="peer  mt-2" />
                              <label htmlFor="expert" 
                                   className="ml-1 mt-2 font-inter font-normal cursor-pointer text-sm text-[#464D61] peer-checked:text-blue-500">
                                  Expert level
                              </label>
                          </div>
                           </div>
                           </div>

                        </div>
                    </div>
                   </form>
                </div>
            </div>
     </div>
  )
}

export default Findjobfilterpop