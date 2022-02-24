import { Link } from "react-router-dom";
import DeleteStorageButton from "../components/shared/DeleteStorageButton";

const Admin = (): JSX.Element => {
  return (
    <main className="section">
      <div className="container">
        <div className="box">
          <DeleteStorageButton />
        </div>
        <div className="is-pulled-right">
          <Link to="/">go to Home</Link>
        </div>
      </div>
    </main>
  );
};

export default Admin;
