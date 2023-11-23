import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import s from "./UploadPage.module.scss";
import { hackApi } from "../../services/hackApi";

const FileUploadPage: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [fileUpload, { data }] = hackApi.useUploadFileMutation()

    const navigate = useNavigate();

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
        }
    };

    useEffect(() => {
        if (data) {
            navigate("/result", { state: { response: data } });
        }
    }, [data, navigate]);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            setIsLoading(true);

            await fileUpload(formData)
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <input type="file" onChange={handleFileChange} className={s.input} />
            <p className={s.p}>Выбранный файл: {fileName}</p>
            {isLoading ? (
                <p className={s.p}>Идет обработка данных...</p>
            ) : (
                <>
                    <p className={s.p}>
                        Перетащите свои файлы сюда или щелкните в этой области
                    </p>
                    <button
                        disabled={!file}
                        type="submit"
                        className={s.button}
                    >
                        Загрузить файл
                    </button>
                </>
            )}
        </form>
    );
};

export default FileUploadPage;