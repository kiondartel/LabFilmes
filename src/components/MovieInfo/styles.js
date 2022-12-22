import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  svg {
    font-size: 1.5rem;
    color: #f7d354;
    margin-right: 0.5rem;
  }

  img {
    min-width: 500px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 665px;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  padding: 1rem;
`;

export const DescriptionContainer = styled.div``;

export const Description = styled.p`
  margin-top: 0.5rem;
`;

export const Title = styled.h3`
  color: #f7d354;
`;
