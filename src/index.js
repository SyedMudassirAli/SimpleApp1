const App = () => {
  return (
    <div>
      <Navbar />
      <CaroselSlide />
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <h3 class="text-center bg-info text-white p-2">Select Online Dresses</h3>
      <p class="text-justify">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <div class="row cus_body">
        <div class="col-md-3 col-sm-6">
          <div class="product-grid4">
            <div class="product-image4">
              <a href="#">
                <img
                  class="pic-1"
                  src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-1.jpg"
                />
                <img
                  class="pic-2"
                  src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-2.jpg"
                />
              </a>
              <ul class="social">
                <li>
                  <a href="#" data-tip="Quick View">
                    <i class="fa fa-eye"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-tip="Add to Wishlist">
                    <i class="fa fa-shopping-bag"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-tip="Add to Cart">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                </li>
              </ul>
              <span class="product-new-label">New</span>
              <span class="product-discount-label">-10%</span>
            </div>
            <div class="product-content">
              <h3 class="title">
                <a href="#">Women's Black Top</a>
              </h3>
              <div class="price">
                $14.40
                <span>$16.00</span>
              </div>
              <a class="add-to-cart" href="">
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="product-grid4">
            <div class="product-image4">
              <a href="#">
                <img
                  class="pic-1"
                  src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-3.jpg"
                />
                <img
                  class="pic-2"
                  src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-4.jpg"
                />
              </a>
              <ul class="social">
                <li>
                  <a href="#" data-tip="Quick View">
                    <i class="fa fa-eye"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-tip="Add to Wishlist">
                    <i class="fa fa-shopping-bag"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-tip="Add to Cart">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                </li>
              </ul>
              <span class="product-discount-label">-12%</span>
            </div>
            <div class="product-content">
              <h3 class="title">
                <a href="#">Men's Blue Shirt</a>
              </h3>
              <div class="price">
                $17.60
                <span>$20.00</span>
              </div>
              <a class="add-to-cart" href="">
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="product-grid4">
            <div class="product-image4">
              <a href="#">
                <img
                  class="pic-1"
                  src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-5.jpg"
                />
                <img
                  class="pic-2"
                  src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-6.jpg"
                />
              </a>
              <ul class="social">
                <li>
                  <a href="#" data-tip="Quick View">
                    <i class="fa fa-eye"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-tip="Add to Wishlist">
                    <i class="fa fa-shopping-bag"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-tip="Add to Cart">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                </li>
              </ul>
              <span class="product-new-label">New</span>
              <span class="product-discount-label">-10%</span>
            </div>
            <div class="product-content">
              <h3 class="title">
                <a href="#">Women's Black Top</a>
              </h3>
              <div class="price">
                $14.40
                <span>$16.00</span>
              </div>
              <a class="add-to-cart" href="">
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="product-grid4">
            <div class="product-image4">
              <a href="#">
                <img
                  class="pic-1"
                  src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-7.jpg"
                />
                <img
                  class="pic-2"
                  src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-8.jpg"
                />
              </a>
              <ul class="social">
                <li>
                  <a href="#" data-tip="Quick View">
                    <i class="fa fa-eye"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-tip="Add to Wishlist">
                    <i class="fa fa-shopping-bag"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-tip="Add to Cart">
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                </li>
              </ul>
              <span class="product-new-label">New</span>
              <span class="product-discount-label">-10%</span>
            </div>
            <div class="product-content">
              <h3 class="title">
                <a href="#">Women's Black Top</a>
              </h3>
              <div class="price">
                $14.40
                <span>$16.00</span>
              </div>
              <a class="add-to-cart" href="">
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

const CaroselSlide = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100 cus_img img-responsive"
            src="imgs/d1.jpg"
            alt="First slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Dress 1</h5>
            <p>This is Dress one</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100 cus_img img-responsive"
            src="imgs/d2.jpg"
            alt="Second slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Dress 2</h5>
            <p>This is Dress two</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100 cus_img img-responsive"
            src="imgs/d3.jpg"
            alt="Third slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Dress 3</h5>
            <p>This is Dress three</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    // <div class="footer bg-dark  text-center text-white">
    //   Create by Syed Mudassir Ali @ Copy Right 2020
    // </div>
    <div class="footer site-footer">
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                Mudassir.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to
                help the upcoming programmers with the code. Scanfcode focuses
                on providing the most efficient code or snippets as the code
                wants to be simple. We will help programmers build up concepts
                in different programming languages that include C, C++, Java,
                HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and
                Algorithm.
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul class="footer-links">
                <li>
                  <a href="#">C</a>
                </li>
                <li>
                  <a href="#">UI Design</a>
                </li>
                <li>
                  <a href="#">PHP</a>
                </li>
                <li>
                  <a href="#">Java</a>
                </li>
                <li>
                  <a href="#">Android</a>
                </li>
                <li>
                  <a href="#">Templates</a>
                </li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Contribute</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by
                <a href="#">Mudassir</a>.
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <a class="facebook" href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a class="twitter" href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a class="dribbble" href="#">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
