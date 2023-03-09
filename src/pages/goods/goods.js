import Main from "../../components/main/main";
import About from "../../components/about/about";
import CardList from "../../components/card-list/card-list";
import Footer from "../../components/footer/footer";

import './goods.scss';

function Goods({articles, imgData, contentData}) {
    const {backgroundImgs} = imgData[0];

    return (
      <>
          <Main currentBackgroundImg={backgroundImgs[1].src}/>
          <About contentData={contentData[1]}/>

          <section className="goods__card-workaround">
              <div className="container">
                  <CardList data={articles}/>
              </div>
          </section>

          <Footer/>
      </>
    );
}

export default Goods;