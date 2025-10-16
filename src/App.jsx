import Hero from "./components/Hero";
import Playground from "./components/Playground";
import Docs from "./components/Docs";
import Footer from "./components/footer.jsx";

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Hero/>
            <main className="flex-1 px-4 py-0 lg:py-12 max-w-[1400px] mx-auto w-full">

                <h3 className='text-3xl lg:text-4xl font-bold mb-10 text-center'>Language <span
                    className='text-[#004908] '>Playground</span></h3>

                <Playground/>
                <Docs/>
            </main>
            <Footer/>
        </div>
    );
}
