import { Switch, TextInput, View } from "react-native";
import { Question } from "../../../../app/entities/question.entity";
import { OptionButton, OptionText } from "../styles";

export const QuestionContent = ({
  quizOption,
  selectedOption,
  handleOptionSelect,
}: {
  quizOption: Question;
  selectedOption: string | null;
  handleOptionSelect: (optionId: string) => void;
}): JSX.Element => {
  return (
    <View style={{ marginTop: 24, gap: 16 }}>
      {quizOption?.components?.select && (
        <View>
          {quizOption?.components?.select.options.map((option) => (
            <OptionButton
              key={option.id}
              isSelected={option.id === selectedOption}
              onPress={() => handleOptionSelect(option.id)}
            >
              <OptionText isSelected={option.id === selectedOption}>
                {option.label}
              </OptionText>
            </OptionButton>
          ))}
        </View>
      )}

      {quizOption?.components?.text_input && (
        <TextInput
          placeholder={quizOption.components.text_input.placeholder}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            borderRadius: 8,
            marginBottom: 16,
          }}
        />
      )}

      {quizOption?.components?.toggle && (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Switch
            value={selectedOption === "yes"}
            onValueChange={(val) => handleOptionSelect(val ? "yes" : "no")}
          />

          <OptionText>{quizOption.components.toggle.label}</OptionText>
        </View>
      )}

      {quizOption?.components?.textarea && (
        <TextInput
          placeholder={quizOption.components.textarea.placeholder}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            paddingVertical: 30,
            paddingHorizontal: 10,
            borderRadius: 8,
            marginBottom: 16,
          }}
          multiline
        />
      )}
    </View>
  );
};
