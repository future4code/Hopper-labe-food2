import useRequestedData from "../../hooks/useRequestData";
import { History, Line, P } from "./Styled";

const CardHistory = () => {
  const { data } = useRequestedData(`/orders/history`);
console.log(data)

  return (
    <>
    <History>Historico de Pedidos</History>
    <Line></Line>
      {data && data.orders.length <= 0 ? (
        <P>Voce nao realizou nenhum pedido</P>
      ) : (
        data &&
        data.orders &&
        data.orders.map((pedido) => {
          return (
            <div>
              <p>{pedido.orders}</p>
              <p>{pedido.orders}</p>
              <p>{pedido.orders}</p>
            </div>
          );
        })
      )}
    </>
  );
};

export default CardHistory;
