import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


type Props = {}

const HeaderLeft = (props: Props) => {
  return (
    <View>
      <Ionicons name="md-menu" size={32} color="black" />
    </View>
  )
}

export default HeaderLeft