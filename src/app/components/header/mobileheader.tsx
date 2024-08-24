import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useState } from 'react';
import {
    Box,
    List,
    ListItem,
    ListItemText,
    AppBar,
    Link,
    Slide,
    Toolbar,
    useScrollTrigger,
    Drawer,
    IconButton
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import styles from './header.module.scss';

type MobileDrawerProps = {
    handleDrawerToggle: () => void;
};

const MobileDrawer = (
    {
        handleDrawerToggle
    }: MobileDrawerProps
) => {
    const locations = [
        {
            name: 'Home',
            link: '/'
        }, 
        {
            name: 'Our Product',
            link: '/product'
        }, 
        {
            name: 'Become a Seller',
            link: '/seller'
        }, 
        {
            name: 'About Us',
            link: '/about'
        }, 
        {
            name: 'Blogs',
            link: '/blogs'
        },
        {
            name: 'Join Us',
            link: '/careers'
        }
    ];

    const router = useRouter();

    return (
        <Box onClick={handleDrawerToggle} className={styles.drawerBox}>
            <List>
                {
                    locations.map((location) => (
                        <ListItem 
                            key={location.link} 
                            className={styles.menuBtn}
                            onClick={() => router.push(location.link)} 
                        >
                            <ListItemText primary={location.name} />
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
};

export const MobileHeader = () => {
    const trigger = useScrollTrigger();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar component={'header'} elevation={0} className={styles.appBar}>
                <Toolbar className={styles.toolBar}>
                    <Box>
                        <Link href="/">
                            <Image
                                src="/logo_48.svg"
                                alt="Savvyo Logo"
                                width={80} height={80}
                                className={styles.logo}
                            />
                        </Link>
                    </Box>
                    <IconButton
                        size="large"
                        aria-label="menu"
                        className={styles.pageBtns}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="right"
                        open={drawerOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{ keepMounted: true }}
                        className={styles.drawer}
                        PaperProps={{ style: { width: '35%' } }}
                    >
                        <MobileDrawer handleDrawerToggle={handleDrawerToggle} />
                    </Drawer>
                </Toolbar>
            </AppBar>
        </Slide>
    );
};
