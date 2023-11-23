import {
    Box,
    useScrollTrigger,
    Slide,
    AppBar,
    IconButton,
    Drawer,
    Typography,
    Button,
    MenuItem,
    Popover,
    Paper,
} from "@mui/material";
// import { Container, Box } from "@mui/system";
import { ReactElement, FC, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MapIcon from "@mui/icons-material/Map";
interface IHideOnScroll {
    children: ReactElement;
}

const HideOnScroll: FC<IHideOnScroll> = ({ children }) => {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
};

export const Header: FC = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const openPop = Boolean(anchorEl);

    const [isOpen, setIsOpen] = useState<null | boolean>(null);

    const handleMenuOpen = () => {
        setIsOpen(true);
    };

    const handleMenuClose = () => {
        setIsOpen(false);
    };

    const open = Boolean(isOpen);

    return (
        <HideOnScroll>
            <AppBar
                position={"fixed"}
                // sx={{
                //     backgroundColor: "#fff",
                // }}
                elevation={1}
            >
                <Container paddingY={{ xs: 1 / 2, sm: 1 }}>
                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Box display={"flex"} alignItems={"center"} gap={4}>
                            <Link to={"/"} color="primary">
                                {/* <img src={AiOpenLogo} height={65} alt="logo" /> */}
                                <Typography variant="h5" color="primary">
                                    NaturaLP
                                </Typography>
                            </Link>
                            <Box
                                height={65}
                                width={65}
                                sx={{
                                    "& img": {
                                        width: "100%",
                                        height: "100%",
                                    },
                                }}
                            >
                                <img
                                    src="https://static.tildacdn.com/tild3632-3235-4330-b835-346636623337/PGK_white.svg"
                                    alt=""
                                />
                            </Box>
                            <Box
                                height={65}
                                width={65}
                                sx={{
                                    "& img": {
                                        width: "100%",
                                        height: "100%",
                                    },
                                }}
                            >
                                <img
                                    src="https://static.tildacdn.com/tild3633-6432-4535-a132-316561633332/PGK_digital.svg"
                                    alt=""
                                />
                            </Box>
                        </Box>
                        <Box display="flex" alignItems={"center"}>
                            <Box
                                sx={{ display: { xs: "flex" } }}
                                alignItems={"center"}
                                gap={1}
                            >
                                <>
                                    <div>
                                        <IconButton
                                            aria-label="Quick Help"
                                            size="large"
                                            aria-owns={
                                                open
                                                    ? "mouse-over-popover"
                                                    : undefined
                                            }
                                            aria-haspopup="true"
                                            onMouseEnter={handlePopoverOpen}
                                            onMouseLeave={handlePopoverClose}
                                        >
                                            <HelpOutlineIcon color="primary" />
                                        </IconButton>
                                        <Popover
                                            id="mouse-over-popover"
                                            sx={{
                                                pointerEvents: "none",
                                            }}
                                            open={openPop}
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: "bottom",
                                                horizontal: "left",
                                            }}
                                            transformOrigin={{
                                                vertical: "top",
                                                horizontal: "left",
                                            }}
                                            onClose={handlePopoverClose}
                                            disableRestoreFocus
                                        >
                                            <Box
                                                padding={4}
                                                sx={{
                                                    backgroundColor: "#fff",
                                                }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    color="black"
                                                >
                                                    Как пользоваться?
                                                    <p>1) Откройте карту</p>
                                                    <p>
                                                        2) Выберите дату или
                                                        нужный вам поезд
                                                    </p>
                                                    <p>
                                                        3) Отслеживайте маршрут
                                                        выбранного поезда
                                                    </p>
                                                </Typography>
                                            </Box>
                                        </Popover>
                                    </div>

                                    <IconButton
                                        aria-label="Menu"
                                        onClick={handleMenuOpen}
                                        size="large"
                                    >
                                        <MenuIcon color="primary" />
                                    </IconButton>

                                    <Drawer
                                        anchor="right"
                                        open={open}
                                        onClose={() => handleMenuClose()}
                                        variant="temporary"
                                        sx={{
                                            "& .MuiPaper-root": {
                                                width: "100%",
                                                maxWidth: {
                                                    xs: "100%",
                                                    sm: 400,
                                                },
                                                borderRadius: {
                                                    xs: "4px",
                                                    md: "0",
                                                },
                                                borderTopLeftRadius: {
                                                    md: "12px",
                                                },
                                                borderBottomLeftRadius: {
                                                    md: "12px",
                                                },
                                            },
                                        }}
                                    >
                                        <Box padding={1} height={"100%"}>
                                            <CloseIcon
                                                fontSize="large"
                                                onClick={handleMenuClose}
                                                sx={{ cursor: "pointer" }}
                                            ></CloseIcon>
                                            <Box
                                                sx={{
                                                    height: "90%",
                                                    "& a": {
                                                        padding: "20px",
                                                        height: "100%",
                                                        width: "100%",
                                                        borderRadius: "4px",
                                                        transition:
                                                            "background-color .3s ease, color .3s ease",

                                                        "& li": {
                                                            padding: 0,
                                                        },
                                                        // "& li:hover": {
                                                        //     backgroundColor:
                                                        //         "red",
                                                        // },

                                                        "&:hover": {
                                                            backgroundColor:
                                                                "#cacaca",
                                                            color: "#121212",
                                                        },
                                                    },
                                                }}
                                            >
                                                {/* <Box
                                                            component={Link}
                                                            to={
                                                                RoutesPath.profile
                                                            }
                                                            onClick={
                                                                handleMenuClose
                                                            }
                                                        >
                                                            Профиль
                                                        </Box> */}
                                                <MenuItem>
                                                    <Link
                                                        to={"/map"}
                                                        onClick={
                                                            handleMenuClose
                                                        }
                                                    >
                                                        <Typography
                                                            align="center"
                                                            fontWeight={600}
                                                            variant="h6"
                                                        >
                                                            Карта
                                                        </Typography>
                                                    </Link>
                                                </MenuItem>
                                                {/* <MenuItem>
                                                <Link
                                                    to={RoutesPath.subscription}
                                                    onClick={handleMenuClose}
                                                >
                                                    <Typography
                                                        align="center"
                                                        fontWeight={600}
                                                        variant="h6"
                                                    >
                                                        Каталог
                                                    </Typography>
                                                </Link>
                                            </MenuItem> */}
                                                {/* <MenuItem>
                                                <Link
                                                    to={RoutesPath.booking}
                                                    onClick={handleMenuClose}
                                                >
                                                    <Typography
                                                        align="center"
                                                        fontWeight={600}
                                                        variant="h6"
                                                    >
                                                        Бронирование
                                                    </Typography>
                                                </Link>
                                            </MenuItem> */}
                                            </Box>
                                        </Box>
                                    </Drawer>
                                </>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </AppBar>
        </HideOnScroll>
    );
};
