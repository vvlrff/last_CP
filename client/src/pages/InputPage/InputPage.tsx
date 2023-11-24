import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import s from "./InputPage.module.scss";

const InputPage: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [serverResponse, setServerResponse] = useState<any | null>(null);

    const navigate = useNavigate();

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            setIsLoading(true);

            const response = await axios.post(
                "http://127.0.0.1:8000/api/test",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log("Файл успешно загружен");
            setServerResponse(response.data);
        } catch (error) {
            console.error("Ошибка при загрузке файла:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (serverResponse) {
            navigate("/result");
            // navigate("/result", { state: { response: serverResponse } });
        }
    }, [serverResponse, navigate]);

    return (
        <section className={s.section}>
            <form onSubmit={handleSubmit} className={s.form}>
                <div className={s.formContainer}>
                    <input
                        type="text"
                        onChange={handleFileChange}
                        className={s.input}
                    />
                    {isLoading ? (
                        <p className={s.p}>Идет обработка данных...</p>
                    ) : (
                        <>
                            <p className={s.p}>
                                Перетащите свои файлы сюда или щелкните в этой
                                области
                            </p>
                        </>
                    )}
                </div>
                <div className={s.buttonContainer}>
                    <button disabled={!file} type="submit" className={s.button}>
                        Загрузить файл
                    </button>
                </div>
            </form>
        </section>
    );
};

export default InputPage;