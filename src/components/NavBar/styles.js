import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffff;
`;

export const SubTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: red;
  svg {
    margin-right: 0.2rem;
  }
`;

export const DivContainer = styled.form`
  display: flex;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.2rem 0.8rem;
  border-radius: 5px;
  border: 1px solid black;
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

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-right: 20px;
`;

export const User = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
export const Name = styled.p`
  color: black;
  margin-top: 10px;
`;
