import { useParams } from "react-router-dom";

const SingleProductInfo = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Single Product Info</h1>
    </div>
  );
};

export default SingleProductInfo;
