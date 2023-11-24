import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import s from "./InputPage.module.scss";

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
                `http://127.0.0.1:8000/api/string_res?user_input=${text}`,
            );

            console.log("Текст успешно отправлен");
            setServerResponse(response.data);
        } catch (error) {
            console.error("Ошибка при отправке текста:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (serverResponse) {
            navigate("/map", { state: { response: serverResponse } });
        }
    }, [serverResponse, navigate]);

    return (
        <section className={s.section}>
            <form onSubmit={handleSubmit} className={s.form}>
                <div>
                    <input
                        type="text"
                        value={text}
                        onChange={handleTextChange}
                    // className={s.input}
                    />
                    {isLoading ? (
                        <p className={s.p}>Идет обработка данных...</p>
                    ) : (
                        <>
                            <p className={s.p}>
                                Введите свой текст здесь
                            </p>
                        </>
                    )}
                </div>
                <div className={s.buttonContainer}>
                    <button disabled={!text} type="submit" className={s.button}>
                        Отправить текст
                    </button>
                </div>
            </form>
        </section>
    );
};

export default InputPage;
