import styled from "styled-components";
import background from "../../image/cine2.png";
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffff;
  background-image: url(${background});
  background-position: center center;
  background-repeat: no-repeat;
`;

export const SubTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: red;
  font-size: 2rem;
`;

export const DivContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    width: 20px;
    height: 20px;
    color: #111;
  }
`;

export const Input = styled.input`
  padding: 0.9rem 5rem;
  border-radius: 5px;
  border: 1px solid black;
  text-align: center;
  height: 40px;
`;

export const Btn = styled.button`
  background-color: #f7d354;
  border: 2px solid #f7d354;
  border-radius: 5px;
  color: #fff;
  padding: 0.5rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;

  transition: 0.4s;

  :hover {
    background-color: transparent;
    color: #111;
  }
`;

export const User = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
