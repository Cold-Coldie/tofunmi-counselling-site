import React, { useState } from "react";
import styles from "../styles/Resources.module.css";
import Image from "next/image";
import ParentGroupForm from "../components/forms/ParentGroupForm";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const Resources = () => {
  const [showParentGroupForm, setShowParentGroupForm] = useState(false);

  return (
    <>
      <Head>
        <title>Counsellor Tofunmi | Resources</title>
        <meta
          name="description"
          content="Tofunmi's counselling resources page."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.pageContainer}>
        <Toaster />

        <div className={styles.pageHeading}>Resource Library</div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={styles.bookSectionWrapper}>
            <div className={styles.bookImageWrapper}>
              <div className={styles.bookHeading}>
                Age To Age Guide To Sex Education <br /> (For Parents &
                Guardians)
              </div>

              <Image
                src={"/static/images/bookCover.jpg"}
                width={"400"}
                height={"300"}
                alt="Age To Age Guide To Sex Education (Book Image)"
                style={{ marginBottom: "2rem" }}
              />
            </div>

            <div className={styles.bookDetails}>
              <div>
                <div>Name of Material</div>
                <div>
                  Age To Age Guide To Sex Education (For Parents & Guardians)
                </div>
              </div>

              <div>
                <div>Type</div>
                <div>Self Help</div>
              </div>

              <div>
                <div>Date Published</div>
                <div>May 2021</div>
              </div>

              <div>
                <div>Author</div>
                <div>Tofunmi Ogedengbe</div>
              </div>

              <div>
                <div>Description</div>
                <div style={{ display: "grid" }}>
                  We are in a world pressurized with sexual perversion.
                  Ignorance on your part or your {`child's`} part is not an
                  excuse. Before your children get the wrong information from
                  out there, give them the right information.
                  <div></div>I have written a book on Sex Education that deals
                  explicitly on how to go about educating your children and
                  students. Sex Education is a conversation many parents have
                  failed to have with their children. Even parents who desire to
                  teach it {`don't`} know how to. This book will guide you on
                  the best approach to teach Sex Education. It is unique in that
                  it has been categorized into age groups. You will be guided on
                  what to say depending on the age of your child. It also
                  addresses signs to look out for and what to do in cases of
                  sexual grooming and abuse.
                </div>
              </div>

              <div>
                <div>Link 1</div>
                <div style={{ display: "grid" }}>
                  Get a soft copy on Amazon
                  <div>
                    <a
                      href="https://www.amazon.com/dp/9789926456"
                      target="_blank"
                    >
                      <button>Get Now</button>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div>Link 2</div>
                <div style={{ display: "grid" }}>
                  Get a hard copy delivered to you
                  <div>
                    <a
                      href="https://rhbooks.com.ng/product/age-to-age-guide-to-sex-education-for-parents-and-guardians/"
                      target="_blank"
                    >
                      <button>Get Now</button>{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div>Link 3</div>
                <div style={{ display: "grid" }}>
                  Chat for a direct hard or soft copy.
                  <div>
                    <a href="https://wa.link/x9f92l" target="_blank">
                      <button> Chat Now </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.whatsappSectionWrapper}>
            <div className={styles.bookImageWrapper}>
              <div className={styles.bookHeading}>
                Your {`Child's`} Psyche and You <br /> (WhatsApp Group)
              </div>

              <Image
                src={"/static/images/whatsappGroupCover.jpg"}
                width={"400"}
                height={"300"}
                alt=" Your Child's Psyche and You (Group Image)"
                style={{ marginBottom: "2rem" }}
              />
            </div>

            <div className={styles.bookDetails}>
              <div>
                <div>Name of Group</div>
                <div>Your {`Child's`} Psyche and You</div>
              </div>

              <div>
                <div>Type</div>
                <div>WhatsApp Group</div>
              </div>

              <div>
                <div>Date Started</div>
                <div>May 2020</div>
              </div>

              <div>
                <div>Coordinator</div>
                <div>Tofunmi Ogedengbe</div>
              </div>

              <div>
                <div>Description</div>
                <div style={{ display: "grid" }}>
                  This is a WhatsApp group where parents discuss, learn, share
                  opinions and ask questions bothering intentional parenting.
                </div>
              </div>

              <div>
                <div>Link</div>
                <div style={{ display: "grid" }}>
                  Fill this form to join the group.
                  <div>
                    <button
                      onClick={() => {
                        setShowParentGroupForm((s) => !s);
                      }}
                    >
                      Fill Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showParentGroupForm ? (
          <ParentGroupForm
            showSupportCall={showParentGroupForm}
            setShowSupportCall={setShowParentGroupForm}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Resources;
