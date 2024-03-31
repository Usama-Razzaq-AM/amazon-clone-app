import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/61gGY9AfeSL._SX3000_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12314"
          title="NZXT C1200 PSU - 1200 Watt Gaming PC Power Supply – ATX 3.0"
          price={21.95}
          rating={4}
          image="https://m.media-amazon.com/images/I/51AAXV-ursL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="12314"
          title="CORSAIR 4000D AIRFLOW Tempered Glass Mid-Tower ATX Case"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51AAXV-ursL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="12314"
          title="Seagate BarraCuda 8TB Internal Hard Drive HDD – 3.5 Inch Sata 6 Gb/s"
          price={15.68}
          rating={4}
          image="https://m.media-amazon.com/images/I/71dpms8gexL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12314"
          title="NZXT C1200 PSU - 1200 Watt Gaming PC Power Supply – ATX 3.0"
          price={21.95}
          rating={3}
          image="https://m.media-amazon.com/images/I/51AAXV-ursL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="12314"
          title="CORSAIR 4000D AIRFLOW Tempered Glass Mid-Tower ATX Case"
          price={11.96}
          rating={3}
          image="https://m.media-amazon.com/images/I/51AAXV-ursL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="12314"
          title="Seagate BarraCuda 8TB Internal Hard Drive HDD – 3.5 Inch Sata 6 Gb/s"
          price={15.68}
          rating={5}
          image="https://m.media-amazon.com/images/I/71dpms8gexL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="12314"
          title="Seagate BarraCuda 8TB Internal Hard Drive HDD – 3.5 Inch Sata 6 Gb/s"
          price={15.68}
          rating={2}
          image="https://m.media-amazon.com/images/I/71dpms8gexL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12314"
          title="NZXT C1200 PSU - 1200 Watt Gaming PC Power Supply – ATX 3.0"
          price={21.95}
          rating={4}
          image="https://m.media-amazon.com/images/I/51AAXV-ursL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="12314"
          title="CORSAIR 4000D AIRFLOW Tempered Glass Mid-Tower ATX Case"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51AAXV-ursL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
