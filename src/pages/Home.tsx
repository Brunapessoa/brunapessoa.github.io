import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsGrid from "../components/ProjectsGrid";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

function Home() {
    return(
        <>
        <Header />
        <Hero />
        <About />
        <ProjectsGrid />
        <ContactCTA />
        <Footer />
        </>
    )
}

export default Home;