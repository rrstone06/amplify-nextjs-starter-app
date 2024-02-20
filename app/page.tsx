import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </div>
      <Flex
    gap="0"
    direction="row"
    justifyContent="center"
    alignItems="center"
    position="relative"
    border="1px SOLID rgba(0,0,0,0)"
    borderRadius="4px"
    padding="7px 15px 7px 15px"
    backgroundColor="rgba(191,64,64,1)"
  >
    <Text
      fontFamily="Inter"
      fontSize="20px"
      fontWeight="700"
      color="rgba(255,255,255,1)"
      lineHeight="30px"
      textAlign="left"
      display="block"
      shrink="0"
      position="relative"
      whiteSpace="pre-wrap"
    >
      Button
    </Text>
  </Flex>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <span>+</span>
        <Image
          src="/amplify.svg"
          alt="Amplify Logo"
          width={45}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://docs.amplify.aws/gen2/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Review documentation for Amplify's code-first DX (Gen 2).</p>
        </a>

        <a
          href="https://docs.amplify.aws/gen2/start/quickstart/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Quickstart <span>-&gt;</span>
          </h2>
          <p>Follow a tutorial to build a fullstack app with Amplify Gen 2.</p>
        </a>

        <a
          href="https://docs.amplify.aws/gen2/build-a-backend/auth/set-up-auth/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Auth <span>-&gt;</span>
          </h2>
          <p>Zero-config Auth UI components with social sign-in and MFA.</p>
        </a>

        <a
          href="https://docs.amplify.aws/gen2/build-a-backend/data/set-up-data/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Data <span>-&gt;</span>
          </h2>
          <p>
            Fully-typed real-time API with NoSQL database.
          </p>
        </a>
      </div>
    </main>
  )
}
