export default function HeroSection(){
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I am Jatin</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Frontend</span>{""}
                        <br/>
                        Developer
                    </h1>
                    <p className="hero--section--description">with a passion for creating user-focused, responsive web applications. 
                    <br/>I thrive in collaborative environments and am proficient in leveraging cutting-edge technologies to solve complex problems. </p>

                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./images/pic1.jpeg" alt="Hero Section" />
            </div>
        </section>
    )
}