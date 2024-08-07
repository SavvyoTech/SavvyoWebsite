import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

const GridItem = ({
  title,
  desc1,
}: // desc2,
// icon,
{
  title: string;
  desc1: string;
  // icon: string;
}) => {
  return (
    <div className={styles.gridItem}>
      {/* <Image
        src={icon}
        alt="grid item"
        width={48}
        height={48}
        className={styles.gridItemImage}
      /> */}
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
        {/* <div className={styles.gridItemInfoBox}>
          <Image
            src="/icons/check-icon.svg"
            alt="grid item"
            width={28}
            height={28}
            // className={styles.gridItem}
          />
          <p>{desc2}</p>
        </div> */}
      </div>
    </div>
  );
};

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

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section id="section1" className={styles.hero}>
        <div className={styles.heroHeader}>
          <div className={styles.heroHeaderTitle}>
            <h2>
              We are <span>INNOVATION</span>
            </h2>
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
        </div>
      </section>

      <section id="section2" className={styles.whatWeOffer}>
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
          <div className={styles.marketPlaceItemsDiv}>
            <div className={styles.marketPlaceItemsDivGrid}>
              <GridItem
                title="Built on Community"
                desc1="Savvyo is where people share and seek authentic opinions on all aspects of life. Unlike traditional social platforms, we focus on real experiences and insights. Connect, share, and learn in a community that values authenticity."
                // desc2="Seasonal Fruits and Vegetables: Enjoy the best of each season with our handpicked selection of fruits and vegetables."
                // icon="/icons/chat-icon.svg"
              />
            </div>
            <Image
              src="/images/home/home-img1.svg"
              alt="community image"
              width={558}
              height={426}
              className={styles.marketPlaceItemsImage}
            />
          </div>
          <div className={styles.marketPlaceItemsDiv}>
            <Image
              src="/images/home/home-img2.svg"
              alt="community image"
              width={589}
              height={426}
              className={styles.marketPlaceItemsImage}
            />
            <div className={styles.marketPlaceItemsDivGrid}>
              <GridItem
                title="E-commerce for the Smartphone Era"
                desc1="Savvyo combines a fun, engaging shopping experience with great prices. Adapted to users' habits and needs, our platform is versatile, offering both value for money and a vibrant community space."
                // desc2="Snacks and Beverages: Find your favorite snacks, teas, and coffees for a perfect break or a quick refreshment."
                // icon="/icons/lightning-icon.svg"
              />
            </div>
          </div>
          <div className={styles.marketPlaceItemsDiv}>
            <div className={styles.marketPlaceItemsDivGrid}>
              <GridItem
                title=" Team Buying for Better Deals"
                desc1="Invite friends or form teams to get better prices. Savvyo enhances the social shopping experience, creating a sense of belonging. More users lead to better experiences, growing our community and services."
                // desc2="Personal Care: High-quality personal care items, including skincare, haircare, and wellness products."
                // icon="/icons/user-gen-icon.svg"
              />
            </div>
            <Image
              src="/images/home/home-img3.svg"
              alt="community image"
              width={589}
              height={426}
              className={styles.marketPlaceItemsImage}
            />
          </div>
          <div className={styles.marketPlaceItemsDiv}>
            <Image
              src="/images/home/home-img4.svg"
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
                title="Live Sale: A Win-Win"
                desc1="Discover and buy products in real time. Users enjoy an interactive shopping experience, while sellers and new brands gain instant visibility and direct customer connections."
                // desc2="Accessories: Enhance your tech experience with top-notch accessories for all your devices."
                // icon="/icons/lightning-icon.svg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="section3" className={styles.CTA}>
        <div className={styles.whyJoinBtns}>
          <div className={styles.whyJoinBtnSection}>
            <div>
              <h5>Reach Millions of Customers Nationwide</h5>
              <p>With SAVVYO&apos;s Zero Commission Model</p>
            </div>
            <div className={styles.whyJoinBtnContainer}>
              <Link href="/about" className={styles.whyJoinBtnLink1}>
                Why Savvyo?
              </Link>
              <Link href="/careers" className={styles.whyJoinBtnLink2}>
                Become a Seller
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="section4" className={styles.community}>
        <div className={styles.whyJoinBtns}>
          <div className={styles.whyJoinBtnSection}>
            <h2>Join or create communities</h2>
            <p>
              Centered around your interests, whether it&apos;s technology,
              cooking, fitness, or gardening. Connect with like-minded
              individuals and share your passion.
            </p>
            <div className={styles.whyJoinBtnContainer}>
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
      </section>

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
      </section>

      <section id="section6" className={styles.goToApps}>
        <div className={styles.goToAppsDiv}>
          <div className={styles.goToAppsLeft}>
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
          </div>
          <Image
            src="/images/home/iphone.svg"
            alt="go to apps"
            width={400}
            height={500}
            className={styles.goToAppsImg}
          />
        </div>
      </section>
    </main>
  );
}
