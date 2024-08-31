import { useParams, useNavigate } from 'react-router-dom';
import teaImages from '../img/menu/teamenu.js';

function TeaDetail(props) {

  const { id } = useParams();
  const { tea } = props; // props에서 tea 데이터 가져오기
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  // 현재 id에 맞는 티 데이터 찾기
  const teaItem = tea[id] || {};

  // 현재 아이템의 인덱스
  const currentIndex = parseInt(id);
  const totalItems = tea.length;

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
            src={teaImages[`tea${currentIndex + 1}`]} 
            width="70%" 
            alt={teaItem.alt} 
          />       
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{teaItem.title}</h4>
          <p className='content'>{teaItem.content}</p>
          <img 
            src={teaImages[`tea${currentIndex + 1}Detail`]} 
            width="70%" 
            alt={teaItem.altDetail} 
          />
        </div>
      </div>

      <div className="button-container">
        {!isFirstItem && (
          <button 
            className='prevBtn' 
            onClick={() => navigate(`/tea/${prevId}`)}
          >
            이전
          </button>
        )}
        {!isLastItem && (
          <button 
            className='nextBtn'  
            onClick={() => navigate(`/tea/${nextId}`)}
          >
            다음
          </button>
        )}
      </div>

    </div> 
  )
}
export default TeaDetail;