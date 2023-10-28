import { AuthenticatedStackParamList } from '@navigation/stacks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Product } from '@types';
import { Stack, Text } from 'tamagui';

interface ProductDetailScreenProps
  extends NativeStackScreenProps<
    AuthenticatedStackParamList,
    'ProductDetailScreen'
  > {}

export interface ProductDetailScreenRouteParams extends Product {}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  route,
}) => {
  return (
    <Stack>
      <Text>Product name: {route.params.name}</Text>
    </Stack>
  );
};
