import { Box, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, Button } from "@mui/material";
import { useState } from "react";

import styles from './miscellaneous.module.scss';

export type MiscellaneousFormProps = {
    handleNext: () => void;
    handleFormData: (data: any) => void;
};

export function MiscellaneousForm(
    {
        handleNext,
        handleFormData
    }: MiscellaneousFormProps
) {
    const [formData, setFormData] = useState({
        challenge: "",
        interests: "",
        experience: "",
        questions: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        handleFormData(formData);
        handleNext();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.miscellaneousForm}>
            <Box className={styles.textBox}>
                <label htmlFor="challenge">Describe a challenging project you&apos;ve worked on and how you handled it*</label>
                <TextField
                    id="challenge"
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    variant="outlined"
                    required
                />
            </Box>

            <Box className={styles.textBox}>
                <label htmlFor="interests">What are your hobbies and interests outside of work?*</label>
                <TextField
                    id="interests"
                    name="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    variant="outlined"
                    required
                />
            </Box>

            <Box className={styles.textBox}>
                <FormControl component="fieldset" margin="normal">
                    <FormLabel component="legend">How did you hear about us?</FormLabel>
                    <RadioGroup
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="social_media" control={<Radio />} label="Social Media" />
                        <FormControlLabel value="referral" control={<Radio />} label="Referral" />
                        <FormControlLabel value="job_board" control={<Radio />} label="Job Board" />
                        <FormControlLabel value="other" control={<Radio />} label="Other (please specify)" />
                    </RadioGroup>
                </FormControl>
            </Box>

            <Box className={styles.textBox}>
                <label htmlFor="questions">Do you have any questions for us*</label>
                <TextField
                    id="questions"
                    name="questions"
                    value={formData.questions}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    variant="outlined"
                    required
                />
            </Box>

            <Button variant="contained" color="primary" type="submit" fullWidth>
                Submit application
            </Button>
        </form>
    );
};
