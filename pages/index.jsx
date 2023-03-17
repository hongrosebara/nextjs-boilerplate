import Head from 'next/head'
import Image from 'next/image'
import { Layout } from "@/components/common"

export default function Home() {
  return (
    <section className='section-container'>
      <div className='section-row'>
        <div className='grid-item grid--one'>
          <div className='testimonials testimonial--1'>
            <div className='testimonial--1__content'>
              <div className='person person--1'>
                <Image className='person__image' src="/images/image-daniel.jpg" height={28} width={28} />
                <div className='person__info'>
                  <h3>Daniel Clifford</h3>
                  <p>Verified Graduate</p>
                </div>
              </div>
              <div className='feedback--main feedback--1'>
                I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.
              </div>
              <div className='feedback--sub feedback--1'>
                “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the  best - and most grueling - time of my life. Since completing the course, I’ve  successfully switched careers, working as a Software Engineer at a VR startup. ”
              </div>
            </div>
          </div>
        </div>

        <div className='grid-item grid--two'>
          <div className='testimonials testimonial--2'>
            <div className='testimonial--2__content'>
              <div className='person person--2'>
                <Image className='person__image person--2__image' src="/images/image-jonathan.jpg" height={28} width={28} />
                <div className='person__info'>
                  <h3>Jonathan Walters</h3>
                  <p>Verified Graduate</p>
                </div>
              </div>
              <div className='feedback--main feedback--2'>
                The team was very supportive and kept me motivated
              </div>
              <div className='feedback--sub feedback--2'>
                “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. “
              </div>
            </div>
          </div>
        </div>

        <div className='grid-item grid--three'>
          <div className='testimonials testimonial--3'>
            <div className='testimonial--2__content'>
              <div className='person person--2'>
                <Image className='person__image person--2__image' src="/images/image-jeanette.jpg" height={28} width={28} />
                <div className='person__info'>
                  <h3>Jeanette Harmon</h3>
                  <p>Verified Graduate</p>
                </div>
              </div>
              <div className='feedback--main feedback--3'>
                An overall wonderful and rewarding experience
              </div>
              <div className='feedback--sub feedback--3'>
                “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
              </div>
            </div>
          </div>
        </div>

        <div className='grid-item grid--four'>
          <div className='testimonials testimonial--4'>
            <div className='testimonial--2__content'>
              <div className='person person--2'>
                <Image className='person__image person--2__image' src="/images/image-patrick.jpg" height={28} width={28} />
                <div className='person__info'>
                  <h3>Patrick Abrams</h3>
                  <p>Verified Graduate</p>
                </div>
              </div>
              <div className='feedback--main feedback--4'>
                Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.
              </div>
              <div className='feedback--sub feedback--4'>
                “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.  ”
              </div>
            </div>
          </div>
        </div>

        <div className='grid-item grid--five'>
          <div className='testimonials testimonial--5'>
            <div className='testimonial--2__content'>
              <div className='person person--2'>
                <Image className='person__image person--2__image' src="/images/image-kira.jpg" height={28} width={28} />
                <div className='person__info'>
                  <h3>Kira Whittle</h3>
                  <p>Verified Graduate</p>
                </div>
              </div>
              <div className='feedback--main feedback--5'>
                Such a life-changing experience. Highly recommended!
              </div>
              <div className='feedback--sub feedback--5'>
                “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!  ”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Home.Layout = Layout
