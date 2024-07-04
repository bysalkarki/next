import Image from "next/image";
import {Activity, AtSign, Codepen, Codesandbox, Coffee, Facebook, Instagram, Twitter} from "react-feather";

export default function Home() {
    return <main className="bg-gray-100">
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

                        <h4 className="font-medium text-gray-700 text-lg mb-4">Rock-Solid Expertise in Backend
                            Technologies</h4>

                        <p className="font-normal text-gray-500 text-md">As a senior backend developer, my foundation
                            lies in deep expertise with backend technologies. This means I'm not just familiar with a
                            single language, but comfortable navigating the intricacies of databases, server-side
                            scripting, APIs, and frameworks that power the core functionality of web applications. I can
                            confidently design, build, and maintain robust backend systems that ensure smooth data
                            handling, efficient processing, and secure interactions with the user interface</p>
                    </div>

                    <div className="bg-gray-50 px-8 py-10 rounded-md">
                        <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                            <Codesandbox className="text-black"/>
                        </div>

                        <h4 className="font-medium text-gray-700 text-lg mb-4">Architectural Prowess and Scalability
                            Focus:</h4>

                        <p className="font-normal text-gray-500 text-md">My experience has equipped me with the ability
                            to think beyond just writing code. I can architect and design complex backend systems,
                            ensuring scalability and maintainability as the application grows. I consider factors like
                            data volume, user traffic, and future needs when building the backend, implementing design
                            patterns and best practices to create a system that can adapt and evolve seamlessly.</p>
                    </div>

                    <div className="bg-gray-50 px-8 py-10 rounded-md">
                        <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                            <Coffee className="text-black"/>
                        </div>

                        <h4 className="font-medium text-gray-700 text-lg mb-4">Problem-Solving Ninja and Debugging
                            Master:</h4>

                        <p className="font-normal text-gray-500 text-md">Inevitably, things go wrong. What sets senior
                            backend developers apart is our problem-solving prowess. I can meticulously analyze complex
                            issues, trace errors through intricate code paths, and identify root causes efficiently. My
                            debugging skills are honed, allowing me to not only fix problems but also implement
                            preventative measures to ensure stability and reliability in the backend systems I
                            build.</p>
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
                                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Bookmundi</h1>

                                <p className="font-normal text-gray-500 text-sm md:text-base">At Bookmundi, I played
                                    a key role as a programmer, crafting the code behind their complex booking
                                    mechanics and seamless chat functionalities.<br/> I wasn't just limited to
                                    bookings
                                    though; I actively contributed to developing various features that make
                                    Bookmundi the platform it is today. This experience honed my skills in tackling
                                    intricate systems and building user-friendly features, making me a valuable
                                    asset to any development team.</p>
                            </div>
                        </div>

                        <div className="flex space-x-6">
                            <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">02</h1>

                            <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                            <div>
                                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">AlgExpress</h1>

                                <p className="font-normal text-gray-500 text-sm md:text-base"> I also honed my
                                    programming skills in a fast-paced cargo management environment at Algexpress.
                                    There, I developed a system handling thousands of cargo shipments. The system
                                    tracked shipments, generated invoices, and dynamically managed rates based on
                                    weight. <br/>This experience instilled in me the ability to design scalable systems
                                    that
                                    can handle high volume, complex data, and integrate seamlessly with financial
                                    processes.</p>
                            </div>
                        </div>

                        <div className="flex space-x-6">
                            <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">03</h1>

                            <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                            <div>
                                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">News Portal</h1>

                                <p className="font-normal text-gray-500 text-sm md:text-base">My experience extends
                                    beyond travel and logistics. I built robust CMS systems for leading Nepalese news
                                    agencies. These systems boasted modern functionalities, allowing for efficient
                                    content management, streamlined publishing workflows, and engaging user experiences.
                                    This experience showcases my ability to create scalable and user-friendly platforms
                                    that cater to the demanding needs of the news industry</p>
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
                        <h4 className="font-medium text-gray-700 text-lg mb-4">2020 – Present</h4>

                        <p className="font-normal text-gray-500 text-md mb-4">Bachelor in computer application</p>

                        <div className="relative">
                            <h6 className="font-semibold text-gray-500 text-md relative z-10">Lalitpur nist
                                college</h6>
                            <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                        </div>
                    </div>

                    <div className="bg-gray-50 px-8 py-10 rounded-md">
                        <h4 className="font-medium text-gray-700 text-lg mb-4">2015 – 2018</h4>

                        <p className="font-normal text-gray-500 text-md mb-4">Diploma In Information Technology</p>

                        <div className="relative">
                            <h6 className="font-semibold text-gray-500 text-md relative z-10">Banepa polytechic
                                institute</h6>
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
                    I Worked</p>

                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
                        <h6 className="font-medium text-gray-400 text-base uppercase">Company</h6>

                        <p className="font-semibold text-gray-600 text-base">Overt International Pvt. Ltd<span
                            className="font-normal text-gray-300">/ Banepa</span></p>

                        <p className="font-semibold text-gray-600 text-base">NectarDigit<span
                            className="font-normal text-gray-300">/ Kathmandu</span></p>

                        <p className="font-semibold text-gray-600 text-base">Proshore<span
                            className="font-normal text-gray-300">/ Kathmandu</span></p>

                        <p className="font-semibold text-gray-600 text-base">Bookmundi<span
                            className="font-normal text-gray-300">/Kathmandu</span></p>
                    </div>

                    <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
                        <h6 className="font-medium text-gray-400 text-base uppercase">Position</h6>

                        <p className="font-normal text-gray-400 text-base">Intern</p>

                        <p className="font-normal text-gray-400 text-base">Php Developer</p>

                        <p className="font-normal text-gray-400 text-base">Php Developer</p>

                        <p className="font-normal text-gray-400 text-base">Backend Developer (Node js, Php)</p>
                    </div>

                    <div className="space-y-8 md:space-y-16">
                        <h6 className="font-medium text-gray-400 text-base uppercase">Year</h6>

                        <p className="font-normal text-gray-400 text-base">2019</p>

                        <p className="font-normal text-gray-400 text-base">2020-2021</p>

                        <p className="font-normal text-gray-400 text-base">2021-2022</p>

                        <p className="font-normal text-gray-400 text-base">2022-present</p>

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

    </main>;
}
