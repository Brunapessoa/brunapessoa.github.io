import profilePhoto from "../assets/photo-1.jpg"

function About() {
    return (
        <>
        <section id="about" className="flex flex-col gap-8 py-20 px-10 max-w-6xl mx-auto w-full md:px-20">
            <h2 className="flex items-baseline gap-5 section-title font-bold font-sans text-text-main text-2xl"><span className="text-accent text-sm font-mono font-bold">01</span>About me</h2>
            <h3 className="font-display text-accent text-3xl font-semibold md:px-10">Who I am</h3>
            
            <div className="flex flex-col gap-5 md:grid md:grid-cols-[1fr_200px] md:gap-8 md:items-start md:px-10">
                <p className="font-bold border-l-2 border-accent pl-5">
                I'm a Front-End Developer focused on building clean, responsive, and user-friendly applications while continuously learning and improving.
                </p>
                <div className="self-center photo-glow w-55 my-5 md:row-span-2 lg:w-64">
                    <img src={profilePhoto} alt="Bruna Pessoa" className="rounded-2xl w-full"/>
                </div>
                <div className="flex flex-col gap-5">
                    <p>I'm Brazilian and have been living in Eindhoven since 2023.
                    </p>
                    <p>
                    Before transitioning into software development, I have a background in Law, where I worked for five years. That experience helped me develop analytical thinking, attention to detail, and a strong sense of responsibility—skills I now bring to software development.
                    </p>
                    <p>
                    Outside of coding, I enjoy painting. Art has always been part of how I see the world, and I naturally bring that perspective when creating user interfaces.
                    </p>
                </div>
            </div>
            <h3 className="font-display text-accent text-3xl font-semibold md:px-10">My Journey into Software Development</h3>

            <div className="flex flex-col gap-5 md:grid md:grid-cols-[200px_1fr] md:gap-x-15 md:gap-y-5 md:items-start lg:grid-cols-[260px_1fr] md:px-10">
           
                <p>After years working in the legal field, I decided it was time for a change. I wanted to work in a field where creativity and problem-solving could come together. 
                </p>
                <div className="self-center photo-glow w-55 my-5 md:row-span-2 md:order-first lg:w-64">
                    <img src={profilePhoto} alt="Bruna Pessoa" className="rounded-2xl w-full"/>
                </div>
                <div className="flex flex-col gap-5 md:col-start-2">
                    <p>
                    Since then, I have completed several courses, graduated from a one-year Full-Stack Development bootcamp, and I am currently pursuing a degree in Systems Analysis and Development.
                    </p>
                    <p>
                    When I build projects, I think beyond the interface itself. I care about creating applications that are intuitive, responsive, and enjoyable to use—not just visually appealing.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap justify-start">
                <span className="bg-bg-card border border-border py-2 px-4 rounded-full my-2 mx-2 hover:border-accent hover:text-text-main">HTML5</span>
                <span className="bg-bg-card border border-border py-2 px-4 rounded-full my-2 mx-2 hover:border-accent hover:text-text-main">CSS3</span>
                <span className="bg-bg-card border border-border py-2 px-4 rounded-full my-2 mx-2 hover:border-accent hover:text-text-main">JavaScript</span>
                <span className="bg-bg-card border border-border py-2 px-4 rounded-full my-2 mx-2 hover:border-accent hover:text-text-main">React</span>
                <span className="bg-bg-card border border-border py-2 px-4 rounded-full my-2 mx-2 hover:border-accent hover:text-text-main">Tailwind</span>
                <span className="bg-bg-card border border-border py-2 px-4 rounded-full my-2 mx-2 hover:border-accent hover:text-text-main">TypeScript</span>
                <span className="bg-bg-card border border-border py-2 px-4 rounded-full my-2 mx-2 hover:border-accent hover:text-text-main">Git | GitHub</span>
                </div>

        </section>
        </>
    )
}

export default About;