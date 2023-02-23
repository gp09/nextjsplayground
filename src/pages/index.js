import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const renderNav = () => {
    return (
      <nav className={styles.contentContainer}>
        <p>
          My Logo
        </p>
        <ul>
          <li>
            Demos
          </li>
          <li>
            Academy
          </li>
          <li>
            Programs
          </li>
          <li>
            Schedule
          </li>
          <li>
            All Pages
          </li>
          <li>
            Get in Touch
          </li>
        </ul>
      </nav>
    )
  }

  return (
    <>
      <Head>
        <title>Next js Landing Page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;500&display=swap" rel="stylesheet"/>

        <meta name="description" content="Next js landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-157371912-1"
      />
      <Script id="google-analytics" >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-157371912-1');
        `}
      </Script> 
      <main className={`${styles.main}`}>       
          <div className={`${styles.container} ${styles.container1}`}>
            <div className={styles.overlayBlackBg}>
              <header className={styles.header}>
                {renderNav()}
              </header>
              <div className={`${styles.flexContainer}`}>
                  <div className={styles.contentContainer}>
                      <div className={styles.center}>
                          <h1>Being fast in tennis is everything.</h1>
                      </div>
                      <div className={styles.center}>
                          <button>Signup</button>
                      </div>
                  </div>
              </div>
            </div>            
          </div>       
          <div className={`${styles.container} ${styles.black} ${styles.container2}`}>
            <div className={`${styles.flexContainer} ${styles.contentContainer} ${styles.justifyBetween}`}>
              <div className={`${styles.width50} ${styles.greyContent}`}>
               <div className={`${styles.container2Responsive}`}>
                    <h3>LEADING #1 TENNIS CENTRE</h3>  
                    <hr/>
                    <p>We want to create an environment ideal for building craft. Our goal is to become the best tennis perfomance centre in the world</p>
                    <button>Hello</button>
               </div>
              </div>
              <div className={`${styles.flexContainer} ${styles.width50} ${styles.flexWrap}`}>
                <div className={`${styles.width50} $`}>
                  <h2 className={styles.container2Number}>10+</h2>
                  <p>Professional Trainers</p>
                </div>
                <div className={`${styles.width50}`}>
                  <h2 className={styles.container2Number}>18</h2>
                  <p>Courts</p>
                </div>
                <div className={`${styles.width50}`}>
                  <h2 className={styles.container2Number}>12</h2>
                  <p>Classes</p>
                </div>
                <div className={`${styles.width50}`}>
                  <h2 className={styles.container2Number}>10k+</h2>
                  <p>Students</p>
                </div>
              </div>     
                         
            </div>
          </div>  
          <div className={`${styles.container} ${styles.white} ${styles.container3} ${styles.blackContent}`}>            
            <div className={styles.contentContainer}>
              <p className={`${styles.title} ${styles.greyContent}`}>Our Story</p>
              <h2>Founded in 1964 by a team of professional tennis playersour club</h2>
              <div className={`${styles.flexContainer} ${styles.justifyBetween}`}>
                <div>
                  <img src='https://assets.website-files.com/63a1b002ae022572d8e8248e/63a2f344ddd319f9a52e856d_Image%20Left%20About.jpg' />
                </div>                
                <div className={`${styles.flexContainer} ${styles.flexDirectionColumn}`}>
                  <button>About</button>
                  <img src='https://assets.website-files.com/63a1b002ae022572d8e8248e/63a2f343e938102829e69c40_Image%20Right%20About.jpg' />                
                </div>                
              </div>
              <p className={`${styles.title} ${styles.greyContent}`}>CLASSES</p>
              <h2>Tennis lessons are a great gift for Christmas or Birthdays all year round</h2> 
              <div className={styles.contentLeft}>
                <p>Can help someone work on something specific or develop your overall game and strategy!</p>
                <button>View our programs</button>
              </div>              
              <img className={styles.relativeImage} src='https://assets.website-files.com/63a1b002ae022572d8e8248e/63a30a1dca8aa63d3d1dbf9e_Rectangle%205%20(1).jpg'/>
            </div>                     
          </div>
          <div className={`${styles.container} ${styles.black} ${styles.container4}`}>
            <div className={`${styles.contentContainer}`}>
              <div className={`${styles.flexContainer} ${styles.justifyBetween}`}>
                  <div className={`${styles.width50} ${styles.greyContent}`}>
                      <h3>OUR COACHES</h3>                 
                  </div>
                  <div className={`${styles.flexContainer} ${styles.width50} ${styles.flexWrap}`}>
                      <h2 className={styles.container4TagLine}>Grow your skill with academy team</h2>
                  </div>                                                         
              </div>              
              <div className={`${styles.flexContainer} ${styles.justifyBetween}`}>
                  <div>
                      <img src='https://assets.website-files.com/63a1b002ae022572d8e8248e/63a58f74efca1169e6e1c91f_Rectangle%2017%20(1).jpg'/>
                      <p>Brooklyn Simmons</p>
                  </div>
                  <div>
                      <img src='https://assets.website-files.com/63a1b002ae022572d8e8248e/63a58f7e65217b35011dc164_Rectangle%2018%20(1).jpg'/>
                      <p>Jenny Wilson</p>
                  </div>
                  <div>
                      <img src='https://assets.website-files.com/63a1b002ae022572d8e8248e/63a58f8d76dc2e239dabdf0b_Rectangle%2019%20(1).jpg'/>
                      <p>Bessie Cooper</p>
                  </div>
                  <div>
                      <img src='https://assets.website-files.com/63a1b002ae022572d8e8248e/63a58fb1efca1139aae1cf98_Rectangle%2020%20(1).jpg'/>
                      <p>Albert Flores</p>
                  </div>
              </div>
              <div className={styles.container4BottomImage}>
                <img src='https://assets.website-files.com/63a1b002ae022572d8e8248e/63a5912e3088268016128381_Rectangle%2021%20(1).jpg'/>
              </div>
            </div>          
          </div>  
          <div className={`${styles.container} ${styles.white} ${styles.container5} ${styles.blackContent}`}>            
            <div className={styles.contentContainer}>             
              <div className={`${styles.flexContainer} ${styles.spaceAround}`}>
                <div>
                  <img src='https://assets.website-files.com/63a1b002ae022572d8e8248e/63a5a30c6ccbdb51725f6490_Rectangle%2022%20(1).jpg' />
                </div>                
                <div className={`${styles.flexContainer} ${styles.flexDirectionColumn}`}>
                  <h2>Unique venue.<br/>Exceptional team.<br/>One passion.</h2>
                </div>                
              </div>             
            </div>                     
          </div>
          <div className={`${styles.container} ${styles.footer} ${styles.black}`}>            
            <div className={`${styles.contentContainer} ${styles.center}`}>
                <p>Made by Priyank.<br/> <span className={styles.footerSubtitle}>Inspired from Webflow template</span></p>
            </div>
          </div>
      </main>
    </>
  )
}
