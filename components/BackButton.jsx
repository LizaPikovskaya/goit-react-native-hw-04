import { TouchableOpacity } from "react-native";
import * as React from "react";
import { ArrowLeft } from "./icons/Icons";

export const BackButton = () => {
  const handleTurnBack = () => {};
  return (
    <TouchableOpacity onPress={handleTurnBack}>
      <ArrowLeft style={{ marginLeft: 16 }} />
    </TouchableOpacity>
  );
};
