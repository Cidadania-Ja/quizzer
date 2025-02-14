import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #010101;
  text-align: center;
  margin-top: 16px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  font-weight: normal;
  color: #6b7280;
  text-align: center;
  margin-top: 8px;
`;

export const Description = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #6b7280;
  text-align: center;
  margin-top: 8px;
`;

export const OptionButton = styled(TouchableOpacity)<{ isSelected: boolean }>`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background-color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? "#31CD63" : "#ffffff"};
  border: 1px solid #f4f3f6;
  border-radius: 12px;
  margin-bottom: 8px;
`;

export const OptionText = styled.Text<{ isSelected: boolean }>`
  font-size: 17px;
  color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? "#ffffff" : "#060710"};
`;

export const NextButton = styled(TouchableOpacity)`
  background-color: ${({ disabled }) => (disabled ? "#d1d5db" : "#31cd63")};
  padding: 16px;
  border-radius: 12px;
  align-items: center;
  margin-top: 16px;
`;

export const PreviousButton = styled(TouchableOpacity)`
  background-color: ${({ disabled }) => (disabled ? "#d1d5db" : "#5E6175")};
  padding: 16px;
  border-radius: 12px;
  align-items: center;
  margin-top: 16px;
`;

export const ButtonText = styled(Text)`
  font-size: 17px;
  font-weight: bold;
  color: #ffffff;
`;

export const FooterContainer: any = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  border: 1px solid #e4e7eb;
  padding: 24px;
`;
