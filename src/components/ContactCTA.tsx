function ContactCTA() {
    return (
        <>
        <section id="contact" className="flex flex-col justify-center items-center gap-5 py-20 px-10 max-w-6xl mx-auto w-full md:px-20">
            <h2 className="font-bold font-sans text-text-main text-2xl text-center">Let's Talk?</h2>
            <p className="text-center">Open to opportunities — find me here:</p>
            <div className="flex flex-col gap-5 lg:flex-row">
                <div className="flex justify-center gap-4 md:flex-row">
                    <a href="https://github.com/Brunapessoa" target="_blank" rel="noopener noreferrer">
                    <button className="px-8 py-2 border-2 rounded-lg bg-white/10 border-border text-text-main text-sm/7 text-shadow-md font-semibold hover:border-accent hover:bg-accent-soft hover:text-accent hover:cursor-pointer">GitHub</button>
                    </a>
                    <a href="https://www.linkedin.com/in/bruna-pessoa-machado-dev/" target="_blank" rel="noopener noreferrer">
                    <button className="px-8 py-2 border-2 rounded-lg bg-white/10 border-border text-text-main text-sm/7 text-shadow-md font-semibold hover:border-accent hover:bg-accent-soft hover:text-accent hover:cursor-pointer">LinkedIn</button>
                    </a>
                </div>
                <a href="mailto:brunapessoa.bpm@gmail.com">
                <button className="w-75 px-8 py-2 border-2 rounded-lg bg-accent border-accent text-black text-sm/7 font-semibold hover:cursor-pointer hover:opacity-90">brunapessoa.bpm@gmail.com</button>
                </a>
            </div>
        </section>
        </>
    )
}

export default ContactCTA;