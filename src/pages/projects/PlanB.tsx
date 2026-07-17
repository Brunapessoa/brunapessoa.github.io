import Header from "../../components/Header";
import { Link } from "react-router-dom";
import htmlIcon from "../../assets/tech/html5-original.svg";
import cssIcon from "../../assets/tech/css3-original.svg";
import jsIcon from "../../assets/tech/javascript.svg";
import gif from "../../assets/projects/planB/PlanB-v3.mp4";
import sketch from "../../assets/projects/planB/sketch-2.jpg"
import logo from "../../assets/projects/planB/logo-sq.png";
import result from "../../assets/projects/planB/resultA.jpg";
import workout from "../../assets/projects/planB/workout.jpeg";
import Footer from "../../components/Footer";


function PlanB() {
    return (
        <>
            <Header />
            <div className="flex flex-col gap-8 py-5 px-10 max-w-6xl mx-auto w-full md:px-20">
            <main className="my-5 py-5 px-5">
                
                <Link to="/" className="font-semibold hover:text-accent">← Bruna Pessoa </Link>
            
                <div className="my-5 py-5">
                    <h1 className="font-display text-text-main text-6xl font-semibold">Plan B</h1>
                    <p>Your own workout planner</p>
                    <div className="flex flex-wrap justify-start gap-2 my-4">
                        <span className="flex items-center gap-2 bg-bg-card border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={htmlIcon} alt="JavaScript" className="w-4.5"/> HTML5</span>
                        <span className="flex items-center gap-2 bg-bg-card border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={cssIcon} alt="JavaScript" className="w-4"/> CSS3</span>
                        <span className="flex items-center gap-2 bg-bg-card  border border-border py-1.5 px-3 rounded-full hover:border-accent hover:text-text-main"><img src={jsIcon} alt="JavaScript" className="w-4"/> JavaScript</span>
                    </div>
                    <div className="flex flex-row gap-4 my-2">
                        <a href="https://brunapessoa.github.io/b-plan-training/">
                            <button className="px-3 py-1.5 border-2 rounded-lg bg-accent border-accent text-black text-sm/7 font-semibold hover:cursor-pointer hover:opacity-90">View project</button>
                        </a>
                        <a href="">
                            <button className="px-3 py-1.5 border-2 rounded-lg backdrop-blur-md border-border text-white text-sm/7 text-shadow-md font-semibold hover:border-accent hover:bg-accent-soft hover:text-accent hover:cursor-pointer">View on GitHub</button>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-5 border-l-2 border-accent pl-5 my-5">
                    <h2 className="font-bold font-sans text-text-main text-2xl">The Problem</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maiores eveniet aperiam accusantium laborum, sapiente facere eaque voluptate et enim dolorum fugiat? Beatae et voluptatem corrupti, minus mollitia commodi. Voluptatem.</p>
                </div>
                <div className="flex flex-row justify-center m-auto py-5 w-62.5 h-100 overflow-hidden rounded-lg">
                    <video src={gif} autoPlay loop muted playsInline></video>
                </div>
                    
                <div className="flex flex-col gap-5 border-l-2 border-accent my-5 pl-5">
                    <h2 className="font-bold font-sans text-text-main text-2xl">Decisions and Process</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quasi, natus illum excepturi reprehenderit hic molestiae nulla, velit possimus voluptas earum unde. Rem, repudiandae molestias. Temporibus minima obcaecati porro deleniti!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et possimus doloremque soluta dolor? Autem reprehenderit repellat eos quis corrupti consequuntur debitis aspernatur, velit a et aut accusantium vero maxime. Tempora?</p>
                </div>
                <div className="flex flex-col h-150 relative mt-10">
                    <img src={sketch} alt="" className="h-60 w-60 rounded-lg absolute border border-border  top-0 left-7 z-10"/>
                    <img src={logo} alt="" className="h-40 w-40 rounded-lg absolute border border-border top-[35%] right-0 z-20"/>
                    <img src={result} alt="" className="w-60 h-50 rounded-lg absolute border border-border top-[60%] left-0 z-30"/>
                </div>
                <div className="flex flex-col gap-5 border-l-2 border-accent pl-5 my-10">
                    <h2 className="font-bold font-sans text-text-main text-2xl">Challenges</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptate numquam ut eius sit veniam eos dolor totam assumenda, labore reiciendis, quibusdam praesentium dolore expedita veritatis rerum magni ab neque?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam nulla culpa beatae earum, adipisci ab, voluptas asperiores nobis obcaecati dolore itaque expedita repudiandae mollitia dolorem labore non, fugiat enim.</p>
                </div>
                <div className="flex flex-col items-center justify-center m-auto my-10 w-62.5 h-100">
                    <img src={workout} alt="" className="rounded-lg" />
                </div>
                <div className="flex flex-col gap-5 border-l-2 border-accent my-10 pl-5">
                    <h2 className="font-bold font-sans text-text-main text-2xl">Stack</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium natus fugit cumque facere tenetur autem, exercitationem aperiam ullam neque, iure possimus vel praesentium animi odio sapiente soluta sequi, adipisci accusamus!</p>
                </div>
                <div className="flex flex-col gap-5 border-l-2 border-accent my-10 pl-5">
                    <h2 className="font-bold font-sans text-text-main text-2xl">Next Steps</h2>
                    <p>Refatorar para React, incluir uma box select, onde pode selecionar qual treino será feito no dia, a página mostrará apenas o treino do dia. Incliuir a data da úlma vez que o treino foi realizado, que será registrada quando um botao "done" for clicado, ao final do treino.

                    </p>
                </div>
            </main>

            </div>
            <Footer />
        </>
    )
}

export default PlanB;