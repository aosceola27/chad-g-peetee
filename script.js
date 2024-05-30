gsap.registerPlugin(ScrollTrigger);

// lenis smooth scrolling
const lenis = new Lenis({
   duration: 2.4,
   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // Easing function
   smooth: true,  // Enable smooth scrolling
   direction: 'vertical',  // Direction of the scroll ('vertical' or 'horizontal')
   gestureDirection: 'vertical',  // Direction of gestures ('vertical' or 'horizontal')
   smoothTouch: true,  // Enable smooth touch
   touchMultiplier: 2,  // Multiplier for touch gestures
   infinite: false,  // Enable infinite scroll
});
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

// Site loader
window.addEventListener("load", function () {
    document.querySelector('#loader p').style.display = "none";
    document.getElementById("loader_img").style.display = "block";
    
    setTimeout(() => {
        gsap.to("#loader", {
            y: "-100vh",
            duration: 1,
            ease: "expo.out",
        });
        typewriter(tw_herotext, "#herotext", 40, 20);
    }, 8000); // make sure to reset to 8 seconds
});

// custom cursor
window.addEventListener("mousemove", e => {
    gsap.to("#custom-cursor", {
      x: e.pageX,
      y: e.pageY,
      ease: "power1.out",
      delay: 0.04,
    });
});

// Typewriter effect
const typewriter = (texts, element, speed, scrollAt) => {
    let iIndex = 0; // start printing array at this position
    let iArrLength = texts[0].length; // the length of the current text
    let iTextPos = 0; // initialise text position
    let sContents = ""; // initialise contents variable
    let iRow; // initialise current row

    const type = () => {
        sContents = " ";
        iRow = Math.max(0, iIndex - scrollAt);
        const destination = document.querySelector(element);

        while (iRow < iIndex) {
            sContents += `${texts[iRow++]}<br />`;
        }
        destination.innerHTML =
            sContents + texts[iIndex].substring(0, iTextPos) + "▮";

        if (iTextPos++ === iArrLength) {
            iTextPos = 0;
            if (++iIndex !== texts.length) {
                iArrLength = texts[iIndex].length;
                setTimeout(type, 200); // Pause before starting the next line
            }
        } else {
            setTimeout(type, speed);
        }
    };

    type();
};
const tw_herotext = [
    "Certainly!",
    "Buckle up, because we're about to embark on an",
    "exciting journey through the history of AI. Let's do this!",
];




// infinitely scrolling title effect
function cloneH1Elements() {
    const scroller = document.getElementById('scroller');
    const h1Elements = scroller.querySelectorAll('#scroller > h1');
    const viewportWidth = window.innerWidth + 721.3; // Add 721.3 to account for the width of the text

    // Clear previous clones
    const existingClones = scroller.querySelectorAll('.clone');
    existingClones.forEach(clone => clone.remove());

    let totalWidth = 0;
    let index = 0;

    while (totalWidth < viewportWidth) {
        const h1 = h1Elements[index];
        const h1Width = h1.offsetWidth;

        if (totalWidth + h1Width > viewportWidth) break;

        const clonedH1 = h1.cloneNode(true);
        clonedH1.classList.add('clone');
        scroller.appendChild(clonedH1);
        totalWidth += h1Width;
        index = (index + 1) % h1Elements.length;
    }
}
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
cloneH1Elements();
window.addEventListener('resize', debounce(cloneH1Elements, 100));


// header animations
gsap.to("header", {
    scrollTrigger: {
        trigger: "header",
        scrub: true,
        start: "top top",
        end: "bottom top",
    },
    scale: 0.8,
});

gsap.to("video", {
    scrollTrigger: {
        trigger: "video",
        scrub: true,
        start: "top top",
        end: "bottom top",
    },
    "filter": "brightness(0)",
});


// 1950s animations
gsap.to("#text1950s p", {
    scrollTrigger: {
        trigger: "#text1950s",
        scrub: 1,
        pin: true,
        start: "center center",
        end: "bottom center",
    },
    "font-size": "100vh",
    filter: "blur(0.4rem)",
    color: "transparent",
});
gsap.to("#text1950s p:nth-of-type(1)", {
    scrollTrigger: {
        trigger: "#text1950s",
        scrub: 1,
        start: "center center",
        end: "bottom center",
    },
    x: "-80%",
});
gsap.to("#text1950s p:nth-of-type(2)", {
    scrollTrigger: {
        trigger: "#text1950s",
        scrub: 1,
        start: "center center",
        end: "bottom center",
    },
    x: "80%",
});
gsap.to("#text1950s span", {
    scrollTrigger: {
        trigger: "#text1950s",
        scrub: 1,
        start: "center center+=10%",
        end: "bottom center",
    },
    y: "200%",
    filter: "blur(0.4rem)",
    color: "transparent",
    scale: 0.9,
});

gsap.to("#content1950", {
    scrollTrigger: {
        trigger: "#text1950s",
        scrub: 1,
        start: "center center",
        end: "bottom center",
        onEnter: () => {
            const tw_1950desc = [
                `In 1950, British mathematician and logician Alan Turing published a landmark paper titled "Computing Machinery and Intelligence,"`,
                `in which he introduced the concept of the Turing Test.`,
                `This test was designed to determine whether a machine could exhibit intelligent behavior indistinguishable from that of a human.`,
                `Turing's work laid the foundational theoretical framework for artificial intelligence,`,
                `sparking interest and research in the possibility of creating thinking machines.`
            ];
            typewriter(tw_1950desc, "#desc1950", 20, 20);
        }
    },
    opacity: 1,
    scale: 1,
});

gsap.to("#timeline", {
    scrollTrigger: {
        trigger: '#text1950s',
        start: 'top top',
        end: 'bottom center',
        scrub: 2,
    },

    y: "100vh",
    width: "5px",
    left: "calc(14vh - 2.5px)",
    "border-radius": "0",
});

gsap.to("#dates1950s", {
    scrollTrigger: {
        trigger: '#text1950s',
        start: 'top top',
        end: 'bottom center',
        scrub: 2,
    },
    y: "-85vh",
    x: 20,
});

gsap.to("video:nth-of-type(2)", {
    scrollTrigger: {
        trigger: '#text1950s',
        start: 'top top',
        end: 'bottom center',
        scrub: 2,
    },
    opacity: 1,
    "filter": "brightness(0.05)",
});


const tl50s = gsap.timeline({
    scrollTrigger: {
        trigger: "#text1950s",
        scrub: 2,
        start: "bottom+=100% top",
        end: "bottom+=200% top",
        onEnter: () => {
            const tw_1956desc = [
                `In 1956, the Dartmouth Conference, organized by John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon,`,
                `marked a pivotal moment in the history of artificial intelligence.`,
                `This seminal event, held at Dartmouth College, was where the term "artificial intelligence" was officially coined.`,
                `The conference brought together leading researchers who laid out the foundational goals and directions for AI research,`,
                `establishing a collaborative scientific community dedicated to the pursuit of creating intelligent machines.`
            ];
            typewriter(tw_1956desc, "#desc1956", 20, 20);
        }
    }});
tl50s.to("#content1950", {y: '-100vh',})
  .to("#dates1950s", {y: '-205vh',}, '<')
  .to("#content1956", {y: '-100vh',}, '<');


// 1960s animations
const tl60s = gsap.timeline({
    scrollTrigger: {
        trigger: "section:nth-of-type(2)",
        scrub: 2,
        start: "top bottom",
        end: "bottom top",
    }});
tl60s.to("#content1950", {y: '-200vh',})
  .to("#dates1950s", {y: '-325vh',}, '<')
  .to("#content1956", {y: '-250vh',}, '<')
  .to("#timeline", {y: '-100vh',}, '<');

gsap.to('#text1960s',{
    scrollTrigger: {
        trigger: "#text1960s",
        scrub: 2,
        pin: true,
        start: "center center",
        end: "bottom top",
    }
});

gsap.to('#eliza',{
    scrollTrigger: {
        trigger: "#text1960s",
        scrub: 2,
        start: "center center",
        end: "bottom top",
        onLeave: () => {
            document.querySelector('#text1960s').style.display = "none";
            const tw_elizaintro = [
                `Meet Eliza.`
            ];
            typewriter(tw_elizaintro, "#elizaintro", 100, 20);
        }
    },
    left: "0",
});
gsap.to('#eliza',{
    scrollTrigger: {
        trigger: "#text1960s",
        scrub: 2,
        start: "center center",
        end: "bottom top",
        onLeave: () => {
            document.querySelector('#text1960s').style.display = "none";
            const tw_elizaintro = [
                `Meet Eliza.`
            ];
            typewriter(tw_elizaintro, "#elizaintro", 100, 20);
        }
    },
    left: "0",
});

const tleliza = gsap.timeline({
    scrollTrigger: {
        trigger: "#text1960s",
        scrub: 2,
        start: "bottom+=100vh top",
        end: "bottom top",
        onEnter: () => {
            const tw_1966desc = [
                `In 1966, Joseph Weizenbaum, a distinguished computer scientist at MIT,`,
                `created ELIZA, an early natural language processing program.`,
                `Utilizing pattern matching and pre-defined scripts, ELIZA simulated conversational exchanges,`,
                `specifically mimicking the dialogue style of a Rogerian psychotherapist.`,
                `This pioneering endeavor showcased the potential and limitations of human-computer interaction,`,
                `establishing a critical foundation for the subsequent advancements in natural language processing and artificial intelligence.`
            ];
            typewriter(tw_1966desc, "#desc1966", 20, 20);
        }
    }});
tleliza.to("#eliza img", {height: '100vh',
                          width: "30vw",
                          height: "unset",
                          float: "right",
                           "margin-right": "10vh",
                           "margin-top": "10vh",
                           animation: "float 15s ease-in-out infinite",})
  .to("#elizaintro", {y: '-100vh',}, '<')
  .to("#dates1960s", {y: '-85vh', x: 20,}, '<')
  .to("#timeline", {y: '100vh',}, '<');

const tl1969 = gsap.timeline({
    scrollTrigger: {
        trigger: "#text1960s",
        scrub: 2,
        start: "bottom+=200% top",
        end: "bottom+=300% top",
        onEnter: () => {
            const tw_1969desc = [
                `In 1969, SRI International introduced Shakey the Robot,`,
                `the first robot to integrate perception, reasoning, and action.`,
                `Equipped with a camera, bump sensors, and a laser rangefinder,`,
                `Shakey could navigate its environment and perform tasks autonomously.`,
                `Utilizing the STRIPS planning algorithm, Shakey's ability to break down complex tasks into simpler actions marked a significant milestone in AI and robotics,`,
                `paving the way for future advancements in autonomous systems.`
            ];
            typewriter(tw_1969desc, "#desc1969", 20, 20);
        }
    }});
tl1969.to("#eliza", {y: '-150vh',})
  .to("#content1969", {y: '-100vh',}, '<')
  .to("#dates1960s", {y: '-205vh', x: 20,}, '<');


// 1990s animations
const tl90s = gsap.timeline({
    scrollTrigger: {
        trigger: "section:nth-of-type(3)",
        scrub: 2,
        start: "top bottom",
        end: "bottom top",
    }});
tl90s.to("#content1969", {y: '-200vh',})
  .to("#dates1960s", {y: '-300vh',}, '<');

gsap.to('#text1990s',{
    scrollTrigger: {
        trigger: "#text1990s",
        scrub: 2,
        start: "top bottom",
        end: "bottom center",
    },
    x: "-160vw",
});

const tl1997 = gsap.timeline({
    scrollTrigger: {
        trigger: "#text1990s",
        scrub: 2,
        start: "center center",
        end: "bottom top",
        onEnter: () => {
            const desc = [
                `In 1997, IBM's Deep Blue defeated world chess champion Garry Kasparov`,
                `in a historic six-game match, marking the first time a computer`,
                `beat a reigning champion in standard chess.`,
                `Deep Blue could evaluate 200 million positions per second,`,
                `using a combination of brute-force search techniques and sophisticated algorithms.`,
                `This victory demonstrated the power of AI in complex strategic tasks`,
                `and sparked widespread public interest,`,
                `highlighting AI's potential in various applications beyond theoretical research.`
            ];
            typewriter(desc, "#desc1997", 20, 20);
        }
    }});
tl1997.to("#content1997", {y: '-100vh',})
  .to("#dates1990s", {y: '-85vh', x: 20,}, '<');


// y2k animations
gsap.to('#y2k',{
    scrollTrigger: {
        trigger: "#y2k",
        scrub: 2,
        start: "top bottom",
        end: "top top",
    },
    'border-top-left-radius': '90% 10%',
    'border-top-right-radius': '90% 10%',
    'font-size':'100cqh',
});

const tly2k = gsap.timeline({
    scrollTrigger: {
        trigger: "#y2k",
        scrub: 2,
        start: "center center",
        end: "center center",
    }});
tly2k.to("#content1997", {y: '-200vh',})
  .to("#content2009", {y: '-100vh',}, '<')
  .to("#dates1990s", {y: '-205vh', x: 20,}, '<');

gsap.to('#y2k',{
    scrollTrigger: {
        trigger: "#y2k",
        scrub: 2,
        start: "center center",
        end: "bottom top",
    },
    'border-bottom-left-radius': '60% 40%',
    'border-bottom-right-radius': '60% 40%',
});

const tl2009 = gsap.timeline({
    scrollTrigger: {
        trigger: "#y2k",
        scrub: 2,
        start: "bottom top",
        end: "bottom top",
        onLeave: () => {
            const desc = [
                `In 2009, Google, one of the many technology companies based in the US, launched its self-driving car project, which later became Waymo. This groundbreaking initiative aimed to develop fully autonomous vehicles capable of navigating complex environments without human intervention. The project leveraged advanced AI, machine learning, and sensor technologies to enhance vehicle safety and efficiency. By successfully demonstrating autonomous driving on public roads, Google's project highlighted AI's transformative potential in the transportation industry and paved the way for future advancements in autonomous mobility.`
            ];
            typewriter(desc, "#desc2009", 20, 20);
        }
    }});
tly2k.to("#content1997", {y: '-200vh',})
  .to("#content2009", {y: '-100vh',}, '<')
  .to("#dates1990s", {y: '-205vh', x: 20,}, '<');

const tl2011 = gsap.timeline({
    scrollTrigger: {
        trigger: "#y2k",
        scrub: 2,
        start: "bottom+=100% top",
        end: "bottom+=200% top",
        onEnter: () => {
            const desc = [
                `In 2011, Apple, another tech company based in the US,`,
                `launched Siri, an intelligent virtual assistant integrated into`,
                `the iPhone 4S. Siri utilized natural language processing`,
                `and voice recognition technologies to interact with users,`,
                `answer questions, provide recommendations,`,
                `and perform tasks like sending messages and setting reminders.`,
                `Siri's introduction marked a significant advancement in consumer AI,`,
                `making voice-activated digital assistance widely accessible and setting`,
                `the standard for future developments in AI-powered personal assistants.`
            ];
            typewriter(desc, "#desc2011", 20, 20);
        }
    }});
tl2011.to("#content2009", {y: '-200vh',})
  .to("#content2011", {y: '-100vh',}, '<')
  .to("#dates1990s", {y: '-325.286vh',}, '<');

const tl2014 = gsap.timeline({
    scrollTrigger: {
        trigger: "#y2k",
        scrub: 2,
        start: "bottom+=300% top",
        end: "bottom+=400% top",
        onEnter: () => {
            const desc = [
                `In 2014, Amazon introduced Alexa, an AI-powered virtual assistant, along with the Echo smart speaker. Alexa used natural language processing and voice recognition to perform various tasks, such as controlling smart home devices, providing weather updates, playing music, and answering questions. This launch revolutionized the smart home industry, making voice-controlled interactions a mainstream technology and establishing a new standard for AI in everyday life.`
            ];
            typewriter(desc, "#desc2014", 20, 20);
        }
    }});
tl2014.to("#content2011", {y: '-200vh',})
  .to("#content2014", {y: '-100vh',}, '<')
  .to("#dates1990s", {y: '-445.572vh',}, '<');

const tl2017 = gsap.timeline({
    scrollTrigger: {
        trigger: "#y2k",
        scrub: 2,
        start: "bottom+=500% top",
        end: "bottom+=600% top",
        onEnter: () => {
            const desc = [
                `In 2017, China unveiled its ambitious AI Development Plan, aiming to become the global leader in artificial intelligence by 2030. The plan outlined a comprehensive strategy to enhance AI research, development, and application across various sectors, including healthcare, education, and security. Significant investments were directed towards AI innovation, fostering collaboration between government, academia, and industry. This initiative marked China's commitment to advancing its technological capabilities and securing a dominant position in the global AI landscape.`
            ];
            typewriter(desc, "#desc2017", 20, 20);
        }
    }});
tl2017.to("#content2014", {y: '-200vh',})
  .to("#content2017", {y: '-100vh',}, '<')
  .to("#dates1990s", {y: '-565.858vh',}, '<');

const tl2018 = gsap.timeline({
    scrollTrigger: {
        trigger: "#y2k",
        scrub: 2,
        start: "bottom+=700% top",
        end: "bottom+=800% top",
        onEnter: () => {
            const desc = [
                `In 2018, India unveiled its National AI Strategy, aimed at integrating artificial intelligence across various sectors to drive economic growth and societal development. The strategy, spearheaded by NITI Aayog, focuses on leveraging AI to enhance key areas such as healthcare, agriculture, education, smart cities, and infrastructure. It underscores the development of AI research and innovation hubs, fostering public-private partnerships, and creating a skilled AI workforce. This comprehensive approach is designed to position India as a global leader in AI, harnessing its potential to address local challenges and spur economic advancement.`
            ];
            typewriter(desc, "#desc2018", 20, 20);
        }
    }});
tl2018.to("#content2017", {y: '-200vh',})
  .to("#content2018", {y: '-100vh',}, '<')
  .to("#dates1990s", {y: '-686.144vh',}, '<');

const tl2019 = gsap.timeline({
    scrollTrigger: {
        trigger: "#y2k",
        scrub: 2,
        start: "bottom+=900% top",
        end: "bottom+=1000% top",
        onEnter: () => {
            const desc = [
                `In 2019, the United States launched the American AI Initiative, a strategic plan to bolster AI research, development, and deployment. This initiative aimed to maintain the nation's leadership in AI by prioritizing funding for AI research, enhancing access to AI resources, and promoting collaboration between government, industry, and academia. The initiative also focused on developing a workforce skilled in AI technologies and establishing ethical guidelines to ensure responsible AI use. This comprehensive approach highlighted the U.S. commitment to advancing AI while addressing societal impacts and ethical considerations.`
            ];
            typewriter(desc, "#desc2019", 20, 20);
        }
    }});
tl2019.to("#content2018", {y: '-200vh',})
  .to("#content2019", {y: '-100vh',}, '<')
  .to("#dates1990s", {y: '-806.430vh',}, '<');

const tl2020 = gsap.timeline({
    scrollTrigger: {
        trigger: "#y2k",
        scrub: 2,
        start: "bottom+=1100% top",
        end: "bottom+=1200% top",
        onEnter: () => {
            const desc = [
                `In 2020, artificial intelligence played a critical role in addressing the COVID-19 pandemic. AI models were employed to predict and monitor the spread of the virus, helping public health officials make informed decisions. AI algorithms accelerated vaccine development by analyzing vast datasets to identify potential vaccine candidates quickly. Additionally, AI-powered telemedicine platforms facilitated remote healthcare consultations, ensuring continued medical support while minimizing infection risks. These applications highlighted AI's capacity to provide innovative solutions in global health crises.`
            ];
            typewriter(desc, "#desc2020", 20, 20);
        }
    }});
tl2020.to("#content2019", {y: '-200vh',})
  .to("#content2020", {y: '-100vh',}, '<')
  .to("#dates1990s", {y: '-926.716vh',}, '<')
  .to("#covid", {left: "unset", right: "8vh", top: "10vh", rotate: "270deg",}, '<');

const tl2021 = gsap.timeline({
    scrollTrigger: {
        trigger: "#y2k",
        scrub: 2,
        start: "bottom+=1300% top",
        end: "bottom+=1400% top",
        onEnter: () => {
            const desc = [
                `In 2021, the European Union proposed comprehensive AI regulations aimed at ensuring the ethical and safe deployment of artificial intelligence across member states. The proposed regulations include stringent guidelines on AI applications, categorizing them by risk levels, and mandating rigorous oversight for high-risk AI systems, such as those used in critical infrastructure, healthcare, and law enforcement. The framework emphasizes transparency, accountability, and the protection of fundamental rights, seeking to balance innovation with public trust and safety. This initiative underscores the EU's commitment to fostering responsible AI development and maintaining its leadership in setting global AI standards.`
            ];
            typewriter(desc, "#desc2021", 20, 20);
        }
    }});
tl2021.to("#content2020", {y: '-200vh',})
  .to("#content2021", {y: '-100vh',}, '<')
  .to("#dates1990s", {y: '-1047vh',}, '<');

const tlscrollPrep = gsap.timeline({
    scrollTrigger: {
        trigger: "#y2k",
        scrub: 2,
        start: "bottom+=1500% top",
        end: "bottom+=1600% top",
    }});
tlscrollPrep.to("#content2021", {y: '-200vh',})
  .to("#timeline", {y: '-100vh',}, '<')
  .to("#dates1990s", {y: '-1165vh',}, '<')
  .to("#gpt_logo", {scale: 1,}, '<');

const tlscroller = gsap.timeline({
    scrollTrigger: {
        trigger: "section:nth-of-type(4)",
        scrub: 2,
        pin: true,
        start: "center center",
        end: "400% top",
    }});
tlscroller.to("#scroller2", {x: '-300vw',})
  .to("#gpt_logo", {rotate: "-270deg",}, '<');

const tl2022 = gsap.timeline({
    scrollTrigger: {
        trigger: "#scroller2",
        scrub: 2,
        start: "top+=200% top",
        end: "top+=300% top",
        onEnter: () => {
            const desc = [
                `In 2022, OpenAI released ChatGPT, a powerful language model based on the GPT-3.5 architecture. ChatGPT demonstrated advanced natural language understanding and generation capabilities, revolutionizing areas such as customer service, where it enabled automated, yet highly personalized, interactions. It also significantly impacted content creation by generating high-quality text for various applications, and enhanced educational tools by providing instant tutoring and support. ChatGPT's versatility and ease of use highlighted the advancements in AI technology, making sophisticated AI tools more accessible and practical for businesses and individuals alike.`
            ];
            typewriter(desc, "#desc2022", 20, 20);
        }
    }});
tl2022.to("#content2022", {y: '-100vh',})
  .to("#timeline", {y: '100vh',}, '<')
  .to("#dates2020s", {y: '-85vh', x: 20,}, '<');

const tl2024 = gsap.timeline({
    scrollTrigger: {
        trigger: "#scroller2",
        scrub: 2,
        start: "top+=400% top",
        end: "top+=500% top",
        onEnter: () => {
            const desc = [
                `Since the release of ChatGPT, there has been a rapid increase in AI tools and technologies across various sectors. New AI-driven applications emerged in fields such as healthcare, where AI assisted in diagnostics and personalized treatment plans, and in finance, where AI enhanced fraud detection and automated trading. Educational platforms integrated AI for personalized learning experiences, while creative industries leveraged AI for content creation, design, and music composition. This surge in AI innovations has transformed workflows, boosted productivity, and expanded the possibilities for AI-driven solutions in everyday life.`
            ];
            typewriter(desc, "#desc2024", 20, 20);
        }
    }});
tl2024.to("#content2024", {y: '-100vh',})
  .to("#content2022", {y: '-200vh',}, '<')
  .to("#dates2020s", {y: '-205vh',}, '<');




// footer
const tloutro = gsap.timeline({
    scrollTrigger: {
        trigger: "#scroller2",
        scrub: 2,
        start: "top+=700% bottom",
        end: "top+=800% top",
        onEnter: () => {
            const desc = [
                `"The rapid advancement and widespread adoption`,
                ` of AI technologies continue to reshape our world,`,
                ` driving innovation and transforming industries,`,
                ` as we navigate the future of artificial intelligence."`,
                `- Chad G. Peetee`
            ];
            typewriter(desc, "#outrotext", 40, 20);
        }
    }});
tloutro.to("#content2024", {y: '-200vh',})
  .to("#timeline", {y: '-100vh',}, '<')
  .to("#dates2020s", {y: '-405vh',}, '<')
  .to("video:nth-of-type(2)", {opacity: 0, "filter": "brightness(0.00)",}, '<')
  .to("video:nth-of-type(1)", {"filter": "brightness(0.2)",}, '<');

// infinitely scrolling title effect
function cloneH1Elements2() {
    const scroller = document.getElementById('scroller3');
    const h1Elements = scroller.querySelectorAll('#scroller3 > h1');
    const viewportWidth = window.innerWidth + 721.3; // Add 721.3 to account for the width of the text

    // Clear previous clones
    const existingClones = scroller.querySelectorAll('.clone');
    existingClones.forEach(clone => clone.remove());

    let totalWidth = 0;
    let index = 0;

    while (totalWidth < viewportWidth) {
        const h1 = h1Elements[index];
        const h1Width = h1.offsetWidth;

        if (totalWidth + h1Width > viewportWidth) break;

        const clonedH1 = h1.cloneNode(true);
        clonedH1.classList.add('clone');
        scroller.appendChild(clonedH1);
        totalWidth += h1Width;
        index = (index + 1) % h1Elements.length;
    }
}
cloneH1Elements2();
window.addEventListener('resize', debounce(cloneH1Elements2, 100));
