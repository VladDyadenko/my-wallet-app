import { Button, TextField } from "@mui/material";
import { Form, FormContainer, WalletTitle } from "./WalletForm.styled";

function WalletForm() {
  return (
    <main>
      <section>
        <WalletTitle>My Wallet </WalletTitle>
        <FormContainer>
          <Form>
            <TextField
              type="text"
              name="wallet address"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              size="small"
              margin="normal"
              fullWidth={true}
              //   value={name}
              //   onChange={handlChange}
              label="wallet address"
              placeholder="enter your wallet address"
              variant="outlined"
            />
            <TextField
              type="number"
              name="wallet balance"
              //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              size="small"
              margin="normal"
              fullWidth={true}
              //   value={name}
              //   onChange={handlChange}
              label="wallet balance"
              //   placeholder="enter your wallet address"
              variant="outlined"
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Form>
        </FormContainer>
      </section>
    </main>
  );
}

export default WalletForm;
