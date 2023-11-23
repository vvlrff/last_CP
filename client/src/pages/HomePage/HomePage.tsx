import Container from "../../components/Container/Container";
import Hero from "./Hero/Hero";
import { Box } from "@mui/material";
import Concept from "./Concept/Concept";

const HomePage = () => {
    return (
        <Box>
            <Hero></Hero>
            <Concept></Concept>
        </Box>
    );
};

export default HomePage;
