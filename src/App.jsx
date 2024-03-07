
import './App.css'
import heroPicture from './assets/picture__1.png'
import heroPicture_ from './assets/IMAGE.png'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'

function App() {
  return (
    <>
      <header className="header">
        <div className="container header__container">
          <div className="header__nav">
            <ul>
              <li><a href="#">Products</a></li>
              <li><a href="#">Use cases</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">About us</a></li>
            </ul>
          </div>
          <div className="header__btn--part">
            <h4>Log in</h4>
            <button>Request a demo</button>
          </div>
        </div>
      </header>
      <div className="hero">
        <div className="container hero__container">
          <div className="hero__block1">
              <h1>Next generation</h1>
              <p>Welcome to the next generation of mobile commerce and customer engagement. Meet your mobile customers where they want to be met.</p>
              <div className="hero__btn--img">
                 <img src={heroPicture_} alt="picture" />
              </div>
          </div>
          <div className="hero__block2">
                <img  width={480} height={480} src={heroPicture} alt="picture" />
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container section__container">
          <div className="section__block1">
            <h1>Used by industry leaders</h1>
          </div>
          <div className="section__block2">
              <img src={img1} alt="picture" />
              <img src={img2} alt="picture" />
              <img src={img3} alt="picture" />
              <img src={img4} alt="picture" />
              <img src={img5} alt="picture" />
              <img src={img6} alt="picture" />
          </div>
        </div>
      </section>
      <article className="article">
        <div className="container article__container">
          <div className="article__block__1">
            <h1>Make mobile journeys easier, faster <br /> and frictionless for your clients</h1>
          </div>
          <div className="article__block__2">
            <div className="block1">
              <h4>Easy to use</h4>
              <p>A complete set of tools to enable <br /> marketing teams to easily curate, <br /> personalize, contextualize, send, <br /> integrate and track campaigns - no <br /> coding required.</p>
              <p>Our software design philosophy is all <br /> about the mobile end user, in particular <br /> their preference to Tap not Type.</p>
            </div>
            <div className="block2">
              <h4>Easy to use</h4>
              <p>A complete set of tools to enable <br /> marketing teams to easily curate, <br /> personalize, contextualize, send, <br /> integrate and track campaigns - no <br /> coding required.</p>
              <p>Our software design philosophy is all <br /> about the mobile end user, in particular <br /> their preference to Tap not Type.</p>
            </div>
            <div className="block3">
              <h4>Easy to use</h4>
              <p>A complete set of tools to enable <br /> marketing teams to easily curate, <br /> personalize, contextualize, send, <br /> integrate and track campaigns - no <br /> coding required.</p>
              <p>Our software design philosophy is all <br /> about the mobile end user, in particular <br /> their preference to Tap not Type.</p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default App
