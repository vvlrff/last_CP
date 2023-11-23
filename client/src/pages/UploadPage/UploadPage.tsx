import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import s from "./UploadPage.module.scss";


const FileUploadForm: React.FC = () => {
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

    useEffect(() => {
        if (serverResponse) {
            navigate("/admin/result", { state: { response: serverResponse } });
        }
    }, [serverResponse, navigate]);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            setIsLoading(true);

            const response = await api.post("/api/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log(response.data);
            setServerResponse(response.data);
            console.log("Файл успешно загружен");
        } catch (error) {
            console.error("Ошибка при загрузке файла:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <Input
                type="file"
                onChange={handleFileChange}
                className={s.input}
                inputProps={{ className: s.inputField }}
            />
            <Typography variant="body2" className={s.p}>
                Выбранный файл: {fileName}
            </Typography>
            {isLoading ? (
                <Typography variant="body2" className={s.p}>
                    Идет обработка данных... <CircularProgress size={16} />
                </Typography>
            ) : (
                <>
                    <Typography variant="body2" className={s.p}>
                        Перетащите свои файлы сюда или щелкните в этой области
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <Button
                            disabled={!file}
                            type="submit"
                            variant="contained"
                            color="primary"
                            startIcon={<CloudUploadIcon />}
                            className={s.button}
                        >
                            Загрузить файл
                        </Button>
                    </Box>
                </>
            )}
        </form>
    );
};

export default FileUploadForm;
