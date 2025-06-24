import { Box, Container, Typography } from '@mui/material';
import appStoreIcon from './assets/App_Store.svg.png';
import canyonCardBack from './assets/Canyon.jpeg';
import jungleCardBack from './assets/Jungle.jpeg';
import lavaCardBack from './assets/Lava.jpeg';
import monacoCardBack from './assets/Monaco.jpeg';
import nepalCardBack from './assets/Nepal.jpeg';
import northernLightsCardBack from './assets/Northern_Lights.jpeg';
import oceanCardBack from './assets/Ocean.jpeg';
import pirateShipCardBack from './assets/Pirate_Ship.jpeg';
import waterfallCardBack from './assets/Waterfall.jpeg';
import logo from './assets/Logo.png';

import './App.css'
import Carousel from "./blocks/Components/Carousel/Carousel.tsx";

import type {CarouselItem} from './blocks/Components/Carousel/Carousel';
import { TbCardsFilled } from "react-icons/tb";
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";
import { RiRobot2Fill } from "react-icons/ri";

import useMediaQuery from '@mui/material/useMediaQuery';

import Silk from "./blocks/Backgrounds/Silk/Silk.tsx";
import CircularGallery from "./blocks/Components/CircularGallery/CircularGallery.tsx";
import Footer from "./components/footer.tsx";

const carouselItems: CarouselItem[] = [
    {
        id: 1,
        title: "Classic Gameplay",
        description: "Experience the traditional Balkan card game you grew up with, now on your phone.",
        icon: <TbCardsFilled  className="carousel-icon"/>,
    },
    {
        id: 2,
        title: "Play With Friends",
        description: "Invite friends and enjoy real-time multiplayer matches anytime, anywhere.",
        icon: <MdPeopleAlt className="carousel-icon" />,
    },
    {
        id: 3,
        title: "Modern Animations",
        description: "Beautiful transitions and effects bring the game to life like never before.",
        icon: <MdOutlineAutoAwesomeMotion className="carousel-icon" />,
    },
    {
        id: 4,
        title: "Solo Practice Mode",
        description: "Train against AI and sharpen your skills before challenging real opponents.",
        icon: <RiRobot2Fill className="carousel-icon" />,
    },
];

const imagesCarouselItems = [
    {image: northernLightsCardBack, text: ''},
    {image: canyonCardBack, text: ''},
    {image: jungleCardBack, text: ''},
    {image: lavaCardBack, text: ''},
    {image: monacoCardBack, text: ''},
    {image: nepalCardBack, text: ''},
    {image: oceanCardBack, text: ''},
    {image: pirateShipCardBack, text: ''},
    {image: waterfallCardBack, text: ''},
]

function App() {

    const isMobile = useMediaQuery('(max-width:500px)');
    const carouselWidth = isMobile ? 300 : 500;

    return (
        <Box className={"main-container"} >
            <Box id="silk-background">
                <Silk
                    speed={5}
                    scale={1}
                    color="#1B4242"
                    noiseIntensity={1.5}
                    rotation={45}
                />
            </Box>
            <Box id={"content-container"}>
                <Container className={"container"} >
                    <Box className="logo-container">
                        <img src={logo} alt={"logo"}/>
                    </Box>
                    <Typography variant="h3" color="text.primary" className={"header-description"}>
                        Traditional Balkan card game now available on iOS.
                    </Typography>
                    <Box className="download-container">
                        <a
                            href="https://apps.apple.com/app/your-app-id" // Replace with your real App Store link
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={appStoreIcon}
                                alt="Download on the App Store"
                                style={{ height: 100 }}
                            />
                        </a>
                    </Box>
                </Container>
                <Box className="image-carousel-container">
                    <CircularGallery
                        items={imagesCarouselItems}
                        bend={1}
                        textColor="#F5F5F5"
                        borderRadius={0.05}/>
                </Box>
                <Container className={"container"}>
                    <Box className={"carousel-container"}>
                        <Carousel
                            items={carouselItems}
                            baseWidth={carouselWidth}
                            autoplay={true}
                            autoplayDelay={3000}
                            pauseOnHover={true}
                            loop={true}
                            round={false}
                        />
                    </Box>
                </Container>
                <Footer></Footer>
            </Box>
        </Box>
    );
}

export default App;