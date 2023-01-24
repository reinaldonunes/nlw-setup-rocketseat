import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native"

export function HabitsEmpty(){
  const {navigate} = useNavigation()
  return (
    <Text
      className="text-zinc-400 text-base"
    >
      Você não está monitorando nenhum hábito.
      <Text
        className="text-violet-400 text-base underline"
        onPress={() => navigate('new')}
      >
        Clique aqui para cadastrar um hábito.
      </Text>
    </Text>
  )
}