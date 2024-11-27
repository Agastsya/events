const Home = () => (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <AboutUs />
              <SpecialMenu />
              <Chef />
              <Intro />
              <Laurels />
              <Gallery />
              <FindUs />
            </>
          }
        />
        
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );

export default Home;
  