import React from "react";
import { ScrollView } from "react-native";
import BaseGradient from "../../components/BaseGradient";
import {
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
	IconDot,
	TextAction,
	CircleDots,
	CardInterPag,
	ImageInterpag,
} from "./styles";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Login(props) {
	return (
		<ScrollView style={{ backgroundColor: "#fff" }}>
			<BaseGradient>
				<HeaderContainer>
					<LogoImage source={require("../../../assets/bancointer.png")} />
				</HeaderContainer>
			</BaseGradient>

			<ViewContainer>
				<ContentContainer>
					<CardAuth>
						<RowCard>
							<CircleAccount>
								<CircleAccountTxt>GG</CircleAccountTxt>
							</CircleAccount>
							<AccountDetail>
								<NameAccount>GUILHERME GOMES NORO...</NameAccount>
								<NumberAccount>999999-9</NumberAccount>
							</AccountDetail>
							<BtnChangeAccount>
								<BtnChangeAccountText>ALTERAR</BtnChangeAccountText>
							</BtnChangeAccount>
						</RowCard>

						<BaseGradient style={{ marginTop: 25, borderRadius: 5 }}>
							<BtnSignIn>
								<BtnSignInText>ENTRAR</BtnSignInText>
							</BtnSignIn>
						</BaseGradient>
					</CardAuth>
					<CardToken>
						<RowCard justify="space-between">
							<Row justify="flex-start">
								<IconLock source={require("../../../assets/icon-lock.png")} />
								<TextToken>i-safe</TextToken>
							</Row>
							<Column>
								<CircleDots>
									<Row justify="space-evenly">
										<IconDot />
										<IconDot />
										<IconDot />
										<IconDot />
									</Row>
								</CircleDots>
								<TextAction>Gerar</TextAction>
							</Column>
						</RowCard>
					</CardToken>
					<CardInterPag>
						<Row justify="space-between">
							<ImageInterpag source={require("../../../assets/interpag.png")} />
							<Row justify="space-evenly">
								<Column>
									<CircleDots>
										<FontAwesome name="dollar" size={20} color="#f96502" />
									</CircleDots>
									<TextAction>Pagar</TextAction>
								</Column>
								<Column>
									<CircleDots>
										<MaterialCommunityIcons
											name="qrcode-scan"
											size={20}
											color="#f96502"
										/>
									</CircleDots>
									<TextAction>Receber</TextAction>
								</Column>
							</Row>
						</Row>
					</CardInterPag>
				</ContentContainer>
			</ViewContainer>
		</ScrollView>
	);
}
