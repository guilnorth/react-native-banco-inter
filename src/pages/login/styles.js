import styled from "styled-components/native";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const AZULCINZA = "#ECEFF1";

const ViewContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const HeaderContainer = styled.View`
  background: #f96502;
  justify-content: center;
  height: 185px;

  /* width: 100%; */
`;
const LogoImage = styled.Image`
  height: 44px;
  resize-mode: center;
`;
const ContentContainer = styled.View`
  flex: 1;
  margin-horizontal: 20px;
  width: ${width - 40};
`;
const CardBase = styled.View`
  background: ${AZULCINZA};
  justify-content: center;
  align-items: center;
  margin-top: -20px;
  height: 200px;
  border-radius: 10px;
`;
const RowCard = styled.View`
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  padding-horizontal: 20px;
`;
const CircleAccountTxt = styled.Text`
  color: #fff;
  font-size:15px
  font-weight: 600;
`;
const CircleAccount = styled.View`
  width: 50px;
  height: 50px;
  background: #e6e7f0;
  border-radius: 25px;

  align-items: center;
  justify-content: center;
`;
const AccountDetail = styled.View``;
const NameAccount = styled.Text`
  max-width: 100px;
`;
const NumberAccount = styled.Text``;
const BtnChangeAccount = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  padding: 12px;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: #fff 1px;
  border-color: #fff;
  border-radius: 5px;
`;
const BtnChangeAccountText = styled.Text`
  font-size: 15px;
  color: #000;
  font-weight: bold;
  text-align: center;
`;
const BtnSignIn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  margin-top: 25px;
  width: 220px;
  height: 50px;

  border-radius: 5px;
  background-color: #f96502;
`;
const BtnSignInText = styled.Text`
  font-size: 15px;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

export {
  ViewContainer,
  HeaderContainer,
  LogoImage,
  ContentContainer,
  CardBase,
  RowCard,
  CircleAccount,
  CircleAccountTxt,
  AccountDetail,
  NameAccount,
  NumberAccount,
  BtnChangeAccount,
  BtnChangeAccountText,
  BtnSignIn,
  BtnSignInText
};
