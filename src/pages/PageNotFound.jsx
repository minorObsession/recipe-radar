import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="text-center mt-20">
      <h1 className="text-2xl mb-6">Page not found 😢</h1>
      <Button onClick={() => navigate(-1)}>&larr; Go back</Button>
    </div>
  );
}
