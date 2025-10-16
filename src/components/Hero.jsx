import {useState} from "react";
import {MdOutlineDone} from "react-icons/md";
import {GoCopy} from "react-icons/go";
import {FaGithub} from "react-icons/fa";

export default function Hero() {
    const [isCopy, setIsCopy] = useState(false);

    const handleCopy = (text) => {
        setIsCopy(true);
        window.navigator.clipboard.writeText(text);
        setTimeout(() => {
            setIsCopy(false);
        }, 1000);
    };

    return (
        <section className="min-h-screen flex flex-col relative overflow-clip items-center justify-center">
            <img src='/logo.svg' alt='Sylheti Logo' className='w-[300px] lg:w-[600px] mx-auto'/>

            <h1 className='text-base lg:text-3xl font-normal text-center mt-5 text-gray-600'>A Sylheti Fun Programming
                Language</h1>

            <div className='flex items-center flex-col lg:flex-row gap-3 mt-12 lg:mt-16'>
                <a href={'#playground'}
                   className='px-15 lg:px-20 py-3 lg:py-5 mt-3 w-max bg-[#004908] text-xl text-white font-semibold rounded-lg transition-all duration-200'>Playground
                </a>

                <a href={'#documentation'}
                   className='px-10 lg:px-16 py-3 lg:py-5 mt-3 w-max border border-gray-200 text-xl text-black hover:bg-gray-300 hover:border-gray-300 font-semibold rounded-lg transition-all duration-200'>Documentation
                </a>
            </div>

            <div className='mt-5 flex items-center gap-2'>
                <div
                    className="bg-gray-200 text-[#000000] rounded-[5px] py-1 px-4 tracking-wider font-mono font-[500] flex items-center justify-between gap-4">
                    npm i -g sylheti-lang
                    <GoCopy
                        onClick={() => handleCopy("npm i -g sylheti-lang")}
                        className={`${
                            isCopy ? " opacity-0 hidden" : " opacity-100 flex"
                        } transition-all duration-300 cursor-pointer`}
                    />
                    <MdOutlineDone
                        className={`${
                            isCopy ? " opacity-100 flex" : " opacity-0 hidden"
                        } transition-all duration-300 cursor-pointer`}
                    />
                </div>

                <a href={'https://github.com/Asfak00/sylheti-lang'} target='_blank'>
                    <FaGithub size={26} className='text-gray-600 hover:text-gray-800 cursor-pointer'/>
                </a>
            </div>

            <div
                className="absolute inset-0 z-[-1]"
                style={{
                    background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #004908 100%)",
                }}
            />
        </section>
    )
}
