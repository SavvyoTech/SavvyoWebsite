import {
    Box,
    TextField,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Checkbox,
    Button
} from "@mui/material";
import { useState } from "react";
import styles from "./experience.module.scss";

export type ExperienceFormProps = {
    handleNext: () => void;
    handleFormData: (data: any) => void;
};

export function ExperienceForm({
    handleNext,
    handleFormData
}: ExperienceFormProps) {
    const [formData, setFormData] = useState({
        workex: "",
        motive: "",
        experience: "",
        relocate: false,
        industry: "",
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
        <form onSubmit={handleSubmit} className={styles.experienceForm}>
            <Box className={styles.textBox}>
                <label htmlFor="workex">Describe your relevant work experience and skills*</label>
                <TextField
                    id="workex"
                    name="workex"
                    value={formData.workex}
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
                <label htmlFor="motive">What excites you about joining Savvyo*</label>
                <TextField
                    id="motive"
                    name="motive"
                    value={formData.motive}
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
                    <FormLabel component="legend">Years of Experience in your Primary Skill</FormLabel>
                    <RadioGroup
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="less_than_1_year" control={<Radio />} label="Less than 1 year" />
                        <FormControlLabel value="1-3_years" control={<Radio />} label="1-3 years" />
                        <FormControlLabel value="3-5_years" control={<Radio />} label="3-5 years" />
                        <FormControlLabel value="5+_years" control={<Radio />} label="5+ years" />
                    </RadioGroup>
                </FormControl>
            </Box>

            <Box className={styles.textBox}>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="relocate"
                            checked={formData.relocate}
                            onChange={handleChange}
                        />
                    }
                    label="Are you willing to relocate"
                />
            </Box>

            <Box className={styles.textBox}>
                <label htmlFor="industry">How do you stay current with industry trends and advancements?*</label>
                <TextField
                    id="industry"
                    name="industry"
                    value={formData.industry}
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
                Continue
            </Button>
        </form>
    );
};
