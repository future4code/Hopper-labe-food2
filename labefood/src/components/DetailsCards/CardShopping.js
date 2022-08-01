import { 
    Box, 
    Button, 
    FormControl, 
    InputLabel, 
    MenuItem, 
    Modal, 
    Select, 
    Typography 
  } from "@mui/material";
import { Shopping } from "./Styles";
import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";

const CardShopping = (props) => {
    const { functions } = useContext(GlobalStateContext)
    const [open, setOpen] = React.useState(false);
    const [quantity, setQuantity] = React.useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleQuantity = (event) => {
        setQuantity(event.target.value);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '328px',
        bgcolor: 'background.paper',

        p: 4,
    };

    const addItens = () => {
        functions.addProduct(props.products, props.restaurant, quantity)
        setOpen(false)
    }

    return (
        <Shopping>
            <p>R$ {props.products.price.toFixed(2).replace('.', ',')}</p>

            <button onClick={handleOpen}>Adicionar</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Selecione a quantidade desejada
                    </Typography>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Quantidade</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={quantity}
                                label="Quantidade"
                                onChange={handleQuantity}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Button onClick={addItens}>
                        Adicionar ao Carrinho
                    </Button>
                </Box>
            </Modal>

        </Shopping>
    )
}

export default CardShopping