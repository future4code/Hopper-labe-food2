import useRequestedData from "../../hooks/useRequestData";
import { History, Line, P } from "./Styled";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

const CardHistory = () => {
  const { data } = useRequestedData(`/orders/history`);

  console.log(data)
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Marco",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const dataCreatedAt = data &&
  data.orders &&
  data.orders
    .map((ped) => {
      const day = new Date(ped.createdAt).getDate();
      const month = new Date(ped.createdAt).getMonth()
      const year = new Date(ped.createdAt).getFullYear()
      const date =  day + ' ' + monthNames[month] + ' ' + year;
      return date
    })
  
  console.log(dataCreatedAt);
 

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
            <Card sx={{ width: 330, margin: 2 }} variant="outlined" key={index}>
              <CardContent>
                <Typography sx={{ mb: 1, fontSize: 20 }} color="primary">
                  {pedido.restaurantName}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
                  {dataCreatedAt[index]}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: -1.5 }}>
                  SUBTOTAL R$ {pedido.totalPrice}
                </Typography>
              </CardContent>
            </Card>
          );
        })
      )}
    </>
  );
};

export default CardHistory;
