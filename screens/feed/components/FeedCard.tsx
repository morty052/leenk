import {Text, View, Pressable, Image } from 'react-native'
import {useWindowDimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';


type Props = {
    style?: String,
    id?:Number,
    image:any,
    name?:string,
    handleView?:any
   
}

const FeedCard = ({style, id, image, name, handleView}: Props) => {

    const navigation = useNavigation()
    const {height, width} = useWindowDimensions();
    const cardwidth = width - 20
    const cardHeight = height /2 + 100

    

    

    return (
      <View
        style={{ width:cardwidth, height: cardHeight }}
        className={`bg-white rounded-xl overflow-hidden border  shadow-2xl border-fuchsia-800  flex flex-col relative ${style} `}
      >
        <Image
          resizeMode='cover'
          className="absolute top-0 w-full h-full "
          source={{uri:`https://cdn.sanity.io/images/r78c84um/production/${image}`}}
          // src={String(image)}
        />

        {/* BUTTONS */}
        <View className="absolute flex flex-row justify-between items-center p-4  border-t rounded-b-xl bottom-0 bg-white inset-x-0 ">
        <View>
          <Text className='text-xl  font-semibold'>
            {name}
          </Text>
        </View>
        <View className="flex flex-row ">
        <Pressable onPress={handleView} className="mx-4">
            <Entypo  name="circle" size={32} color="black" />
       </Pressable>
          <View className="">
            <Entypo name="heart" size={32} color="red" />
          </View>
        </View>
        </View>
      </View>
    );
}

export default FeedCard

