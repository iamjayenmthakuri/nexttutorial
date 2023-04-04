import Axios from "axios";

const CoinsList = ({ coinData }) => {
  console.log(coinData);
  return (
    <div>
      {coinData.coins.map((coin) => {
        return (
          <div>
            <h1>{coin.name}</h1>
            <img src={coin.coin} />
            <p>{coin.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );
  return {
    props: {
      CoinData: data.data,
    },
  };
};
export default CoinsList;
