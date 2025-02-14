import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { isTabletDevice } from "../../../app/helpers/dimension.helper";
import { isAndroid } from "../../../app/helpers/platform.helper";

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  padding-top: ${isAndroid ? StatusBar.currentHeight + "px" : "0px"};
  background: #fff;
`;

export const Container: any = styled.View`
  padding: ${isTabletDevice ? "0px 40px" : "0px 20px"};
  background: #fff;
`;
