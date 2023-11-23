import { Box, Button, Typography } from "@mui/material";
import s from "./Hero.module.scss";
import Container from "../../../components/Container/Container";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <Box
            position={"relative"}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            zIndex={2}
        >
            <img className={s.img} src="/mainTrain.webp" alt="mainImg" />
            <Container>
                <Box
                    display="flex"
                    height={"90vh"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems="center"
                    gap={2}
                >
                    <Typography align="center" variant="h2" color="primary">
                        ЖД карта желаний
                    </Typography>
                    <Typography
                        align="center"
                        variant="h2"
                        color="primary"
                        gutterBottom
                    >
                        Создание карты движения поездов
                    </Typography>
                    <Typography
                        align="center"
                        color="primary"
                        variant="h5"
                        gutterBottom
                    >
                        Сервис для визуализации движения поезда в режиме
                        реального времени
                    </Typography>
                    <Link to="map">
                        <Button
                            sx={{
                                fontSize: 18,
                                padding: "16px 32px",
                                borderRadius: "12px",
                            }}
                            color="secondary"
                            size="large"
                            variant="contained"
                        >
                            <span>Начать</span>
                        </Button>
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
