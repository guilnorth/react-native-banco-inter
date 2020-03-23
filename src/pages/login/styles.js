import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { CardBase, CenterCenter } from "../../styles/globals";
import { PRIMARY } from "../../styles/colors";
const { height } = Dimensions.get("window");


const Row = styled.View`
  flex: 1;
  flex-direction: row;
  align-self: stretch;
  ${CenterCenter}
  ${props => {
    if (props.justify) return "justify-content:" + props.justify;
  }};
`;
const Column = styled.View`
  flex-direction: column;
  align-items: center;
`;


const ViewContainer = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;
const HeaderContainer = styled.SafeAreaView`
  align-self: stretch;
  background: ${PRIMARY};
  ${CenterCenter};
  height: ${height * 0.3}px;
`;
const LogoImage = styled.Image`
  width: 100%;
  height: 60%;
  resize-mode: contain;
`;
const ContentContainer = styled.View`
  flex: 1;
  margin-horizontal: 15px;
  align-self: stretch;
`;
const CardAuth = styled(CardBase)`
  margin-top: -20px;
`;
const RowCard = styled.View`
  align-self: stretch;
  align-items: center;
  justify-content: ${props => props.justify || "space-around"};
  flex-direction: row;
`;
const CircleAccountTxt = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
`;
const CircleAccount = styled.View`
  width: 50px;
  height: 50px;
  background: #e7e7f1;
  border-radius: 25px;
  ${CenterCenter}
`;
const AccountDetail = styled.View``;
const NameAccount = styled.Text`
  max-width: 100px;
  color: #383840;
`;
const NumberAccount = styled.Text`
  color: #8d92a6;
`;

const BtnChangeAccount = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  padding: 12px;
  ${CenterCenter}

  background-color: transparent;
  border: #eaebef 1px;
  border-color: #eaebef;
  border-radius: 5px;
`;
const BtnChangeAccountText = styled.Text`
  font-size: 15px;
  color: #50505a;
  font-weight: bold;
  text-align: center;
`;
const BtnSignIn = styled.TouchableOpacity`
  ${CenterCenter}
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

const CardToken = styled(CardBase)`
  margin-top: 20px;
  height: 120px;
  padding-horizontal: 20px;
`;

const IconLock = styled.Image`
  height: 54px;
  width: 48px;
  resize-mode: cover;
`;

const TextToken = styled.Text`
  font-weight: 200;
  font-size: 28px;
  color: #50505a;
  margin-left: 15px;
`;
const TextAction = styled.Text`
  margin-top: 10px;
  font-weight: 200;
  font-size: 14px;
  color: #50505a;
`;

const IconDot = styled.View`
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 2px;
  border-width: 1px;
  border-color: ${PRIMARY};
`;

const CircleDots = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  background: #fff;
  border-radius: 22px;
  ${CenterCenter}
  justify-content:space-evenly;
`;

const CardInterPag = styled(CardBase)`
  margin-top: 20px;
  height: 120px;
`;
const ImageInterpag = styled.Image`
  margin-left: 10px;
  width: 40%;
  resize-mode: contain;
`;

export {
  CircleDots,
  IconDot,
  ViewContainer,
  HeaderContainer,
  LogoImage,
  ContentContainer,
  CardAuth,
  RowCard,
  CircleAccount,
  CircleAccountTxt,
  AccountDetail,
  NameAccount,
  NumberAccount,
  BtnChangeAccount,
  BtnChangeAccountText,
  BtnSignIn,
  BtnSignInText,
  CardToken,
  TextToken,
  Column,
  Row,
  IconLock,
  TextAction,
  CardInterPag,
  ImageInterpag
};
