import styled from 'styled-components';

const StDashBoardListSection = styled.section`
  max-width: 1022px;
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;

    li {
      width: calc(100% / 3 - 8px);
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid ${({ theme }) => theme.color.gray_d9};

      button {
        width: 100%;
        padding: 0 20px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        background: ${({ theme }) => theme.color.white};

        p {
          font-size: 1.6rem;
          font-weight: 600;
          color: ${({ theme }) => theme.color.black_33};
        }
      }

      a {
        display: block;
        padding: 0 20px;
        height: 70px;
        display: flex;
        align-items: center;
        background: ${({ theme }) => theme.color.white};
      }
    }
  }

  .list-pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
    margin-top: 12px;

    p {
      font-size: 1.4rem;
    }

    .pagination-button {
    }
  }
`;

export default StDashBoardListSection;
