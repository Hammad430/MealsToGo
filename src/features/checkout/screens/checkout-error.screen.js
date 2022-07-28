import React from "react";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { colors } from "../../../infrastructure/theme/colors";
import {
  CartIcon,
  CartIconContainer,
  CloseIcon,
} from "../components/checkout.styles";

export const CheckoutErrorScreen = ({ route, navigation }) => {
  const { error = "" } = route.params;
  return (
    <SafeArea>
      <CloseIcon onPress={() => navigation.goBack()} />
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Text variant="label">{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
