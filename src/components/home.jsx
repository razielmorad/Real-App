import PageHeader from "./pageheader";

const Home = () => {
  return (
    <>
      <PageHeader
        title={
          <span>
            Real <i className="bi bi-hurricane"></i>App Home
          </span>
        }
        description="this is the Real App home page! "
      />
      Real App is social network who can create Cards for business accounts and you can register for free.
    </>
  );
};
export default Home;
