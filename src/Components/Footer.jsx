
import '../Components/Footer.css';
import { Link, useNavigate } from 'react-router-dom';
function Footer() {
  return (<>
    <div className="razdel"></div>
    <footer className="footer">
        <div className="footer-grid">
            <div className=" logo-2">
                <div className='logo-footer'><b>РекАвто</b><br/><small>Автозапчасти</small></div>
                <div className='opisanie-footer'>
                    Интернет-магазин запчастей для иномарок.<br />
                    Автозапчасти в наличии и под заказ.<br />
                    © 2024 RekAuto.ru – Все права защищены.
                </div>

            </div>
            <div className="sectoins-links">
            <div className="company-info">
                <div>ИП "Лашко Б.Е."</div>
                <div>ИНН 616611444035</div>
                <div>ОГРН 308616621000048</div>
            </div>
            <div className="links links-1">
                <Link to='/onas'><div>О нас</div></Link>
                <Link to='/catalog'><div>Каталог</div></Link>
            </div>
            <div className="links links-2">
            <Link to='/contact'><div>Контакты</div></Link>
            <Link to='/privacy'><div>Политика конфиденциальности</div></Link>
            </div>
            </div>
            </div>
            <div className="contact-info">
                <div>Звоните нам:</div>
                <div>8 800 551 50 45<br/>+7 (905) 297 00 08</div>
                <div>Мы находимся:</div>
                <div>344056, Ростовская обл.,<br/>г.Ростов-на-Дону Георгиевская улица, 13</div>
                <div>Наш e-mail:</div>
                <div>klientovick5@gmail.com</div>
            </div>
        </footer>
        </>
  );
}

export default Footer;
