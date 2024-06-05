import images from '../assets/images.jpg';
import bosh from '../assets/bosh.webp';
import '../Components/Home.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import Slider from './Slider';
function Home() {
  return (
    <div className='glavni'>
      <Header></Header>
      <div className="container">
        <div className="category-section">
          <Link to="/catalog" className="item-link">
            <img src={images} alt="Двигатель" className="category-img" />
            <p>Все каталоги</p>
          </Link>
          <Link to="/catalog?info_id=1" className="item-link">
            <div className="category-item">
              <img src={images} alt="Шина" className="category-img" />
              <p>Шины и диски</p>
            </div>
          </Link>
          <Link to="/catalog?info_id=2" className="item-link">
          <div className="category-item">
            <img src={images} alt="Технические запчасти" className="category-img" />
            <p>Тех запчасти</p>
          </div>
          </Link>
          <Link to="/catalog?info_id=3" className="item-link">
          <div className="category-item">
            <img src={images} alt="Масла и жидкости" className="category-img" />
            <p>Масла и жидкости</p>
          </div>
          </Link>
          <Link to="/catalog?info_id=4" className="item-link">
          <div className="category-item">
            <img src={images} alt="Инструменты" className="category-img" />
            <p>Инструменты</p>
          </div>
          </Link>
          <Link to="/catalog?info_id=5" className="item-link">
          <div className="category-item">
            <img src={images} alt="Автохимия" className="category-img" />
            <p>Автохимия</p>
          </div>
          </Link>
        </div>
      </div>
      <div className="info-section">
        <div className="payment-info">
          <div className="dot"></div>
          <p>Оплата при получении<br />Для заказов до 55 тысяч рублей не требуется предоплата, можно оплатить при получении наличными или банковской картой</p>
        </div>
        <div className="payment-info">
          <div className="dot"></div>
          <p>Доставка по всей России<br />Наши склады открыты во всех регионах страны, по вашему выбору доставим заказ курьером, через транспортную компанию или Почтой России</p>
        </div>
      </div>
      <div className="brands-section">
        <h2>Популярные бренды</h2>
        <Slider></Slider>
        <div className="brands-container">
        <div class="grid-container-img">
  <div class="item1">
    <img src={bosh} alt="Auto parts 1" />
  </div>
  <div class="item2">
    <img src={bosh} alt="Auto parts 2" />
  </div>
  <div class="item3">
    <img src={bosh} alt="Auto parts 3" />
  </div>
  <div class="item4">
    <img src={bosh} alt="Auto parts 4" />
  </div>
  <div class="item5">
    <img src={bosh} alt="Auto parts 5" />
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default Home;
