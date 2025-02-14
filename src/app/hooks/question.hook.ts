import { useState } from "react";
import { QuizSampleQuestions } from "../data";
import { Question } from "../entities/question.entity";
import { Alert } from "react-native";

export function useQuestion() {
  const questions: Question[] = QuizSampleQuestions ?? [];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const quizOption: Question | undefined = questions[currentQuestionIndex];

  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  function handlePrevious(): void {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  }

  function handleNext(): void {
    if (isLastQuestion) {
      const responses = {
        key: "value",
        anotherKey: "anotherValue",
      };

      Alert.alert(
        "You have finished the quiz!",
        JSON.stringify(responses, null, 2)
      );
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  }

  return {
    quizOption,
    isFirstQuestion,
    isLastQuestion,
    handlePrevious,
    handleNext,
  };
}
