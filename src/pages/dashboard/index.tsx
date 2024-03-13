import MyDashBoardList from '@/components/my-dashboard-list';
import StDashBoardWrap from './style';
import ModalContainer from '@/components/modal-container';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, closeModal, openModal, setOpenModalName } from '@/redux/modalSlice';
import InputText from '@/components/input/input-text';
import { SyntheticEvent, useState } from 'react';

const DashBoard = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const openModalName = useSelector((state: RootState) => state.modal.openModalName);

  const handleOpenCreateDashboardModal = () => {
    // 대시보드 생성 모달을 열어준다.
    dispatch(setOpenModalName('createDashboard'));
    dispatch(openModal('createDashboard'));
  };
  const handleCloseCreateDashboardModal = () => {
    // 대시보드 생성 모달을 닫아준다.
    dispatch(closeModal());
  };
  const handleSubmitCreateDashboardModal = (e: SyntheticEvent) => {
    e.preventDefault();
    // 대시보드 생성 submit 동작을 넣어준다.
    if (inputValue) {
      console.log(inputValue);
      dispatch(closeModal());
    } else {
      alert('값을 입력해 주세요.');
    }
  };

  // 모달 하나 이상 열때 아래와 같이 반복
  const handleOpenTestModal = () => {
    dispatch(setOpenModalName('testModal'));
    dispatch(openModal('testModal'));
  };

  const handleCloseTestModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <StDashBoardWrap>
        <MyDashBoardList handleCreateDashboard={handleOpenCreateDashboardModal} />
        <button onClick={handleOpenTestModal} type='button'>
          테스트 모달 열기
        </button>
      </StDashBoardWrap>
      {openModalName === 'createDashboard' ? (
        // state에 저장되어있는 modal 이름과 createDashboard이 같다면 보여주고 아니면 닫아라.
        <ModalContainer
          title='대시보드 생성'
          closeButtonName='취소'
          submitButtonName='생성'
          modalWidth={506}
          handleCloseModal={handleCloseCreateDashboardModal}
          handleSubmitModal={handleSubmitCreateDashboardModal}
        >
          <form onSubmit={handleSubmitCreateDashboardModal}>
            <InputText
              setValue={setInputValue}
              required
              labelName='대시보드 이름'
              placeholder='대시보드 이름을 입력하세요.'
            />
          </form>
        </ModalContainer>
      ) : null}
      {openModalName === 'testModal' ? (
        <ModalContainer
          title='테스트 모달'
          closeButtonName='취소'
          submitButtonName='확인'
          modalWidth={720}
          handleCloseModal={handleCloseTestModal}
          handleSubmitModal={handleSubmitCreateDashboardModal}
        >
          <div>여기에 모달 컴포넌트를 넣어주세요</div>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default DashBoard;
