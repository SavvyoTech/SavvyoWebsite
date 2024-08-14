import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import styles from './footer.module.scss';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
       <Grid2 component={"footer"} className={styles.footer}>
            <Box className={styles.footerUpper}>
                <Box className={styles.logoSection}>
                    <Link href={"/"}><Image src={"./logo_dark.svg"} alt={"logo"} width={157.26} height={64} className={styles.logo} /></Link>
                    <Box className={styles.socials}>
                        <Typography variant={"body2"}>Social links</Typography>
                        <Box className={styles.socialIcons}>
                            <Link href={""}>
                                <Image src={"icons/facebook.svg"} alt={"facebook"} width={24} height={24} />
                            </Link>
                            <Link href={""}>
                                <Image src={"icons/instagram.svg"} alt={"instagram"} width={24} height={24} />
                            </Link>
                            <Link href={""}>
                                <Image src={"icons/linkedin.svg"} alt={"linkedin"} width={24} height={24} />
                            </Link>
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.linkSection}>
                    <Grid2 className={styles.footerLinkGrid}>
                        <Typography variant={"body1"}>Company</Typography>
                        <Link href={"/"}><Button>About</Button></Link>
                        <Link href={"/"}><Button>Features</Button></Link>
                        <Link href={"/"}><Button>Works</Button></Link>
                        <Link href={"/careers"}><Button>Careers</Button></Link>
                    </Grid2>
                    <Grid2 className={styles.footerLinkGrid}>
                        <Typography variant={"body1"}>Help</Typography>
                        <Link href={"/"}><Button>Contact us</Button></Link>
                        <Link href={"/"}><Button>Delivery Details</Button></Link>
                        <Link href={"/"}><Button>Terms & Conditions</Button></Link>
                        <Link href={"/"}><Button>Privacy Policy</Button></Link>
                    </Grid2>
                    <Grid2 className={styles.footerLinkGrid}>
                        <Typography variant={"body1"}>Resources</Typography>
                        <Link href={"/"}><Button>How to - Blog</Button></Link>
                        <Link href={"/"}><Button>For sellers</Button></Link>
                        <Link href={"/"}><Button>Partner with us</Button></Link>
                        <Link href={"/"}><Button>Apps for you</Button></Link>
                    </Grid2>
                </Box>
            </Box>
            <hr />
            <Box className={styles.footerLower}>
                <Typography variant={"body2"}>© 2024 Savvyo | <Link href={"mailto:info@savvyo.in"}>info@savvyo.in</Link></Typography>
            </Box>
       </Grid2>
    );
};

export default Footer;
