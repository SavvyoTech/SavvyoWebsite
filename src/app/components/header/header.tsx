import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { AppBar, Box, Button, Toolbar } from '@mui/material';

import styles from './header.module.scss';

const Header: React.FC = () => {
    const pathname = usePathname();
    
    return (
        <AppBar component={'header'}>
            <Toolbar className={styles.appBar}>
                <Box>
                    <Link href="/">
                        <Image src="/logo_48.svg" alt="Savvyo Logo" width={80} height={80} className={styles.logo} />
                    </Link>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
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
    );
};

export default Header;
