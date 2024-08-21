import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./transaction.module.scss";

export type TransactionFormProps = {
  handleNext: () => void;
  handleFormData: (data: any) => void;
};

export function TransactionForm({
  handleNext,
  handleFormData,
}: TransactionFormProps) {
  const [formData, setFormData] = useState({
    gstIN: "",
    pan: "",
    name: "",
    bankAccountNumber: "",
    ifscCode: "",
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
    <form onSubmit={handleSubmit} className={styles.transactionForm}>
      <div className={styles.nameBox}>
        <Box className={styles.textBox}>
          <label htmlFor="gstIN">GSTIN*</label>
          <TextField
            placeholder="GSTIN Number"
            id="gstIN"
            value={formData.gstIN}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
        </Box>
        <Box className={styles.textBox}>
          <label htmlFor="pan">Pan*</label>
          <TextField
            placeholder="BSV6438759"
            id="pan"
            value={formData.pan}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
        </Box>
      </div>

      <Box className={styles.textBox}>
        <label htmlFor="name">Account holder’s name*</label>
        <TextField
          placeholder="Account holder’s name"
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
        <label htmlFor="bankAccountNumber">Bank account number*</label>
        <TextField
          placeholder="1234243556"
          id="bankAccountNumber"
          value={formData.bankAccountNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
      </Box>
      <Box className={styles.textBox}>
        <label htmlFor="ifscCode">IFSC code</label>
        <TextField
          placeholder="+1 (555) 000-0000"
          id="ifscCode"
          value={formData.ifscCode}
          onChange={handleChange}
          fullWidth
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
