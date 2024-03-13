import styled from 'styled-components';

interface StModalContainer {
  $modalWidth?: number;
}

const StModalContainer = styled.div<StModalContainer>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20; // 사이드바가 10이라서 그것보다 높혀주기 위함

  .modal-dim {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
  }

  .modal-content {
    position: relative;
    max-height: 90vh;
    max-width: ${(props) => (props.$modalWidth ? props.$modalWidth : 'auto')}px;
    width: 100%;
    background: #fff;
    border-radius: 15px;
    border: 1px solid #ccd5e3;
    padding: 28px;

    h2 {
      color: ${({ theme }) => theme.color.black_33};
      font-size: 2.4rem;
      font-weight: 700;
      margin-bottom: 32px;
    }
  }

  .modal-button-group {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 28px;

    button {
      padding: 14px 46px;
      border-radius: 8px;
      color: ${({ theme }) => theme.color.gray_78};
      font-size: 1.6rem;
      font-weight: 500;
    }

    .modal-button__close {
      color: ${({ theme }) => theme.color.gray_78};
      outline: 1px solid ${({ theme }) => theme.color.gray_d9};
      background: ${({ theme }) => theme.color.white};
      transition: all 0.2s;

      &:hover {
        color: ${({ theme }) => theme.color.violet};
        outline: 1px solid ${({ theme }) => theme.color.violet};
      }
    }

    .modal-button__submit {
      color: ${({ theme }) => theme.color.white};
      background: ${({ theme }) => theme.color.violet};
      transition: background-color 0.1s;

      &:hover {
        color: ${({ theme }) => theme.color.violet};
        outline: 1px solid ${({ theme }) => theme.color.violet};
        background: ${({ theme }) => theme.color.white};
      }
    }
  }

  @media ${({ theme }) => theme.deviceSize.mobile} {
    .modal-content {
      width: 96%;
      padding: 28px 20px;
      h2 {
        font-size: 2rem;
        margin-bottom: 24px;
      }
    }

    .modal-button-group {
      gap: 10px;

      button {
        width: calc(100% / 2);
        padding: 12px 46px;
        font-size: 1.4rem;
      }
    }
  }
`;

export default StModalContainer;