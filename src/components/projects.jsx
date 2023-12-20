import React from 'react'

export const Projects = () => {
  return (
    <div className="">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 
        lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Projects
            </h2>
        </div>
        <div>
            <ol className="group/list ">
                <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all 
                    sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 
                    lg:group-hover/list:opacity-50">
                    <div className="underline-effect absolute -inset-x-4 -inset-y-4 z-0 hidden  
                        lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 
                        lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] 
                        lg:group-hover:drop-shadow-lg group-hover:rounded-tr-full">
                    </div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        Dec 2023
                        </header>
                        <div className="z-10 sm:col-span-6">
                            <h3 className='font-medium leading-snug text-slate-200'>
                                <div>
                                    <a className="inline-flex items-baseline font-medium
                                     leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  
                                     group/link text-base" href="https://github.com/DeeptanshuSanghani1/Portfolio" target="_blank">
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>
                                                Portfolio Website
                                                <span className="inline-block">
                                                    
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 
                                                    transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 
                                                    group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" 
                                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 
                                                    0 000 1.06z" clip-rule="evenodd"></path></svg>
                                                </span>
                                            </span>
                                    </a>
                                </div>
                                <div className="pt-3"></div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal">
                                A portfolio website built using React and Tailwind CSS. Showcases projects and experience. This website is hosted on...
                            </p>
                            <ul class="mt-2 flex flex-wrap">
                                <li className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 
                                    px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        Python
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                </ol>
                </div>
            


    </div>
    


  )
}