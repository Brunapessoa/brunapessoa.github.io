import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import reactIcon from "../../assets/tech/react-original.svg";
import tailwindIcon from "../../assets/tech/tailwindcss.svg";
import jsIcon from "../../assets/tech/javascript.svg";

function Weather() {

    return(
        <>
        <Header />
            <main className="flex flex-col gap-20 px-10 pt-10 pb-5 max-w-6xl mx-auto w-full md:px-20">
                
            <Link to="/" className="font-semibold hover:text-accent">← Bruna Pessoa </Link>
            
            <div>
                <h1 className="font-display text-text-main text-6xl font-semibold">Weatherly</h1>
                <p>Forecast you can trust</p>
                <div className="flex flex-wrap justify-start gap-2 my-4">
                    <span className="flex items-center gap-2 bg-bg-card  border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={reactIcon} alt="JavaScript" className="w-4"/>React</span>
                    <span className="flex items-center gap-2 bg-bg-card  border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={jsIcon} alt="JavaScript" className="w-4"/>JavaScript</span>
                    <span className="flex items-center gap-2 bg-bg-card border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={tailwindIcon} alt="JavaScript" className="w-4"/>Tailwind</span>
                </div>
                <div className="flex flex-row gap-4 my-2">
                    <a href="https://brunapessoa.github.io/weather/" target="_blank" rel="noopener noreferrer">
                        <button className="px-3 py-1.5 border-2 rounded-lg bg-accent border-accent text-black text-sm/7 font-semibold hover:cursor-pointer hover:opacity-90">View project</button>
                    </a>
                    <a href="https://github.com/Brunapessoa/weather" target="_blank" rel="noopener noreferrer">
                        <button className="bg-accent-soft px-3 py-1.5 border-2 rounded-lg border-border text-text-muted text-sm/7 text-shadow-md font-semibold hover:border-accent hover:bg-accent-soft hover:text-accent hover:cursor-pointer">View on GitHub</button>
                    </a>
                </div>
                </div>
                <div className="flex flex-col gap-20 md:grid md:grid-cols-2 md:items-start ">

                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5">
                        <h2 className="font-bold font-sans text-text-main text-2xl">The Problem</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maiores eveniet aperiam accusantium laborum, sapiente facere eaque voluptate et enim dolorum fugiat? Beatae et voluptatem corrupti, minus mollitia commodi. Voluptatem.</p>
                    </div>
                    <div className="mx-auto w-62.5 h-auto overflow-hidden md:row-span-2">
                        <video src="" autoPlay loop muted playsInline className="rounded-lg border border-border"></video>
                    </div>
                    
                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5 md:items-start">
                        <h2 className="font-bold font-sans text-text-main text-2xl">Decisions and Process</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quasi, natus illum excepturi reprehenderit hic molestiae nulla, velit possimus voluptas earum unde. Rem, repudiandae molestias. Temporibus minima obcaecati porro deleniti!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et possimus doloremque soluta dolor? Autem reprehenderit repellat eos quis corrupti consequuntur debitis aspernatur, velit a et aut accusantium vero maxime. Tempora?</p>
                    </div>
                </div>

                <div className="flex flex-col gap-20 md:grid md:grid-cols-2 md:items-center">
                    <img src="" alt="" className="w-80 mx-auto"/>

                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5">
                        <h2 className="font-bold font-sans text-text-main text-2xl">Challenges</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptate numquam ut eius sit veniam eos dolor totam assumenda, labore reiciendis, quibusdam praesentium dolore expedita veritatis rerum magni ab neque?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam nulla culpa beatae earum, adipisci ab, voluptas asperiores nobis obcaecati dolore itaque expedita repudiandae mollitia dolorem labore non, fugiat enim.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-20 md:grid md:grid-cols-2 md:items-center">
                    <img src="" alt="" className=" mx-auto rounded-lg border border-border w-62 md:order-last" />
                    <div className="flex flex-col gap-5 border-l-2 border-accent pl-5">
                        <h2 className="font-bold font-sans text-text-main text-2xl">Stack</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium natus fugit cumque facere tenetur autem, exercitationem aperiam ullam neque, iure possimus vel praesentium animi odio sapiente soluta sequi, adipisci accusamus!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odio reprehenderit alias libero distinctio veniam omnis voluptate dolore, dicta itaque exercitationem molestias consectetur laudantium fugit earum, maxime nihil rerum dolorum.</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <Link to="/projects/Recipes" className="font-semibold hover:text-accent">← Favorite Recipe</Link>
                    <Link to="/projects/TasksMng" className="font-semibold hover:text-accent">Tasks Management →</Link>
                </div>
        </main>
        <Footer />
        </>
    )
}

export default Weather;