import "./errorPage.scss";
export default function ErrorPage() {
  return (
    <>
      <div className="loaded-route">
        <h1>Error 404</h1>
        <img
          src="../../public/error404.jpg"
          width="900"
          alt="Error 404"
          className="error404"
        />
      </div>
    </>
  );
}
