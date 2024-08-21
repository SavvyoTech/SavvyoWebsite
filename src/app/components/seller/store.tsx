import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./store.module.scss";

export type StoreFormProps = {
  handleNext: () => void;
  handleFormData: (data: any) => void;
};

export function StoreForm({ handleNext, handleFormData }: StoreFormProps) {
  const [formData, setFormData] = useState({
    storeName: "",
    businessCategory: "",
    storeDesc: "",
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
    <form onSubmit={handleSubmit} className={styles.storeForm}>
      <Box className={styles.textBox}>
        <label htmlFor="storeName">Store Name*</label>
        <TextField
          className={styles.textField}
          placeholder="Store name"
          id="storeName"
          value={formData.storeName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
      </Box>
      <Box className={styles.textBox}>
        <label htmlFor="businessCategory">Business category*</label>
        <TextField
          placeholder="Clothing"
          id="businessCategory"
          value={formData.businessCategory}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
      </Box>

      <Box className={styles.textBox}>
        <label htmlFor="storeDesc">Email*</label>
        <TextField
          placeholder="Business address (sample)"
          id="storeDesc"
          value={formData.storeDesc}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
          variant="outlined"
          required
        />
      </Box>

      <Box>
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Continue
        </Button>
      </Box>
    </form>
  );
}
