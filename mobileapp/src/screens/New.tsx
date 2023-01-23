import { useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";
import { Feather } from '@expo/vector-icons'
import colors from "tailwindcss/colors";

import { api } from '../lib/axios'

const availableWeekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
    ]

export function New(){


    const [title, setTitle] = useState('')
    const [weekDays, setWeekDays] = useState<number[]>([])

    function handleToggleWeekDay(weekDayIndex: number){
        if(weekDays.includes(weekDayIndex)){
            setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
        }else{
            setWeekDays(prevState => [...prevState, weekDayIndex])
        }
    }

    async function handleCreateNewHabit(){
        try{
            if(!title.trim() || weekDays.length === 0){
                Alert.alert('Novo Hábito', 'Informe o nome do novo hábito e defina uma periodicidade.')
            }
            await api.post('/habits', { title, weekDays})
            
            setTitle('')
            setWeekDays([])

             Alert.alert('Novo Hábito', 'Hábito criado sucesso!')

        }catch(error){
             Alert.alert('Ops', 'Não foi possível criar o novo hábito.')
            console.log(error)
        }
    }

    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}    
            >
                <BackButton />

                <Text className="mt-6 text-white font-extrabold text-3xl">
                    Criar hábito
                </Text>
                <Text className="mt-6 text-white font-semibold text-base">
                    Qual o seu comprometimento?
                </Text>

                <TextInput
                    className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-green-600" 
                    placeholder="Exercícios, dormir bem, etc..."    
                    placeholderTextColor={colors.zinc[400]}
                    onChangeText={setTitle}
                    value={title}
                />

                <Text className="font-semibold mt-4 mb-3 text-white text-base">
                    Qual a recorrência?
                </Text>
                {
                    availableWeekDays.map((weekDay, index) => (
                        <CheckBox
                            key={weekDay}
                            title={weekDay} 
                            checked={weekDays.includes(index)}
                            onPress={() => handleToggleWeekDay(index)}
                        />
                    ))
                }

                <TouchableOpacity
                    className="w-full h-16 flex-row items-center justify-center bg-green-600 rounded-md mt-5"
                    activeOpacity={0.7}
                    onPress={handleCreateNewHabit}
                >
                    <Feather
                        name="check"
                        size={20}
                        color={colors.white}
                    >
                        <Text
                            className="font-semibold text-base text-white ml-2"
                        >
                            Confirmar
                        </Text>
                    </Feather>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}