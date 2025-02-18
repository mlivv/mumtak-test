import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { QuizResponse } from "../../models/quizResponse";
import ResponseDetails from "./responseDetails";

interface ResponsesDisplayWrapperProps {
  responses: QuizResponse[];
}

export default function ResponsesDisplayWrapper({
  responses,
}: ResponsesDisplayWrapperProps) {
  return (
    <View style={styles.wrapper}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {responses.map((response, index) => (
          <View
            key={index}
            style={{
              borderBottomWidth: responses.length - 1 === index ? 0 : 1,
              borderBottomColor: "#fff",
              paddingVertical: 5,
            }}
          >
            <ResponseDetails response={response} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    maxHeight: "60%",
  },
  container: {
    backgroundColor: "#332C44",
    borderRadius: 10,
  },
  contentContainer: {
    padding: 20,
    gap: 10,
  },
});
