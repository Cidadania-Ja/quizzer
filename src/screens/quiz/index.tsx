import { View } from "react-native";
import { useOption } from "../../app/hooks/option.hook";
import { useQuestion } from "../../app/hooks/question.hook";
import { Container } from "../../resources/assets/styles";
import { KeyboardAvoidScrollViewHandler } from "../../resources/components/handlers/keyboard-avoid-scroll-view";
import { QuestionContent } from "./components/content";
import { ButtonNext, ButtonPrevious } from "./components/main";
import {
  Description,
  FooterContainer,
  Subtitle,
  Title,
} from "./components/styles";

export default function QuizScreen(): JSX.Element {
  const {
    quizOption,
    handleNext,
    handlePrevious,
    isFirstQuestion,
    isLastQuestion,
  } = useQuestion();

  const { handleOptionSelect, selectedOption } = useOption();

  return (
    <>
      <KeyboardAvoidScrollViewHandler>
        <Container>
          <View style={{ marginVertical: 24 }}>
            {quizOption?.title && <Title>{quizOption?.title}</Title>}

            {quizOption?.subtitle && <Subtitle>{quizOption.subtitle}</Subtitle>}

            {quizOption?.description && (
              <Description>{quizOption.description}</Description>
            )}
          </View>

          {quizOption && (
            <QuestionContent
              quizOption={quizOption}
              selectedOption={selectedOption}
              handleOptionSelect={handleOptionSelect}
            />
          )}
        </Container>
      </KeyboardAvoidScrollViewHandler>

      <FooterContainer>
        <View style={{ alignSelf: "flex-start" }}>
          <ButtonPrevious
            label="Previous"
            onPress={handlePrevious}
            disabled={isFirstQuestion}
          />
        </View>

        <View style={{ alignSelf: "flex-end" }}>
          <ButtonNext
            label={isLastQuestion ? "Send" : "Next"}
            onPress={handleNext}
          />
        </View>
      </FooterContainer>
    </>
  );
}
