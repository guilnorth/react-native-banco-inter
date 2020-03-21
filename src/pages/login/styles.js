import styled from "styled-components/native";

const TouchButton = styled.TouchableHighlight`
    width: 100px;
    height: 40px;
    padding: 12px;
    border-radius: 10px;	
    background-color: #FFa500;
`;
const ButtonText = styled.Text`
  font-size: 15px;
  color: #fff;
  text-align: center;
`;

const ViewContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export { TouchButton, ButtonText, ViewContainer };
