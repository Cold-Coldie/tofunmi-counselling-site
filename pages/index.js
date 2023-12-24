import Head from "next/head";
import styles from "../styles/Home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const testimonials = [
    {
      name: "Titilayo Abimbola",
      title: "",
      story: `Speaking with you made me feel better, now I have the courage to face the world. I like how you broke down my fears into what I can handle. \n Thank you`,
    },
    {
      name: "Susan Idowu",
      title: "Concerned Mother",
      story: `Indeed, it is an explicit book on sex education which
    enumerates more on how to guide children of all ages on their
    fantasy that surrounds being sexually developed physically and
    emotionally. It is a fascinating book that helps parents of
    children of all ages to really understand their children's
    body changes and gives them the insightful knowledge on how to
    manage their enthusiastic sex desires in a Godly manner. This
    book is an exceptional and a must-read for parents of children
    of both sex and all ages.`,
    },
    {
      name: "Tade Ayodele",
      title: `President, Emerging Change Africa
      \nConvener Marital Bliss`,
      story: `What Tofunmi wrote is a manual for parents to guide their children on sex education. Parents to children of all ages need not be unsure of how to communicate this idea anymore. I recommend this book to all parents and guardians.`,
    },
    {
      name: "Morolayo Anne Owoputi",
      title: "Convener, Marriage Clinic",
      story: `This is such an educative and insightful book on sex. I have never seen sex education and behavior this simplified. It's so easy to comprehend for parents with children of all ages. This book will handhold you and show you how best to introduce the topic of sex...with your children.`,
    },
  ];

  var carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <>
      <Head>
        <title>Counsellor Tofunmi | Home</title>
        <meta name="description" content="Tofunmi's counselling home page." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.pageContainer}>
        <div className={styles.pageHeading}>
          Hi there, I want to help you make right decisions, become well
          balanced and aware of yourself.
          <div>
            <div className={styles.starWrapper}>
              <div className={styles.starFive}></div>
            </div>

            <div className={styles.triangleWrapper}>
              <div className={styles.triangleRight}></div>
            </div>

            <div className={styles.circleWrapper1}>
              <div className={styles.circle}></div>
            </div>

            <div className={styles.circleWrapper2}>
              <div className={styles.circle}></div>
            </div>

            <div className={styles.squareWrapper1}>
              <div className={styles.square}></div>
            </div>

            <div className={styles.squareWrapper2}>
              <div className={styles.square}></div>
            </div>
          </div>
        </div>

        <div className={styles.name}>Tofunmi</div>

        <div className={styles.testimonialWrapper}>
          <div className={styles.testimonialHeading}>Reviews</div>

          <Slider {...carouselSettings}>
            {testimonials?.map((item, index) => (
              <div className={styles.singleTestimonialWrapper} key={index}>
                <div className={styles.singleTestimonial1}>
                  <div className={styles.singleTestimonial2}>
                    <div className={styles.testimonialName}>{item.name}</div>
                    <div className={styles.testimonialTitle}>{item.title}</div>
                    <div className={styles.testimonialStar}>
                      ⭐️⭐️⭐️⭐️⭐️
                    </div>
                    <div className={styles.testimonialStory}>{item.story}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className={styles.wonder}>
          <div className={styles.wonderText}>
            Wonder what book is being talked about in some of the reviews?
          </div>

          <Link href="/resources">
            <button className={styles.wonderButton}>
              Check it out{" "}
              <Image
                src={"/static/icons/chevron-right.svg"}
                width={20}
                height={20}
                alt="Chevron Right"
              />
            </button>
          </Link>
        </div>

        <div style={{ marginTop: "4rem" }}></div>
      </div>
    </>
  );
}
