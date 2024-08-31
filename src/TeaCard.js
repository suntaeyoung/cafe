import teaImages from "./img/menu/teamenu";

function TeaCard(props) {
  const teaLink = `/tea/${props.tea.id}`; // 링크 주소 설정

  return (
    <div className="col-md-4">
      <a className="link" href={teaLink}>
        <div className="card-image-container">
          <img src={teaImages[props.imageKey]} width="70%" alt={props.tea.alt} />
        </div>
        <h4>{props.tea.title}</h4>
        <p className='price'>{props.tea.price}원</p>
      </a>
    </div>
  );
}

export default TeaCard;
