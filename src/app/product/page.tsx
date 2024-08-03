"use client";
import { useRef } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import GridItemProduct from "../components/gridItemProduct/gridItemProduct";
import { Button } from "@mui/material";
import Link from "next/link";

export const GridItem = ({
  title,
  desc1,
  desc2,
  icon,
}: {
  title: string;
  desc1: string;
  desc2: string;
  icon: string;
}) => {
  return (
    <div className={styles.gridItem}>
      <Image
        src={icon}
        alt="grid item"
        width={48}
        height={48}
        className={styles.gridItemImage}
      />
      <h5>{title}</h5>
      <div className={styles.gridItemInfo}>
        <div className={styles.gridItemInfoBox}>
          <Image
            src="/icons/check-icon.svg"
            alt="grid item"
            width={28}
            height={28}
            // className={styles.gridItem}
          />
          <p>{desc1}</p>
        </div>
        <div className={styles.gridItemInfoBox}>
          <Image
            src="/icons/check-icon.svg"
            alt="grid item"
            width={28}
            height={28}
            // className={styles.gridItem}
          />
          <p>{desc2}</p>
        </div>
      </div>
    </div>
  );
};

export default function ProductPage() {
  const communityRef = useRef<HTMLDivElement>(null);
  const marketPlaceRef = useRef<HTMLDivElement>(null);

  const scrollToCommunity = () => {
    if (communityRef.current) {
      communityRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToMarketPlace = () => {
    if (marketPlaceRef.current) {
      marketPlaceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className={styles.main}>
      <section id="section1" className={styles.hero}>
        <div className={styles.heroLeft}>
          <h2>SAVVYO Products. For Everyone.</h2>
          <p>
            Transform how people form a social community with savvyo. The
            possibilities of creating a community around any place, thing, or
            topic are endless.
          </p>
          <div className={styles.btns}>
            <div className={styles.heroFirst}>
              <div className={styles.heroIconDiv}>
                <div className={styles.heroIconMainDiv}>
                  <Image
                    src="/images/avatar-mid.svg"
                    alt="hero icon"
                    width={56}
                    height={56}
                    className={styles.heroIconMain}
                  />
                  <Image
                    src="/images/avatar-left.svg"
                    alt="hero icon"
                    width={48}
                    height={48}
                    className={styles.heroIconLeft}
                  />
                  <Image
                    src="/images/avatar-right.svg"
                    alt="hero icon"
                    width={48}
                    height={48}
                    className={styles.heroIconRight}
                  />
                </div>
              </div>
              <button onClick={scrollToCommunity} className={styles.btnsBtn1}>
                Why SAVVYO Community
              </button>
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
              <button onClick={scrollToMarketPlace} className={styles.btnsBtn2}>
                SAVVYO Products Marketplace
              </button>
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <Image
            src="/images/mac-pro.svg"
            alt="hero image"
            width={1024}
            height={598}
            className={styles.heroRightImg}
          />
        </div>
      </section>

      <section id="section2" ref={communityRef} className={styles.community}>
        <div className={styles.communityHeader}>
          <h4>SAVVYO Community</h4>
          <p>Building Connections. Sharing Experiences. Growing Together.</p>
        </div>
        <Image
          src="/images/community-img.svg"
          alt="community image"
          width={500}
          height={500}
          className={styles.communityImage}
        />
        <div className={styles.communityGrid}>
          <GridItemProduct
            title="Interest-Based Groups"
            description="Join or create groups centered around your interests, whether it's technology, cooking, fitness, or gardening. Connect with like-minded individuals and share your passion."
            icon="/icons/chat-icon.svg"
          />
          <GridItemProduct
            title="Community Forums"
            description="Engage in discussions, ask questions, and share insights in our community forums. Our platform is designed to facilitate open and honest conversations, much like Reddit, but with a focus on constructive and positive interactions."
            icon="/icons/lightning-icon.svg"
          />
          <GridItemProduct
            title="User-Generated Conten"
            description="Share your experiences, stories, and knowledge through posts, blogs, and videos. Our community values diverse perspectives and encourages members to contribute content that is informative and inspiring."
            icon="/icons/user-gen-icon.svg"
          />
          <GridItemProduct
            title="Live Discussions"
            description="Participate in live discussions and Q&A sessions with experts and community leaders. This feature allows for real-time interaction and immediate feedback, enhancing the overall community experience."
            icon="/icons/emoji-icon.svg"
          />
          <GridItemProduct
            title="Support and Collaboration"
            description="Find support and collaborate with others on projects, initiatives, and hobbies. Our community fosters a spirit of cooperation, where members help each other grow and achieve their goals."
            icon="/icons/cmd-icon.svg"
          />
          <GridItemProduct
            title="Events and Meetups"
            description="Organize and participate in events and meetups, both virtual and in-person. From workshops and webinars to social gatherings, SAVVYO provides opportunities to connect and learn from each other."
            icon="/icons/heart-chat.svg"
          />
        </div>
      </section>

      <section id="section3" className={styles.whyJoin}>
        <h4>Why Join the SAVVYO Community?</h4>
        <div className={styles.whyJoinDiv}>
          <div className={styles.whyJoinGrid}>
            <GridItemProduct
              title="Authentic Connections"
              description="We prioritize real, meaningful interactions over superficial engagements. Our community is built on trust and authenticity."
              icon="/icons/chat-icon.svg"
            />
            <GridItemProduct
              title="Diverse Interests"
              description="Whatever your interest, there's a place for you in the SAVVYO community. Discover new passions and connect with others who share them."
              icon="/icons/lightning-icon.svg"
            />
            <GridItemProduct
              title="Growth and Learning"
              description="Our platform is designed to be a space for learning and personal growth. Engage with experts, gain new insights, and develop your skills."
              icon="/icons/user-gen-icon.svg"
            />
            <GridItemProduct
              title="Positive Environment"
              description="We are committed to maintaining a positive and respectful community. Our guidelines ensure that all members feel safe and valued."
              icon="/icons/emoji-icon.svg"
            />
          </div>
          <div className={styles.whyJoinImgDiv}>
            <Image
              src="/images/mac-pro-mock.svg"
              alt="community image"
              width={768}
              height={448}
              className={styles.whyJoinImage}
            />
          </div>
        </div>
        <div className={styles.whyJoinBtns}>
          <div className={styles.whyJoinBtnSection}>
            <h4>
              Join SAVVYO Community and be a part of something bigger. Share
              your truth, connect with others, and grow together in a space that
              values authenticity and collaboration.
            </h4>
            <p>
              Together, we can make the world feel a little smaller and a lot
              more connected
            </p>
            <div className={styles.whyJoinBtnContainer}>
              <Link href="/about" className={styles.whyJoinBtnLink1}>
                About us
              </Link>
              <Link href="/careers" className={styles.whyJoinBtnLink2}>
                Join us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <hr /> */}

      <section
        id="section4"
        ref={marketPlaceRef}
        className={styles.marketPlace}
      >
        <div className={styles.marketPlaceHeader}>
          <div>
            <h4>Features Savvyo’s Product Marketplace</h4>
            <p>
              At Savvyo, we offer a wide range of products designed to meet your
              needs and enhance your lifestyle. Explore our diverse categories
              and discover why Savvyo is your go-to platform for quality and
              value.
            </p>
          </div>
        </div>
        <div className={styles.marketPlaceItems}>
          <div className={styles.marketPlaceItemsDiv}>
            <div className={styles.marketPlaceItemsDivGrid}>
              <GridItem
                title="Fresh Produce"
                desc1="Onions and Potatoes: Start with our beta launch staples – fresh, farm-direct onions and potatoes. Quality you can trust, sourced from local farmers."
                desc2="Seasonal Fruits and Vegetables: Enjoy the best of each season with our handpicked selection of fruits and vegetables."
                icon="/icons/chat-icon.svg"
              />
            </div>
            <Image
              src="/images/product-img1.svg"
              alt="community image"
              width={589}
              height={426}
              className={styles.marketPlaceItemsImage}
            />
          </div>
          <div className={styles.marketPlaceItemsDiv}>
            <Image
              src="/images/product-img2.svg"
              alt="community image"
              width={589}
              height={426}
              className={styles.marketPlaceItemsImage}
            />
            <div className={styles.marketPlaceItemsDivGrid}>
              <GridItem
                title="Grocery Essentials"
                desc1="Staples and Spices: From rice and lentils to aromatic spices, stock your pantry with essentials for everyday cooking."
                desc2="Snacks and Beverages: Find your favorite snacks, teas, and coffees for a perfect break or a quick refreshment."
                icon="/icons/lightning-icon.svg"
              />
            </div>
          </div>
          <div className={styles.marketPlaceItemsDiv}>
            <div className={styles.marketPlaceItemsDivGrid}>
              <GridItem
                title="Lifestyle Products"
                desc1="Home and Kitchen: Discover a range of products that make your home cozy and your kitchen efficient."
                desc2="Personal Care: High-quality personal care items, including skincare, haircare, and wellness products."
                icon="/icons/user-gen-icon.svg"
              />
            </div>
            <Image
              src="/images/product-img3.svg"
              alt="community image"
              width={589}
              height={426}
              className={styles.marketPlaceItemsImage}
            />
          </div>
          <div className={styles.marketPlaceItemsDiv}>
            <Image
              src="/images/product-img4.svg"
              alt="community image"
              width={589}
              height={426}
              className={styles.marketPlaceItemsImage}
            />
            <div
              className={styles.marketPlaceItemsDivGrid}
              // style={{ paddingRight: "96px" }}
            >
              <GridItem
                title="Electronics and Gadgets"
                desc1="Smart Devices: Keep up with the latest in technology with our selection of smart devices and gadgets."
                desc2="Accessories: Enhance your tech experience with top-notch accessories for all your devices."
                icon="/icons/lightning-icon.svg"
              />
            </div>
          </div>
          <div className={styles.marketPlaceItemsDiv}>
            <div className={styles.marketPlaceItemsDivGrid}>
              <GridItem
                title="Fashion and Accessories"
                desc1="Men’s and Women’s Wear: Stylish and affordable clothing for all occasions."
                desc2="Jewelry and Accessories: Add a touch of elegance to your outfits with our jewelry and accessories."
                icon="/icons/user-gen-icon.svg"
              />
            </div>
            <Image
              src="/images/product-img5.svg"
              alt="community image"
              width={589}
              height={426}
              className={styles.marketPlaceItemsImage}
            />
          </div>
        </div>
      </section>

      <section id="section5" className={styles.whyShop}>
        <div className={styles.whyShopHeader}>
          <h4>Why Shop with Savvyo ?</h4>
          <p>
            Join the Savvyo platform today and transform the way you shop.
            Discover quality, value, and a sense of belonging with every
            purchase.
          </p>
        </div>
        <div className={styles.whyShopItems}>
          <div className={styles.whyShopItemsGrid}>
            <GridItemProduct
              title="Quality Assurance"
              description="Every product on Savvyo is thoroughly vetted to ensure it meets our high standards."
              icon="/icons/chat-icon.svg"
            />
            <GridItemProduct
              title="Community Driven"
              description="Our platform is built on the feedback and preferences of our community, ensuring we offer what you truly want."
              icon="/icons/lightning-icon.svg"
            />
          </div>
          <div className={styles.whyShopItemsGridImages}>
            <Image
              src="/images/card.svg"
              alt="community image"
              width={480}
              height={384}
            />
            <Image
              src="/images/user-count-card.svg"
              alt="community image"
              width={200}
              height={200}
              className={styles.whyShopItemsGridImagesImage}
            />
          </div>
          <div className={styles.whyShopItemsGrid}>
            <GridItemProduct
              title="Competitive Pricing"
              description="Enjoy great deals and value for money with our team buying and live sale features."
              icon="/icons/user-gen-icon.svg"
            />
            <GridItemProduct
              title="Seamless Experience"
              description="Our user-friendly interface makes shopping easy and enjoyable."
              icon="/icons/emoji-icon.svg"
            />
          </div>
        </div>
      </section>

      <section id="section6" className={styles.products}>
        <h4>SAVVYO Products</h4>
        <div className={styles.productsItems}>
          <div className={styles.productsItemsLeft}>
            <div>
              <h6>FOR USERS</h6>
              <p>
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
              <Link href="/" className={styles.productsItemsLeftLink}>
                Learn More{" "}
                <Image
                  src="/icons/arrow-right-icon.svg"
                  alt="arrow right"
                  width={12}
                  height={12}
                />
              </Link>
            </div>
            <div>
              <h6>FOR ONLINE SELLERS</h6>
              <p>
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </p>
              <Link href="/" className={styles.productsItemsLeftLink}>
                Learn More{" "}
                <Image
                  src="/icons/arrow-right-icon.svg"
                  alt="arrow right"
                  width={12}
                  height={12}
                />
              </Link>
            </div>
            <div>
              <h6>Other Products</h6>
              <p>
                Measure what matters with easy-to-use reports. You can filter,
                export, and drilldown on the data in a couple clicks.
              </p>
              <Link href="/" className={styles.productsItemsLeftLink}>
                Learn More{" "}
                <Image
                  src="/icons/arrow-right-icon.svg"
                  alt="arrow right"
                  width={12}
                  height={12}
                />
              </Link>
            </div>
          </div>
          <div className={styles.productsItemsRight}>
            <Image
              src="/images/product-img6.svg"
              alt="community image"
              width={500}
              height={426}
              className={styles.productsItemsRightImage}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
