import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./about.module.scss";

export type AboutFormProps = {
  handleNext: () => void;
  handleFormData: (data: any) => void;
};

export function AboutForm({ handleNext, handleFormData }: AboutFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
      <div className={styles.nameBox}>
        <Box className={styles.textBox}>
          <label htmlFor="firstName">First Name*</label>
          <TextField
            className={styles.textField}
            placeholder="First Name"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
        </Box>
        <Box className={styles.textBox}>
          <label htmlFor="lastName">Last Name*</label>
          <TextField
            placeholder="Last Name"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
        </Box>
      </div>

      <Box className={styles.textBox}>
        <label htmlFor="email">Email*</label>
        <TextField
          placeholder="you@company.com"
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
          placeholder="+1 (555) 000-0000"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
      </Box>

      <Box>
        <Button className={styles.continueBtn} variant="contained" color="primary" type="submit" fullWidth>
          Continue
        </Button>
      </Box>
    </form>
  );
}
