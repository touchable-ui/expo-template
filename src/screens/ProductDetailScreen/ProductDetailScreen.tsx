import { AuthenticatedStackParamList } from '@navigation/stacks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Product } from '@types';
import { Stack, Text } from 'tamagui';

interface ProductDetailScreenProps
  extends NativeStackScreenProps<
    AuthenticatedStackParamList,
    'ProductDetailScreen'
  > {}

export interface ProductDetailScreenRouteParams {
  product: Product;
}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  route,
}) => {
  const { product } = route.params;

  return (
    <Stack>
      <Text>Product name: {product.name}</Text>
    </Stack>
  );
};
