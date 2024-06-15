<template>
  <nav :class="{ nav: true, 'nav__blue': show }">
    <div :class="{ 'content__hide': true, container: content }">
      <img
        src="/src/img/profile.png"
        alt="Ryan McBride"
        style="height: 50px; width: 50px; border-radius: 50%; margin: 1rem;"
      />
      <div class="nav-menu">
        <RouterLink to="/">Home</RouterLink>
        <a href="https://github.com/McBride-Ryan" class="nav-links">GitHub</a>
        <a
          href="https://www.linkedin.com/in/ryan-mcbride-50b242218/"
          class="nav-links"
        >LinkedIn</a>
        <a href="@/docs/RyanMcBride.pdf" download="McBride" class="nav-links">
          Resume
        </a>
        </div>
      </div>
  </nav>
  <header className='header__container'>
        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Ryan McBride</span>
                <span className="heading-primary--sub">Software Engineer</span>
            </h1>

            <a href="#projects" className="btn btn--white btn--animated smooth-goto">See Projects</a>
        </div> 
    </header>
    <section className='about'>
            <div className="u-center-text u-margin-bottom-big">
                <h2 className='heading-secondary'>
                    Front End Concentrated
                    <br></br>
                    Full Stack Experience
                </h2>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">Motivated To Produce Results</h3>
                    <p className="paragraph">
                        As a persistent self-motivated learner, I use the fundementals and discipline to refine my craft: 
                        <br></br>
                        <br></br><i>"If you get one percent better each day for one year, you'll end up thirty-seven times better by the time you are done."</i><br></br><br></br>-- Atomic Habits (James Clear, 2018)
                    </p>
                    <h3 className="heading-tertiary u-margin-bottom-small">A Reliable Collaborator</h3>
                    <p className="paragraph">
                        I have worked as a Professional Software Engineer, and collaborated with NBC, FOX, and Showtime as an SAG/AFTRA Union Member.  
                    </p>

                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src='/src/img/javascript.png' alt="JS" className="composition__photo composition__photo--p1" />
                        <img src='/src/img/php.png' alt="Node" className="composition__photo composition__photo--p3" />
                        <img src='/src/img/react.png' alt="React" className="composition__photo composition__photo--p2" />
                    </div>
                </div>
            </div>
            <div><section className="features">
    <div className="row">
        <div className="col-1-of-4">
            <div className="feature-box">
                <i className="feature-box__icon icon-basic-webpage"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">Front End</h3>
                <p className="feature-box__text">
                    <ul>
                        <li>HTML | CSS</li>
                        <li>JavaScript | React</li>
                    </ul>
                </p>
            </div>
        </div>
        <div className="col-1-of-4">
            <div className="feature-box">
                <i className="feature-box__icon icon-basic-share"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">Server</h3>
                <p className="feature-box__text">
                    <ul>
                        <li>NodeJS | Express</li>
                        <li>PHP | Laravel</li>
                    </ul>
                </p>
            </div>
        </div>
        <div className="col-1-of-4">
            <div className="feature-box">
                <i className="feature-box__icon icon-basic-server2"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">Database</h3>
                <p className="feature-box__text">
                    <ul>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                    </ul>
                </p>
            </div>
        </div>
        <div className="col-1-of-4">
            <div className="feature-box">
                <i className="feature-box__icon icon-basic-cloud"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">Deployment</h3>
                <p className="feature-box__text">
                    <ul>
                        <li>Git</li>
                        <li>Docker</li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
</section></div>
            <div className="section-tours" id="projects">
        <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Project Portfolio
                </h2>
        </div>
        <div className="row">
          <div class="col-1-of-3">
        <div class="card">
            <div class="card__side card__side--front card__side--front-1">
                <a href="https://github.com/McBride-Ryan/IMDB-Clone" target="_blank" rel="noreferrer">
                    <div class="card__picture card__picture--1">      
                    </div>
                    <img src="" class="card__svg-icon" alt="" />
                    <h4 class="card__heading" >
                        <span class="card__heading-span--1">
                            IMDB CLONE
                        </span>
                    </h4>
                </a>
                <div class="card__description">
                    <p>
                        Movie application with authentication, middleware and API requests.
                    </p>
                </div>
                <div class="card__details">
                    <ul>
                        <li>PHP</li>
                        <li>Laravel</li>
                        <li>Livewire</li>
                        <li>MySQL</li>
                    </ul>
                    <div className='card__cta'><a href="https://github.com/McBride-Ryan/IMDB-Clone" className='card__btn' target="_blank" rel="noreferrer">Source Code</a></div>
                </div>  
            </div>
        </div>
    </div>
    <div class="col-1-of-3">
    <div class="card">
        <div class="card__side card__side--front card__side--front-2">
            <a href="https://github.com/McBride-Ryan/Bad-Bank" target="_blank" rel="noreferrer">
                <div class="card__picture card__picture--2">      
                </div>
                <img src="" class="card__svg-icon" alt="" />
                <h4 class="card__heading" >
                    <span class="card__heading-span--2">
                        Bad Bank
                    </span>
                </h4>
            </a>
            <div class="card__description">
                <p>
                    A client-side rendering banking application storing the data on the DOM.
                </p>
            </div>
            <div class="card__details">
                <ul>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>DOM</li>
                    <li>Stateful</li>
                </ul>
                <div className='card__cta'><a href="https://github.com/McBride-Ryan/Bad-Bank" className='card__btn' target="_blank" rel="noreferrer">Source Code</a></div>
            </div>  
        </div>
    </div>
</div>
<div class="col-1-of-3">
        <div class="card">
            <div class="card__side card__side--front card__side--front-3">
                <a href="https://github.com/McBride-Ryan/Atomic-Habits/tree/master" target="_blank" rel="noreferrer">
                <div class="card__picture card__picture--3">      
                </div>
                
                <img src="" class="card__svg-icon" alt="" />
                
                <h4 class="card__heading" >
                    <span class="card__heading-span--3">
                        Atomic Habits
                    </span>
                </h4>
                </a>
                <div class="card__description">
                    <p>
                        Habit Tracker using React. Using JSON as data storage to mock backend. 
                    </p>
                </div>
                <div class="card__details">
                    <ul>
                        <li>React</li>
                        <li>Node JS</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                    </ul>
                    <div className='card__cta'><a href="https://github.com/McBride-Ryan/Atomic-Habits/tree/master" className='card__btn' target="_blank" rel="noreferrer">Source Code</a></div>
                </div>  
            </div>
        </div>
    </div>
        </div>
    </div>
        </section>
        <div id="footer" className="footer" >
        <div className="footer-row">
          <div className="footer-name-ryan">
            <p className="footer__copyright">
                <a href="/" className="footer__link"><RouterLink to="/api/v1">Site By</RouterLink><br>Ryan McBride</a>
            </p>
        </div> 
      </div>
      </div>
</template>
<script >
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      show: false,
      content: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.controlNavbar);
    window.addEventListener("scroll", this.controlContent);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.controlNavbar);
    window.removeEventListener("scroll", this.controlContent);
  },
  methods: {
    controlNavbar() {
      if (window.scrollY > 100) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    controlContent() {
      if (window.scrollY > 100) {
        this.content = true;
      } else {
        this.content = false;
      }
    },
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>