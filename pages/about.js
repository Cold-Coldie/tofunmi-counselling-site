import React, { useEffect, useState } from "react";
import styles from "../styles/About.module.css";
import styless from "../styles/Services.module.css";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";

const About = () => {
  const [screenWidth, setScreenWidth] = useState(null);

  const copyEmail = () => {
    var textField = document.createElement("textarea");
    textField.innerText = "oluwatofunmiogedengbe@gmail.com";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    toast("Email copied!", { icon: "✅" });
  };

  useEffect(() => {
    screenWidth === null && setScreenWidth(window.innerWidth);

    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Counsellor Tofunmi | About</title>
        <meta name="description" content="Tofunmi's counselling about page." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Toaster />
      {screenWidth > 768 ? (
        <div className={styles.pageContainer}>
          <div className={styles.textWrapper}>
            <div className={styles.textHeading}>ABOUT TOFUNMI</div>

            <div className={styles.textbody1}>
              <span className={styles.textName}>Tofunmi</span>
              <span className={styles.textName}>Ogedengbe</span>
              <div>
                is a professional counsellor, life coach and public speaker
                passionate about helping you connect with your innerself,
                guiding you through uncertainties to become a well balanced and
                resilient individual.
              </div>
            </div>

            <div className={styles.textbody2}>
              I studied Guidance and Counselling from the University of Ibadan
              and hold a certificate in Positive Paychology from the University
              of North Carolina, United States. I am a member of Counsellors
              Association of Nigeria (CASSON Lagos). I want to help you make
              right decisions and become aware of yourself.
            </div>

            <div className={styles.textbody3}>{`Let's get started!`}</div>
          </div>

          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <Image
                src={"/static/images/oluwatofunmi-yellow.jpg"}
                width={350}
                height={500}
                alt="Tofunmi's picture"
                priority
              />
            </div>
          </div>

          <div
            className={styless.socialsWrapper}
            style={{ margin: "5rem 2rem" }}
          >
            <div>
              <div className={styless.socialsText}>
                There is so much we can do together. Follow me on...
              </div>

              <div className={styless.socials}>
                <Link
                  href={
                    "https://web.facebook.com/profile.php?id=100068982004061"
                  }
                  target="_blank"
                >
                  <Image
                    src={"/static/icons/facebook.svg"}
                    width={50}
                    height={50}
                    alt="Facebook icon"
                  />
                </Link>

                <Link
                  href={
                    "https://instagram.com/tofunmiogedengbe?igshid=OGQ5ZDc2ODk2ZA=="
                  }
                  target="_blank"
                >
                  <Image
                    src={"/static/icons/instagram.svg"}
                    width={47}
                    height={47}
                    alt="Instagram icon"
                  />
                </Link>

                <Link
                  href={
                    "https://x.com/oluwatofunmiog1?s=11&t=R5nxUjCAzbomhfDX7aiDOQ"
                  }
                  target="_blank"
                >
                  <Image
                    src={"/static/icons/twitterX.svg"}
                    width={55}
                    height={55}
                    alt="Twitter X icon"
                  />
                </Link>

                <Image
                  src={"/static/icons/gmail.svg"}
                  width={60}
                  height={60}
                  alt="Gmail icon"
                  onClick={copyEmail}
                />

                <Link href={"tel:+2348171865641"}>
                  <Image
                    src={"/static/icons/phoneCall.svg"}
                    width={40}
                    height={40}
                    alt="Phone Call icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.pageContainer}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <Image
                src={"/static/images/oluwatofunmi-yellow.jpg"}
                width={250}
                height={380}
                alt="Tofunmi's picture"
                priority
              />
            </div>
          </div>

          <div className={styles.textWrapper}>
            <div className={styles.textHeading}>ABOUT TOFUNMI</div>

            <div className={styles.textbody1}>
              <span className={styles.textName}>Tofunmi</span>
              <span className={styles.textName}>Ogedengbe</span>
              <div>
                is a professional counsellor and public speaker passionate about
                helping you connect with your innerself, guiding you through
                uncertainties to become a well balanced and resilient
                individual.
              </div>
            </div>

            <div className={styles.textbody2}>
              I studied Guidance and Counselling from the University of Ibadan
              and hold a certificate in Positive Paychology from the University
              of North Carolina, United States. I am a member of Counsellors
              Association of Nigeria (CASSON Lagos). I want to help you make
              right decisions and become aware of yourself.
            </div>

            <div className={styles.textbody3}>{`Let's get started!`}</div>
          </div>

          <div
            className={styless.socialsWrapper}
            style={{ margin: "5rem 2rem" }}
          >
            <div>
              <div className={styless.socialsText}>
                There is so much we can do together. Follow me on...
              </div>

              <div className={styless.socials}>
                <Link
                  href={
                    "https://web.facebook.com/profile.php?id=100068982004061"
                  }
                  target="_blank"
                >
                  <Image
                    src={"/static/icons/facebook.svg"}
                    width={50}
                    height={50}
                    alt="Facebook icon"
                  />
                </Link>

                <Link
                  href={
                    "https://instagram.com/tofunmiogedengbe?igshid=OGQ5ZDc2ODk2ZA=="
                  }
                  target="_blank"
                >
                  <Image
                    src={"/static/icons/instagram.svg"}
                    width={47}
                    height={47}
                    alt="Instagram icon"
                  />
                </Link>

                <Link
                  href={
                    "https://x.com/oluwatofunmiog1?s=11&t=R5nxUjCAzbomhfDX7aiDOQ"
                  }
                  target="_blank"
                >
                  <Image
                    src={"/static/icons/twitterX.svg"}
                    width={55}
                    height={55}
                    alt="Twitter X icon"
                  />
                </Link>

                <Image
                  src={"/static/icons/gmail.svg"}
                  width={60}
                  height={60}
                  alt="Gmail icon"
                  onClick={copyEmail}
                />

                <Link href={"tel:+2348171865641"}>
                  <Image
                    src={"/static/icons/phoneCall.svg"}
                    width={40}
                    height={40}
                    alt="Phone Call icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
