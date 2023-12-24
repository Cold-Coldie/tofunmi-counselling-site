import React, { useState } from "react";
import styles from "../styles/Services.module.css";
import Image from "next/image";
import SupportCallForm from "@/components/forms/SupportCallForm";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import Head from "next/head";

const services = () => {
  const router = useRouter();

  const [showSupportCall, setShowSupportCall] = useState(false);

  const copyEmail = () => {
    var textField = document.createElement("textarea");
    textField.innerText = "oluwatofunmiogedengbe@gmail.com";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    toast("Email copied!", { icon: "✅" });
  };

  return (
    <>
      <Head>
        <title>Counsellor Tofunmi | Services</title>
        <meta
          name="description"
          content="Tofunmi's counselling services page."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Toaster />

        <div className={styles.bookSessionWrapper}>
          <div className={styles.bookSessionFirstColumn}>
            <Image
              src={"/static/images/bookSession.jpg"}
              width={400}
              height={400}
              alt="Book a session icon"
              priority
            />
          </div>

          <div className={styles.bookSessionSecondColumn}>
            <div className={styles.bookSessionHeading}>BOOK A SESSION</div>

            <div className={styles.bookSessionBody}>
              Will you like to speak with a therapist that will understand you,
              provide the necessary counselling, insight that you need and keep
              every discussion confidential. As a professional and experienced
              counsellor, I am here to help.
            </div>

            <div className={styles.bookSessionButtonWrapper}>
              <a href="https://www.oddience.co/Oluwatofunmi" target="_blank">
                <button className={styles.bookSessionButton}>BOOK NOW</button>
              </a>
            </div>
          </div>
        </div>

        <div
          className={styles.bookSessionWrapper}
          style={{
            marginTop: "2rem",
            background: "white",
            border: "0.5rem solid rgb(204, 65, 72)",
          }}
        >
          <div className={styles.bookSessionFirstColumn}>
            <Image
              src={"/static/images/speaker.jpg"}
              width={400}
              height={400}
              alt="Book a session icon"
              priority
            />
          </div>

          <div className={styles.bookSessionSecondColumn}>
            <div className={styles.bookSessionHeading}>SPEAKING ENGAGEMENT</div>

            <div className={styles.bookSessionBody}>
              Do you want me to speak at your events and gatherings? I speak on
              psychosocial issues like self esteem, emotional intelligence, sex
              education and other interesting topics. Work with me for your
              events organized for adults, youths, teenagers and children.
            </div>

            <div className={styles.bookSessionButtonWrapper}>
              <a href="https://wa.link/x9f92l" target="_blank">
                <button className={styles.bookSessionButton}>
                  GET IN TOUCH
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.supportCallWrapper}>
          <div className={styles.supportCallFirstColumn}>
            <div className={styles.supportCallHeading}>SUPPORT CALL</div>

            <div className={styles.supportCallBody}>
              A 45mins call with me will help you overcome your worries and
              fears as you gain deep insight on how to walk through them and
              have your desired outcome. Kindly fill this form
            </div>

            <div className={styles.supportCallButtonWrapper}>
              <button
                className={styles.supportCallButton}
                onClick={() => {
                  setShowSupportCall((s) => !s);
                }}
              >
                PROCEED
              </button>
            </div>
          </div>
          <div className={styles.supportCallSecondColumn}>
            <Image
              src={"/static/images/supportCall.jpg"}
              width={400}
              height={400}
              alt="Support Call icon"
              priority
            />
          </div>
        </div>

        <div
          className={styles.supportCallWrapper}
          style={{
            background: "white",
            border: "0.5rem solid rgb(217, 132, 52)",
          }}
        >
          <div className={styles.supportCallFirstColumn}>
            <div className={styles.supportCallHeading}>HELP A SOUL</div>

            <div className={styles.supportCallBody}>
              Partner with me to reach out to the less privileged.
            </div>

            <div className={styles.supportCallButtonWrapper}>
              <a href="https://wa.link/x9f92l" target="_blank">
                <button className={styles.supportCallButton}>LET'S TALK</button>{" "}
              </a>
            </div>
          </div>
          <div className={styles.supportCallSecondColumn}>
            <Image
              src={"/static/images/help-a-soul.avif"}
              width={400}
              height={400}
              alt="Support Call icon"
              priority
            />
          </div>
        </div>

        <div className={styles.socialsWrapper}>
          <div>
            <div className={styles.socialsText}>
              There is so much we can do together. Follow me on...
            </div>

            <div className={styles.socials}>
              <Link
                href={"https://web.facebook.com/profile.php?id=100068982004061"}
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

        {showSupportCall ? (
          <SupportCallForm
            showSupportCall={showSupportCall}
            setShowSupportCall={setShowSupportCall}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default services;
