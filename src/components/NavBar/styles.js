import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #121212;
`;

export const SubTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DivContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.2rem 0.8rem;
  border-radius: 5px;
  border: none;
`;

export const Btn = styled.button`
  background-color: #f7d354;
  border: 2px solid #f7d354;
  border-radius: 5px;
  color: #000;
  padding: 0.3rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  transition: 0.4s;

  :hover {
    background-color: transparent;
    color: #f7d354;
  }
`;
