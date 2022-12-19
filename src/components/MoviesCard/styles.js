import styled from "styled-components";

export const Container = styled.div`
  width: 29%;
  color: #fff;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #111;
  padding: 1rem;

  svg {
    color: #f7d354;
  }

  a {
    background-color: #f7d354;
    border: 2px solid #f7d354;
    padding: 1rem 0.5rem;
    border-radius: 5px;
    transition: 0.4s;
    text-align: center;
    font-weight: bold;
    color: #000;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  margin-bottom: 1rem;
`;
