import styled from "styled-components/native";
import { AZULCINZA } from "./colors";

export const CardBase = styled.View`
  background: ${AZULCINZA};
  justify-content: center;
  align-items: center;

  height: 180px;
  border-radius: 8px;
  padding-horizontal: 5px;
  shadow-color: ${AZULCINZA};
  shadow-opacity: 0.35;
  elevation: 0.2;
  shadow-radius: 8px;
`;

export const CenterCenter = `
align-items: center;
justify-content: center;
`;
