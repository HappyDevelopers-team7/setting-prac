import CardContainer from './style';
import TagComponent from '../tag-component';
import { useDispatch, useSelector } from 'react-redux';
import { ModalRootState, openModal, setOpenModalName } from '@/redux/modalSlice';
import CardDetail from '../modal-contents/card-detail';
import { IdGroupType } from '@/types/idGroupType';

interface Props {
  card: {
    assignee: { id: number; nickname: string; profileImageUrl: string };
    columnId: number;
    createdAt: string;
    dashboardId: number;
    description: string;
    dueDate: string | null;
    id: number;
    imageUrl: string | null;
    tags: string[];
    teamId: number;
    title: string;
    updatedAt: string;
  };
  idGroup: IdGroupType;
}

const Card = ({ card, idGroup }: Props) => {
  const dispatch = useDispatch();
  const openModalName = useSelector((state: ModalRootState) => state.modal.openModalName);
  const colorArray = ['#ff0000', '#29c936', '#ff8c00', '#000000', '#008000', '#f122f1', '#0000ff'];

  const handleClickOpenDetail = () => {
    dispatch(setOpenModalName(`cardDetailModal${card.id}`));
    dispatch(openModal(`cardDetailModal${card.id}`));
  };

  return (
    <>
      <CardContainer onClick={handleClickOpenDetail}>
        {card.imageUrl !== null && <img src={card.imageUrl} className='image-box' alt='card-image' />}
        <h2 className='title-box'>{card.title}</h2>
        <div className='tag-box'>
          {card.tags.length > 0 &&
            card.tags.map((tag, index) => (
              <TagComponent
                key={card.tags.indexOf(tag)}
                id={card.tags.indexOf(tag)}
                name={tag}
                backgroundColor={colorArray[index % colorArray.length]}
              />
            ))}
        </div>
        {card.dueDate && (
          <div className='date-box'>
            <img src='/assets/image/icons/calendarIcon.svg' />
            <span>{card.dueDate}</span>
          </div>
        )}
        {card.assignee && (
          <img
            className='asignee-box'
            src={
              card.assignee.profileImageUrl ? card.assignee.profileImageUrl : '/assets/image/icons/bannerLogoIconXL.svg'
            }
            alt='user-image'
          />
        )}
      </CardContainer>
      {openModalName === `cardDetailModal${card.id}` ? <CardDetail idGroup={idGroup} cardId={card.id} /> : null}
    </>
  );
};

export default Card;
