import React from "react";
import { View, StyleSheet } from "react-native";
import {
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
} from "./styles";
import BottomSheet from "reanimated-bottom-sheet";

export default function Login({ navigation }) {
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
  renderContent = () => <View style={styles.panel}></View>;
  bs = React.createRef();
  return (
    <ViewContainer>
      <HeaderContainer>
        <LogoImage source={require("../../../assets/bancointer2.png")} />
      </HeaderContainer>
      <ContentContainer>
        <CardBase>
          <RowCard>
            <CircleAccount>
              <CircleAccountTxt>GG</CircleAccountTxt>
            </CircleAccount>
            <AccountDetail>
              <NameAccount>GUILHERME GOMES NORO...</NameAccount>
              <NumberAccount>983702-7</NumberAccount>
            </AccountDetail>
            <BtnChangeAccount>
              <BtnChangeAccountText>ALTERAR</BtnChangeAccountText>
            </BtnChangeAccount>
          </RowCard>
          <BtnSignIn>
            <BtnSignInText>ENTRAR</BtnSignInText>
          </BtnSignIn>
        </CardBase>
      </ContentContainer>

      {/* <BottomSheet
        ref={bs}
        snapPoints={[450, 300, 0]}
        renderContent={renderContent}
        renderHeader={renderHeader}
      /> */}
    </ViewContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },

  panelContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  panel: {
    height: 600,
    padding: 20,
    backgroundColor: "#f7f5eee8"
  },
  header: {
    backgroundColor: "#f7f5eee8",
    shadowColor: "#000000",
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  panelHeader: {
    alignItems: "center"
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10
  },
  panelTitle: {
    fontSize: 27,
    height: 35
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#318bfb",
    alignItems: "center",
    marginVertical: 10
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white"
  },
  photo: {
    width: "100%",
    height: 225,
    marginTop: 30
  },
  map: {
    height: "100%",
    width: "100%"
  }
});
