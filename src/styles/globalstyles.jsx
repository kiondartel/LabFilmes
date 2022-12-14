import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body {
  background-color: #000;
  scroll-behavior: smooth;
  font-family: "Nunito",sans-serif;;
  color: #fff;
 }

 a{
  text-decoration: none;
  color: #f7d354;
  transition: .5s;
 }

 a:hover{
  color: #b8930c;
 }


`;

export default Global;
