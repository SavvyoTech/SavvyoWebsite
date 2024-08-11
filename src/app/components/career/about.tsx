import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./about.module.scss";

export type AboutFormProps = {
    handleNext: () => void;
    handleFormData: (data: any) => void;
};

export function AboutForm({
    handleNext,
    handleFormData,
}: AboutFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        portfolio: "",
        poi: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        handleFormData(formData);
        handleNext();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.aboutForm}>
            <Box className={styles.textBox}>
                <label htmlFor="name">Name*</label>
                <TextField
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                />
            </Box>

            <Box className={styles.textBox}>
                <label htmlFor="email">Email*</label>
                <TextField
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                />
            </Box>

            <Box className={styles.textBox}>
                <label htmlFor="phone">Phone Number*</label>
                <TextField
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                />
            </Box>

            <Box className={styles.textBox}>
                <label htmlFor="linkedin">LinkedIn Profile</label>
                <TextField
                    id="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
            </Box>

            <Box className={styles.textBox}>
                <label htmlFor="portfolio">Portfolio</label>
                <TextField
                    id="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
            </Box>

            <Box className={styles.textBox}>
                <label htmlFor="poi">Position(s) of Interest*</label>
                <TextField
                    id="poi"
                    value={formData.poi}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                />
            </Box>

            <Box>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                >
                    Continue
                </Button>
            </Box>
        </form>
    );
};
