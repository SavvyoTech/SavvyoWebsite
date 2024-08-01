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
                    <Image src={"./logo_dark.svg"} alt={"logo"} width={100} height={100} className={styles.logo} />
                    <Box className={styles.socials}>
                        <Typography variant={"body2"}>Social links</Typography>
                    </Box>
                </Box>
                <Box className={styles.linkSection}>
                    <Grid2 className={styles.footerLinkGrid}>
                        <Typography variant={"h6"}>Company</Typography>
                        <Link href={"/"}><Button>About</Button></Link>
                        <Link href={"/"}><Button>Features</Button></Link>
                        <Link href={"/"}><Button>Works</Button></Link>
                        <Link href={"/"}><Button>Careers</Button></Link>
                    </Grid2>
                    <Grid2 className={styles.footerLinkGrid}>
                        <Typography variant={"h6"}>Help</Typography>
                        <Link href={"/"}><Button>Contact us</Button></Link>
                        <Link href={"/"}><Button>Delivery Details</Button></Link>
                        <Link href={"/"}><Button>Terms & Conditions</Button></Link>
                        <Link href={"/"}><Button>Privacy Policy</Button></Link>
                    </Grid2>
                    <Grid2 className={styles.footerLinkGrid}>
                        <Typography variant={"h6"}>Resources</Typography>
                        <Link href={"/"}><Button>How to - Blog</Button></Link>
                        <Link href={"/"}><Button>For sellers</Button></Link>
                        <Link href={"/"}><Button>Partner with us</Button></Link>
                        <Link href={"/"}><Button>Apps for you</Button></Link>
                    </Grid2>
                </Box>
            </Box>
            <hr />
            <Box className={styles.footerLower}>
                <Typography variant={"body2"}>© 2024 Savyo | <Link href={"mailto:info@savyo.in"}>info@savyo.in</Link></Typography>
            </Box>
       </Grid2>
    );
};

export default Footer;
