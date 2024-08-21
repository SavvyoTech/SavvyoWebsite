"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { workerData } from "worker_threads";
import { useMediaQuery } from "@mui/material";

const BlogItem = ({
  title,
  desc,
  tag,
  img,
}: {
  title: string;
  desc: string;
  tag: string;
  img: string;
}) => {
  return (
    <div className={styles.blogItem}>
      <Image
        src={img}
        alt="grid item"
        width={384}
        height={240}
        className={styles.blogItemImage}
      />
      <p className={styles.blogItemTag}>{tag}</p>

      <div className={styles.blogItemTitleDiv}>
        <h6>{title}</h6>
        <Image
          src="/icons/arrow-right-upword.svg"
          alt="arrow-right"
          width={16}
          height={16}
          className={styles.blogItemArrow}
        />
      </div>

      <p className={styles.blogItemDesc}>{desc}</p>
    </div>
  );
};

const WhatWeOfferItems = ({
  img,
  title,
  desc1,
  reverse,
}: {
  img: string;
  title: string;
  desc1: string;
  reverse: boolean;
}) => {
  return (
    <motion.div
      className={styles.marketPlaceItemsDiv}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {reverse ? (
        <>
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={styles.marketPlaceItemsImage}
          >
            <Image
              src={img}
              alt="community image"
              width={589}
              height={426}
              layout="intrinsic"
              // className={styles.marketPlaceItemsImage}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={styles.marketPlaceItemsDivGrid}
          >
            <div className={styles.gridItem}>
              <h5>{title}</h5>
              <div className={styles.gridItemInfo}>
                <div className={styles.gridItemInfoBox}>
                  <Image
                    src="/icons/check-icon.svg"
                    alt="grid item"
                    width={28}
                    height={28}
                  />
                  <p>{desc1}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={styles.marketPlaceItemsDivGrid}
          >
            <div className={styles.gridItem}>
              <h5>{title}</h5>
              <div className={styles.gridItemInfo}>
                <div className={styles.gridItemInfoBox}>
                  <Image
                    src="/icons/check-icon.svg"
                    alt="grid item"
                    width={28}
                    height={28}
                  />
                  <p>{desc1}</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={styles.marketPlaceItemsImage}
          >
            <Image
              src={img}
              alt="community image"
              width={589}
              height={426}
              layout="intrinsic"
              // className={styles.marketPlaceItemsImage}
            />
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default function HomePage() {
  const [currentWord, setCurrentWord] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width:460px)");

  const controls = useAnimation();

  const words = ["INNOVATION", "CHANGE", "REVOLUTION", "SAVVYO"];

  useEffect(() => {
    if (isSmallScreen) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [isSmallScreen, controls]);

  useEffect(() => {
    const sequence = async () => {
      for (let i = 0; i < words.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
        await controls.start({ opacity: 1, transition: { duration: 0.5 } });
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
        // Skip fade-out for the last word to keep it visible
        if (i < words.length - 1) {
          await controls.start({ opacity: 0, transition: { duration: 0.5 } });
          setCurrentWord((prev) => prev + 1);
        }
      }
    };

    sequence();
  }, [controls, words.length]);

  return (
    <main className={styles.main}>
      <motion.section
        id="section1"
        className={styles.hero}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className={styles.heroHeader}>
          <div className={styles.heroHeaderTitle}>
            {/* <h2>
              We are <span>INNOVATION</span>
            </h2> */}
            <h2>We are</h2>
            <motion.div
              animate={controls}
              initial={{ opacity: 0 }}
              className={styles.changingWords}
              // style={{ fontSize: "2rem", textAlign: "center" }}
            >
              {words[currentWord]}
            </motion.div>
            <Image
              src="/images/home/pen-scribble.svg"
              alt="pen-scribble"
              width={382}
              height={15}
              className={styles.heroHeaderTitleScribble}
            />
          </div>
          <p>
            Our mission is to create a connected world where everyone can share,
            shop, and support each other, embracing the spirit of &quot;
            <span>Vasudhaiva Kutumbakam</span>&quot; - the world is one family
          </p>
        </div>
        <div className={styles.btns}>
          <div className={styles.heroFirst}>
            <div className={styles.heroIconDiv}>
              <div className={styles.heroIconMainDiv}>
                <Image
                  src="/images/home/avatar-mid.svg"
                  alt="hero icon"
                  width={56}
                  height={56}
                  className={styles.heroIconMain}
                />
                <Image
                  src="/images/home/avatar-left.svg"
                  alt="hero icon"
                  width={48}
                  height={48}
                  className={styles.heroIconLeft}
                />
                <Image
                  src="/images/home/avatar-right.svg"
                  alt="hero icon"
                  width={48}
                  height={48}
                  className={styles.heroIconRight}
                />
              </div>
            </div>
            <button className={styles.btnsBtn1}>Why SAVVYO Community</button>
          </div>
          <div className={styles.heroFirst}>
            <div className={styles.heroIconDiv}>
              <div className={styles.heroIconMainDiv}>
                <Image
                  src="/images/avatar2-mid.svg"
                  alt="hero icon"
                  width={56}
                  height={56}
                  className={styles.heroIconMain}
                />
                <Image
                  src="/images/avatar2-left.svg"
                  alt="hero icon"
                  width={48}
                  height={48}
                  className={styles.heroIconLeft}
                />
                <Image
                  src="/images/avatar2-right.svg"
                  alt="hero icon"
                  width={48}
                  height={48}
                  className={styles.heroIconRight}
                />
              </div>
            </div>
            <button className={styles.btnsBtn2}>
              SAVVYO Products Marketplace
            </button>
          </div>
        </div>

        <div className={styles.heroFooter}>
          {isSmallScreen ? (
            <motion.div
              initial={{ opacity: 0, y: "30%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={styles.heroFooterDiv}
            >
              <Image
                src="/images/home/mob-iphone.svg"
                alt="hero footer"
                width={284}
                height={479}
                className={styles.heroFooterImg}
              />
              <hr />
            </motion.div>
          ) : (
            <div className={styles.heroFooterDiv}>
              {/* TODO: Make this a proper Div component */}
              <Image
                src="/images/home/modal-left.svg"
                alt="hero footer"
                width={314}
                height={264}
                className={styles.heroFooterImg}
              />
              <Image
                src="/images/home/iphone-main.svg"
                alt="hero footer"
                width={424}
                height={479}
                className={styles.heroFooterImg}
              />

              {/* TODO: Make this a proper Div component */}
              <Image
                src="/images/home/modal-right.svg"
                alt="hero footer"
                width={316}
                height={305}
                className={styles.heroFooterImg}
              />

              {/* All the below images are in z-index:1 (absolute positions) */}

              <Image
                src="/images/home/flash-sale.svg"
                alt="hero footer"
                width={377}
                height={175}
                className={styles.heroFooterImgAbove1}
              />
              <Image
                src="/images/home/message1.svg"
                alt="hero footer"
                width={329}
                height={124}
                className={styles.heroFooterImgAbove2}
              />
              <Image
                src="/images/home/message2.svg"
                alt="hero footer"
                width={343}
                height={54}
                className={styles.heroFooterImgAbove3}
              />
              <Image
                src="/images/home/modal-upper.svg"
                alt="hero footer"
                width={228}
                height={208}
                className={styles.heroFooterImgAbove4}
              />
            </div>
          )}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        id="section2"
        className={styles.whatWeOffer}
      >
        <div className={styles.marketPlaceHeader}>
          <div>
            <h4>
              Make Life Interesting with <span>savvyo</span>
            </h4>
            <p>
              At Savvyo, we offer a wide range of products designed to meet your
              needs and enhance your lifestyle. Explore our diverse categories
              and discover why Savvyo is your go-to platform for quality and
              value.
            </p>
          </div>
        </div>
        <div className={styles.marketPlaceItems}>
          <WhatWeOfferItems
            title="Built on Community"
            desc1="Savvyo is where people share and seek authentic opinions on all aspects of life. Unlike traditional social platforms, we focus on real experiences and insights. Connect, share, and learn in a community that values authenticity."
            img="/images/home/home-img1.svg"
            reverse={false}
          />

          <WhatWeOfferItems
            title="E-commerce for the Smartphone Era"
            desc1="Savvyo offers a wide range of products designed to meet your needs and enhance your lifestyle. Explore our diverse categories and discover why Savvyo is your go-to platform for quality and value."
            img="/images/home/home-img2.svg"
            reverse={isSmallScreen ? false : true}
          />

          <WhatWeOfferItems
            title=" Team Buying for Better Deals"
            desc1="Invite friends or form teams to get better prices. Savvyo enhances the social shopping experience, creating a sense of belonging. More users lead to better experiences, growing our community and services."
            img="/images/home/home-img3.svg"
            reverse={false}
          />

          <WhatWeOfferItems
            title="Live Sale: A Win-Win"
            desc1="Discover and buy products in real time. Users enjoy an interactive shopping experience, while sellers and new brands gain instant visibility and direct customer connections."
            img="/images/home/home-img4.svg"
            reverse={isSmallScreen ? false : true}
          />
        </div>
        {isSmallScreen && <hr />}
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        id="section3"
        className={styles.CTA}
      >
        <div className={styles.whyJoinBtns}>
          <div className={styles.whyJoinBtnSection}>
            <div>
              <h5>Reach Millions of Customers Nationwide</h5>
              <p>With SAVVYO&apos;s Zero Commission Model</p>
            </div>

            <div className={styles.whyJoinBtnContainer}>
              {isSmallScreen ? (
                <>
                  <Link href="/careers" className={styles.whyJoinBtnLink2}>
                    Become a Seller
                  </Link>
                  <Link href="/about" className={styles.whyJoinBtnLink1}>
                    Why Savvyo?
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/about" className={styles.whyJoinBtnLink1}>
                    Why Savvyo?
                  </Link>
                  <Link href="/careers" className={styles.whyJoinBtnLink2}>
                    Become a Seller
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        {isSmallScreen && <hr />}
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: "3rem" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        id="section4"
        className={styles.community}
      >
        <div className={styles.whyJoinBtns}>
          <div className={styles.whyJoinBtnSection}>
            <h2>Join or create communities</h2>
            <p>
              Centered around your interests, whether it&apos;s technology,
              cooking, fitness, or gardening. Connect with like-minded
              individuals and share your passion.
            </p>
            <div className={styles.whyJoinBtnContainer}>
              {isSmallScreen ? (
                <>
                  <Link href="/careers" className={styles.whyJoinBtnLink2}>
                    Join our community{" "}
                    <Image
                      src="/images/home/plus-icon.svg"
                      alt="plus icon"
                      width={18}
                      height={18}
                    />
                  </Link>
                  <Link href="/about" className={styles.whyJoinBtnLink1}>
                    Create a community
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/about" className={styles.whyJoinBtnLink1}>
                    Create a community
                  </Link>
                  <Link href="/careers" className={styles.whyJoinBtnLink2}>
                    Join our community{" "}
                    <Image
                      src="/images/home/plus-icon.svg"
                      alt="plus icon"
                      width={18}
                      height={18}
                    />
                  </Link>
                </>
              )}
            </div>
          </div>

          <Image
            src="/images/home/comm-img1.svg"
            alt="community image"
            width={410}
            height={124}
            className={styles.communityImage1}
          />
          <Image
            src="/images/home/comm-img2.svg"
            alt="community image"
            width={225}
            height={116}
            className={styles.communityImage2}
          />
          <Image
            src="/images/home/message2.svg"
            alt="community image"
            width={311}
            height={54}
            className={styles.communityMessage2}
          />
          <Image
            src="/images/home/comm-img3.svg"
            alt="community image"
            width={343}
            height={54}
            className={styles.communityImage3}
          />
          <Image
            src="/images/home/comm-img4.svg"
            alt="community image"
            width={410}
            height={124}
            className={styles.communityImage4}
          />
          <Image
            src="/images/home/comm-img5.svg"
            alt="community image"
            width={410}
            height={124}
            className={styles.communityImage5}
          />
          <Image
            src="/images/home/comm-img6.svg"
            alt="community image"
            width={410}
            height={54}
            className={styles.communityImage6}
          />
        </div>
        {isSmallScreen && <hr />}
      </motion.section>

      <section id="section5" className={styles.blogs}>
        <div className={styles.blogsHeader}>
          <div className={styles.blogsHeaderDiv}>
            <p className={styles.blogsAnnouncement}>Our blog</p>
            <h4>Latest blog posts</h4>
            <p className={styles.blogsDesc}>
              Tool and strategies modern teams need to help their companies
              grow.
            </p>
          </div>

          <Link href="/blogs" className={styles.toBlogsBtn}>
            View all posts
          </Link>
        </div>
        <div className={styles.blogsGrid}>
          <BlogItem
            title="UX review presentations"
            img="/images/home/blogs-img1.svg"
            desc="How do you create compelling presentations that wow your colleagues and impress your managers?"
            tag="Design"
          />
          <BlogItem
            title="Migrating to Linear 101"
            img="/images/home/blogs-img2.svg"
            desc="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
            tag="Product"
          />
          <BlogItem
            title="Building your API stack"
            img="/images/home/blogs-img3.svg"
            desc="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
            tag="Software Engineering"
          />
        </div>
        <Link href="/blogs" className={styles.toBlogsBtnMob}>
          View all posts
        </Link>
      </section>

      <section id="section6" className={styles.goToApps}>
        <div className={styles.goToAppsDiv}>
          <motion.div
            className={styles.goToAppsLeft}
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h3>Join over 4,000+ Communities growing with Savvyo</h3>
            <p className={styles.goToAppsDesc}>Download our app today.</p>
            <div className={styles.goToAppsBtns}>
              <Link href="/" className={styles.goToAppStore}>
                <Image
                  src="/icons/apple-icon.svg"
                  alt="app store"
                  width={24}
                  height={24}
                />
                <div>
                  <p className={styles.download}>Download on the</p>
                  <p className={styles.goToAppStoreTitle}>App Store</p>
                </div>
              </Link>
              <Link href="/" className={styles.goToAppStore}>
                <Image
                  src="/icons/playstore-icon.svg"
                  alt="app store"
                  width={24}
                  height={24}
                />
                <div>
                  <p className={styles.download}>GET IT ON</p>
                  <p className={styles.goToAppStoreTitle}>Google Play</p>
                </div>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className={styles.goToAppsRight}
            initial={{ opacity: 0, y: "30%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Image
              src={
                isSmallScreen
                  ? "/images/home/iphone-mob.svg"
                  : "/images/home/iphone.svg"
              }
              alt="go to apps"
              width={isSmallScreen ? 284 : 400}
              height={500}
              layout="intrinsic"
              className={styles.goToAppsRightImg}
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
