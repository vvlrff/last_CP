import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import s from "./InputPage.module.scss";
import Loader from "../../components/Loader/Loader";
import { motion } from "framer-motion";
import { TbInputSearch } from "react-icons/tb";
import { GiClick } from "react-icons/gi";
import { IoIosTimer } from "react-icons/io";
import { BsClipboardData } from "react-icons/bs";

const InputPage: React.FC = () => {
    const [text, setText] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [serverResponse, setServerResponse] = useState<any | null>(null);

    const navigate = useNavigate();

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!text) {
            return;
        }

        try {
            setIsLoading(true);

            const response = await axios.get(
                `http://127.0.0.1:8000/api/string_res?user_input=${text}`
            );

            console.log("Текст успешно отправлен");
            setServerResponse(response.data);
        } catch (error) {
            console.error("Ошибка при отправке текста:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    useEffect(() => {
        if (serverResponse) {
            navigate("/map", { state: { response: serverResponse } });
        }
    }, [serverResponse, navigate]);

    return (
        <section className={s.section}>
            <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className={s.form}
            >
                <div className={s.inputContainer}>
                    <h2>Введите свой текст</h2>
                    <input
                        type="text"
                        value={text}
                        onChange={handleTextChange}
                        className={s.input}
                    />
                </div>
                {isLoading && <Loader />}
                <div className={s.tutorial}>
                    <h2>Как это работает?</h2>
                    <motion.ul
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className={s.list}
                    >
                        <motion.li className={s.item} variants={item}>
                            <TbInputSearch />
                            <p>Введите запрос в строку</p>
                        </motion.li>
                        <motion.li className={s.item} variants={item}>
                            <GiClick />
                            <p>Отправьте свой запрос</p>
                        </motion.li>
                        <motion.li className={s.item} variants={item}>
                            <IoIosTimer />
                            <p>Дождитесь загрузки</p>
                        </motion.li>
                        <motion.li className={s.item} variants={item}>
                            <BsClipboardData />
                            <p>Получите результат обработки данных!</p>
                        </motion.li>
                    </motion.ul>
                </div>
                <div
                    className={
                        text
                            ? `${s.buttonContainer}`
                            : `${s.buttonContainer} ${s.buttonDisabled}`
                    }
                >
                    <button disabled={!text} type="submit" className={s.button}>
                        Отправить текст
                    </button>
                </div>
            </motion.form>
        </section>
    );
};

export default InputPage;
