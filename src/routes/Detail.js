import { useParams, useNavigate } from 'react-router-dom';
import coffeeImages from '../img/menu/menu.js';

function Detail(props) {
  const { id } = useParams();
  const { coffee } = props; // props에서 coffee 데이터 가져오기
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  // 현재 id에 맞는 커피 데이터 찾기
  const coffeeItem = coffee[id] || {};

  // 현재 아이템의 인덱스
  const currentIndex = parseInt(id);
  const totalItems = coffee.length;

  // 이전 및 다음 아이템의 인덱스 계산
  const prevId = (currentIndex - 1 + totalItems) % totalItems;
  const nextId = (currentIndex + 1) % totalItems;

  // 이전 버튼이 사라져야 하는 조건
  const isFirstItem = currentIndex === 0;
  // 다음 버튼이 사라져야 하는 조건
  const isLastItem = currentIndex === totalItems - 1;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={coffeeImages[`coffee${currentIndex + 1}`]} 
            width="70%" 
            alt={coffeeItem.alt} 
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{coffeeItem.title}</h4>
          <p className='content'>{coffeeItem.content}</p>
          <img 
            src={coffeeImages[`coffee${currentIndex + 1}Detail`]} 
            width="70%" 
            alt={coffeeItem.altDetail} 
          />
        </div>
      </div>
      
      <div className="button-container">
        {!isFirstItem && (
          <button 
            className='prevBtn' 
            onClick={() => navigate(`/coffee/${prevId}`)}
          >
            이전
          </button>
        )}
        {!isLastItem && (
          <button 
            className='nextBtn'  
            onClick={() => navigate(`/coffee/${nextId}`)}
          >
            다음
          </button>
        )}
      </div>
    </div>
  );
}

export default Detail;
