import useRequestedData from "../../hooks/useRequestData";
import { History, Line, P } from "./Styled";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';



const CardHistory = () => {
  const { data } = useRequestedData(`/orders/history`);

  return (
    <>
    <History>Histórico de Pedidos</History>
    <Line></Line>
      {data && data.orders.length <= 0 ? (
        <P>Voce nao realizou nenhum pedido</P>
      ) : (
        data &&
        data.orders &&
        data.orders.map((pedido, index) => {
          return (
            <Card sx={{minWidth: 50, margin: 3, padding: -1 }} variant="outlined" key={index}>
            <CardContent>
              <Typography sx={{ mb: 1, fontSize: 20 }} color="primary">{pedido.restaurantName}</Typography >
              <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>{pedido.createdAt}</Typography >
              <Typography variant="h6" component="div" sx={{ fontWeight: 700 }} >SUBTOTAL R$ {pedido.totalPrice}</Typography > 
              </CardContent>
            </Card>
          );
        })
      )}
    </>
  );
};

export default CardHistory;
