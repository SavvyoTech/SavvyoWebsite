import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { Slide, AppBar, Box, Button, Toolbar, useScrollTrigger } from '@mui/material';

import styles from './header.module.scss';

const Header: React.FC = () => {
    const trigger = useScrollTrigger();
    
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar component={'header'} elevation={0} className={styles.appBar}>
                <Toolbar className={styles.toolBar}>
                    <Box>
                        <Link href="/">
                            <Image src="/logo_48.svg" alt="Savvyo Logo" width={80} height={80} className={styles.logo} />
                        </Link>
                    </Box>
                    <Box className={styles.pageBtns}>
                        <Link href="/"><Button>Home</Button></Link>
                        <Link href="/product"><Button>Our Product</Button></Link>
                        <Link href="/seller"><Button>Become a Seller</Button></Link>
                        <Link href="/about"><Button>About Us</Button></Link>
                        <Link href="/blogs"><Button>Blogs</Button></Link>
                        <Link href="/careers"><Button>Join Us</Button></Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Slide>
    );
};

export default Header;
