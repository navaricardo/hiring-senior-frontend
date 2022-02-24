import DeleteStorageButton from "../components/shared/DeleteStorageButton";

const Admin = (): JSX.Element => {
  return (
    <main className="section">
      <div className="container is-fluid">
        <div className="box">
          <DeleteStorageButton />
        </div>
      </div>
    </main>
  );
};

export default Admin;
