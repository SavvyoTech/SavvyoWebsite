import {
  Box,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
} from "@mui/material";
import { useState } from "react";
import styles from "./experience.module.scss";

export type ExperienceFormProps = {
  handleNext: () => void;
  handleFormData: (data: any) => void;
};

export function ExperienceForm({
  handleNext,
  handleFormData,
}: ExperienceFormProps) {
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    businessRegNumber: "",
    businessAddress: "",
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
    <form onSubmit={handleSubmit} className={styles.experienceForm}>
      <div className={styles.nameBox}>
        <Box className={styles.textBox}>
          <label htmlFor="businessName">Business Name*</label>
          <TextField
            placeholder="Business name"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
        </Box>

        <Box className={styles.textBox}>
          <label htmlFor="businessType">Business Type*</label>
          <TextField
            placeholder="Business type"
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
        </Box>
      </div>

      <Box className={styles.textBox}>
        <label htmlFor="businessRegNumber">
          Business registration number*{" "}
        </label>
        <TextField
          placeholder="Business registration number (sample)"
          id="businessRegNumber"
          name="businessRegNumber"
          value={formData.businessRegNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
      </Box>

      <Box className={styles.textBox}>
        <label htmlFor="businessAddress">Business address* </label>
        <TextField
          placeholder="Business address (sample)"
          id="businessAddress"
          name="businessAddress"
          value={formData.businessAddress}
          onChange={handleChange}
          className={styles.textFieldArea}
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
}
