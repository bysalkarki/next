import Image from "next/image";
import {Activity, AtSign, Codepen, Codesandbox, Coffee, Facebook, Instagram, Twitter} from "react-feather";

export default function Home() {
    return (
        <main className="bg-gray-100">
            <section className="py-10 md:py-16">

                <div className="container max-w-screen-xl mx-auto px-4">

                    <nav className="flex items-center justify-between mb-40">
                        <Image src="/image/navbar-logo.png" alt="Logo" width={100} height={100}/>

                        <button
                            className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">Get
                            my CV
                        </button>
                    </nav>

                    <div className="text-center">
                        <div className="flex justify-center mb-16">
                            <Image src="/image/image.svg" alt="Image" width={100} height={100}/>
                        </div>

                        <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Bishal Karki</h6>

                        <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">Senior Backend
                            Developer</h1>

                        <p className="font-normal text-gray-600 text-md md:text-xl mb-16">I have a passion for software.
                            I enjoy creating tools that make life easier for people.</p>

                        <a href="#"
                           className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Hire
                            me</a>
                    </div>

                </div>

            </section>
            <section className="py-10 md:py-16">

                <div className="container max-w-screen-xl mx-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-50 px-8 py-10 rounded-md">
                            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                                <Activity className="text-black"/>
                            </div>

                            <h4 className="font-medium text-gray-700 text-lg mb-4">High experience</h4>

                            <p className="font-normal text-gray-500 text-md">Deep expertise in multiple programming
                                languages and frameworks,<br/> with a focus on clean, scalable, <br/> and efficient
                                code.</p>
                        </div>

                        <div className="bg-gray-50 px-8 py-10 rounded-md">
                            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                                <Codesandbox className="text-black"/>
                            </div>

                            <h4 className="font-medium text-gray-700 text-lg mb-4">Useful sandboxes</h4>

                            <p className="font-normal text-gray-500 text-md">Lorem ipsum dolor sit amet,
                                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et
                                dolore magna aliqua.</p>
                        </div>

                        <div className="bg-gray-50 px-8 py-10 rounded-md">
                            <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                                <Coffee className="text-black"/>
                            </div>

                            <h4 className="font-medium text-gray-700 text-lg mb-4">Success side projects</h4>

                            <p className="font-normal text-gray-500 text-md">Lorem ipsum dolor sit amet,
                                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et
                                dolore magna aliqua.</p>
                        </div>
                    </div>

                </div>

            </section>

            <section className="py-10 md:py-16">

                <div className="container max-w-screen-xl mx-auto px-4">

                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="mb-10 lg:mb-0">
                            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Portfolio</h1>

                            <p className="font-normal text-gray-500 text-xs md:text-base">I have brought here my biggest
                                and favorite works <br/> as a professional.</p>
                        </div>

                        <div className="space-y-24">
                            <div className="flex space-x-6">
                                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">01</h1>

                                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                                <div>
                                    <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Demo API
                                        Generator</h1>

                                    <p className="font-normal text-gray-500 text-sm md:text-base">A dummy data free and
                                        documented API generator to facilitate <br/> the process of testing the
                                        front-end
                                        portion of projects.</p>
                                </div>
                            </div>

                            <div className="flex space-x-6">
                                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">02</h1>

                                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                                <div>
                                    <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Demo API
                                        Generator</h1>

                                    <p className="font-normal text-gray-500 text-sm md:text-base">A dummy data free and
                                        documented API generator to facilitate <br/> the process of testing the
                                        front-end
                                        portion of projects.</p>
                                </div>
                            </div>

                            <div className="flex space-x-6">
                                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">03</h1>

                                <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                                <div>
                                    <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Demo API
                                        Generator</h1>

                                    <p className="font-normal text-gray-500 text-sm md:text-base">A dummy data free and
                                        documented API generator to facilitate <br/> the process of testing the
                                        front-end
                                        portion of projects.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <section className="py-10 md:py-16">

                <div className="container max-w-screen-xl mx-auto px-4">

                    <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Education</h1>

                    <p className="font-normal text-gray-500 text-xs md:text-base mb-20">Below is a summary of the places
                        I studied</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-50 px-8 py-10 rounded-md">
                            <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

                            <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et
                                dolore magna aliqua.</p>

                            <div className="relative">
                                <h6 className="font-semibold text-gray-500 text-md relative z-10">See the place
                                    here</h6>
                                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                            </div>
                        </div>

                        <div className="bg-gray-50 px-8 py-10 rounded-md">
                            <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

                            <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et
                                dolore magna aliqua.</p>

                            <div className="relative">
                                <h6 className="font-semibold text-gray-500 text-md relative z-10">See the place
                                    here</h6>
                                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                            </div>
                        </div>

                        <div className="bg-gray-50 px-8 py-10 rounded-md">
                            <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

                            <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et
                                dolore magna aliqua.</p>

                            <div className="relative">
                                <h6 className="font-semibold text-gray-500 text-md relative z-10">See the place
                                    here</h6>
                                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                            </div>
                        </div>

                        <div className="bg-gray-50 px-8 py-10 rounded-md">
                            <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

                            <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et
                                dolore magna aliqua.</p>

                            <div className="relative">
                                <h6 className="font-semibold text-gray-500 text-md relative z-10">See the place
                                    here</h6>
                                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                            </div>
                        </div>

                        <div className="bg-gray-50 px-8 py-10 rounded-md">
                            <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

                            <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et
                                dolore magna aliqua.</p>

                            <div className="relative">
                                <h6 className="font-semibold text-gray-500 text-md relative z-10">See the place
                                    here</h6>
                                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                            </div>
                        </div>

                        <div className="bg-gray-50 px-8 py-10 rounded-md">
                            <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2016</h4>

                            <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et
                                dolore magna aliqua.</p>

                            <div className="relative">
                                <h6 className="font-semibold text-gray-500 text-md relative z-10">See the place
                                    here</h6>
                                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <section className="py-10 md:py-16">

                <div className="container max-w-screen-xl mx-auto px-4">

                    <div className="text-center">
                        <h1 className="font-normal text-gray-300 text-3xl md:text-6xl lg:text-7xl mb-20 md:mb-32 lg:mb-48">Please
                            do not measure your skills in <br/> percentages!</h1>

                        <p className="font-medium text-gray-700 text-xs md:text-base">In my many years of experience, I
                            use @laravel for backend projects and @vuejs for <br/> front-end projects. I’m an avid
                            programmer, so I create designs based on the <br/> weekend @figmadesign.</p>
                    </div>

                </div>

            </section>

            <section className="py-10 md:py-16">

                <div className="container max-w-screen-xl mx-auto px-4">

                    <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Experience</h1>

                    <p className="font-normal text-gray-500 text-xs md:text-base mb-20">Below is a summary of the places
                        I studied</p>

                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
                            <h6 className="font-medium text-gray-400 text-base uppercase">Company</h6>

                            <p className="font-semibold text-gray-600 text-base">Massa Fames <span
                                className="font-normal text-gray-300">/ New York</span></p>

                            <p className="font-semibold text-gray-600 text-base">Massa Fames <span
                                className="font-normal text-gray-300">/ New York</span></p>

                            <p className="font-semibold text-gray-600 text-base">Massa Fames <span
                                className="font-normal text-gray-300">/ New York</span></p>

                            <p className="font-semibold text-gray-600 text-base">Massa Fames <span
                                className="font-normal text-gray-300">/ New York</span></p>

                            <p className="font-semibold text-gray-600 text-base">Massa Fames <span
                                className="font-normal text-gray-300">/ New York</span></p>
                        </div>

                        <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
                            <h6 className="font-medium text-gray-400 text-base uppercase">Position</h6>

                            <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

                            <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

                            <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

                            <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>

                            <p className="font-normal text-gray-400 text-base">Junior Front-End Developer</p>
                        </div>

                        <div className="space-y-8 md:space-y-16">
                            <h6 className="font-medium text-gray-400 text-base uppercase">Year</h6>

                            <p className="font-normal text-gray-400 text-base">2016</p>

                            <p className="font-normal text-gray-400 text-base">2016</p>

                            <p className="font-normal text-gray-400 text-base">2016</p>

                            <p className="font-normal text-gray-400 text-base">2016</p>

                            <p className="font-normal text-gray-400 text-base">2016</p>
                        </div>
                    </div>

                </div>

            </section>

            <section className="py-10 md:py-16">

                <div className="container max-w-screen-xl mx-auto px-4">

                    <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Brands</h1>

                    <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">Below is a summary of
                        the places I studied</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <Image src="/image/brand-1.png" alt="Image" height={100} width={100}/>

                        <Image src="/image/brand-2.png" alt="Image" height={100} width={100}/>

                        <Image src="/image/brand-3.png" alt="Image" height={100} width={100}/>

                        <Image src="/image/brand-4.png" alt="Image" height={100} width={100}/>

                        <Image src="/image/brand-5.png" alt="Image" height={100} width={100}/>

                        <Image src="/image/brand-6.png" alt="Image" height={100} width={100}/>
                    </div>

                </div>

            </section>

            <section className="py-10 md:py-16">

                <div className="container max-w-screen-xl mx-auto px-4">

                    <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Testimonial</h1>

                    <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">Below is a summary of
                        the places I studied</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-50 px-8 py-10 rounded-md">

                            <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et
                                dolore magna aliqua.</p>

                            <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span
                                className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
                        </div>

                        <div className="bg-gray-50 px-8 py-10 rounded-md">

                            <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et
                                dolore magna aliqua.</p>

                            <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span
                                className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
                        </div>

                        <div className="bg-gray-50 px-8 py-10 rounded-md">

                            <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et
                                dolore magna aliqua.</p>

                            <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span
                                className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
                        </div>

                        <div className="bg-gray-50 px-8 py-10 rounded-md">

                            <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et
                                dolore magna aliqua.</p>

                            <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span
                                className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
                        </div>

                        <div className="bg-gray-50 px-8 py-10 rounded-md">

                            <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et
                                dolore magna aliqua.</p>

                            <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span
                                className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
                        </div>

                        <div className="bg-gray-50 px-8 py-10 rounded-md">

                            <p className="font-normal text-gray-500 text-md mb-4">Lorem ipsum dolor sit amet,
                                consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et
                                dolore magna aliqua.</p>

                            <h6 className="font-semibold text-gray-500 text-md">Stephan Clark <span
                                className="font-medium text-gray-300 text-sm">- CEO at EarlyBird</span></h6>
                        </div>
                    </div>

                </div>

            </section>

            <footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">

                <div className="container max-w-screen-xl mx-auto px-4">

                    <div className="text-center">
                        <h1 className="font-medium text-gray-700 text-4xl md:text-5xl mb-5">Testimonial</h1>

                        <p className="font-normal text-gray-400 text-md md:text-lg mb-20">I’m not currently taking on
                            new client work but feel free to contact me for any <br/> other inquiries.</p>

                        <div className="flex items-center justify-center space-x-8">
                            <a href="#"
                               className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                                <Twitter
                                    className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500"/>
                            </a>


                            <a href="#"
                               className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                                <Facebook
                                    className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"/>
                            </a>

                            <a href="#"
                               className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                                <Codepen
                                    className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"/>
                            </a>

                            <a href="#"
                               className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                                <AtSign
                                    className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"/>
                            </a>

                            <a href="#"
                               className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
                                <Instagram
                                    className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"/>
                            </a>
                        </div>
                    </div>

                </div>

            </footer>

        </main>
    );
}
