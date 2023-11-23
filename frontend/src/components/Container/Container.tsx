import Box from "@mui/material/Box";
import { FC, ReactNode } from "react";

interface IContainer {
    children: ReactNode;
    className?: string;
    paddingY?: {};
    sx?: {};
}

const Container: FC<IContainer> = ({ children, className = "", ...rest }) => (
    <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={"100%"}
        margin={"0 auto"}
        paddingX={3}
        paddingY={{ xs: 2, sm: 4 }}
        {...rest}
        className={className}
    >
        {children}
    </Box>
);

export default Container;
