import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Header from '@/componts/Header'

export default function Home() {
  return (
    
<>
      <Header page="Home"/>
      
      <main className={styles.main}>
      
        <div className={styles.portfolioContainer}>
          <h1 className={styles.heading1}>Fullstack Front End Developer</h1>
          <p className={styles.heading2}>Dan Spelt</p>
          <h2 className={styles.heading2}>Projects</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link className={styles.link} href="/todo">To Do List</Link>
            </li>
          </ul>
          <h2 className={styles.heading2}>About Dan</h2>
          <p className={styles.p}>
            As a web developer, I have extensive experience in building and
            maintaining websites using various web technologies, such as HTML, CSS,
            JavaScript, React, and Next.js. I have a strong understanding of
            responsive design and have experience working with different frameworks
            and libraries to create dynamic, interactive, and user-friendly
            interfaces. I have also had the opportunity to work on several projects,
            including a Google Chrome extension that I published to the web store.
            My experience working with version control systems, such as Bitbucket,
            and collaborating with team members over Wrike and Slack has given me a
            strong foundation in project management and teamwork. I am also
            committed to accessibility and have added features, such as a bigger
            font and keyboard navigation, to increase accessibility on the extension
            options page. In addition to my technical skills, I am also highly
            organized and able to apply feedback from peer reviews to improve the
            performance of my projects. I have experience compiling TypeScript into
            JavaScript and am passionate about constantly learning and growing as a
            developer. Outside of work, I enjoy making games with React Three Fiber.
            Overall, I am confident in my ability to deliver high-quality and
            user-friendly web experiences and am always eager to take on new
            challenges and grow as a developer.
          </p>
          <h2 className={styles.heading2}>Hobbies</h2>
          <p className={styles.p}>Making games with React Three Fiber</p>
          <p className={styles.p}>
            Victoria, BC • (250) 208 7997 •{" "}
            <a className={styles.link} href="mailto:danspelt24@gmail.com">Email</a>
            {" "}•{" "}
            <a className={styles.link} href="https://www.linkedin.com/in/dan-spelt-842016179/">LinkedIn</a>
            {" "}•{" "}
            <a className={styles.link} href="https://github.com/danspelt">Github</a>
          </p>
        </div>
    

      </main>
    </>
  )
}
