import {Link} from 'react-router-dom';
import './Header.css'

export default function Header() {
    return(
        <div>
            <div className="Title">
                <div>
                </div>
                <Link to="/" className="Logo">
                    <img src="https://shop-phinf.pstatic.net/20220207_145/1644191949789NnStR_PNG/2.png" className="Title-logo" alt="코리아보드게임즈"/>
                </Link>
                <div className="Login">
                    로그인
                </div>
            </div>
            
            <nav className="Category">
                <Link to="/pages/View">VIEW</Link>
                <Link to="/pages/Premium">◆프리미엄관◆</Link>
                <Link to="/pages/AllProduct">전체 상품</Link>
                <Link to="/pages/Grabitracks">그래비트랙스 v</Link>
                <Link to="/pages/Boardgame">보드게임 v</Link>
                <Link to="/pages/Cube">큐브 v</Link>
                <Link to="/pages/CollectionCard">컬렉션 카드</Link>
                <Link to="/pages/Puzzle">퍼즐 v</Link>
            </nav>
        </div>
    ); 
}