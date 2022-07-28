import React from "react";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import {
  CartIcon,
  CartIconContainer,
  CloseIcon,
} from "../components/checkout.styles";

export const CheckoutSuccessScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <CloseIcon onPress={() => navigation.navigate("Checkout")} />
      <CartIconContainer>
        <CartIcon icon="check-bold" />
        <Text variant="label">Success!</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
