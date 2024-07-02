import { useEffect, useState } from "react";

type TCheckOutPurchaseMessageProps = {
  orderId: string;
};

const CheckOutPurchaseMessage: React.FC<TCheckOutPurchaseMessageProps> = ({
  orderId,
}) => {
  const [countdown, setCountdown] = useState<number>(15);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="grid place-content-center place-items-center bg-white h-[500px] m-auto gap-8">
      <h2 className="text-xl ">
        Gracias por tu compra. El ID de tu compra es:
        <span className="ml-1 font-semibold underline">{orderId}</span>
      </h2>
      <h2 className="font-mono">
        En breve te redirigiremos a la página de inicio...
      </h2>
      <h2 className="font-thin">Redireccionando en {countdown} segundo(s)</h2>
    </div>
  );
};

export default CheckOutPurchaseMessage;
