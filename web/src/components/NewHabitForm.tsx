import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "../lib/axios"

const availableWeekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
]

export function NewHabitForm(){

    const [title, setTitle ] = useState('')
    const [weekDays, setWeekDays] = useState<number[]>([])

    
    async function createNewHabit(event: FormEvent ){
        event.preventDefault()

        if(!title || weekDays.length === 0){
            return
        }

        await api.post('habits', {
            title,
            weekDays
        })

        setTitle('')
        setWeekDays([])
    }

    function handleToggleWeekDay(weekDay: number){
        if(weekDays.includes(weekDay)){
            const weekDaysWithRemovedOne = weekDays.filter(day => day != weekDay)
            setWeekDays(weekDaysWithRemovedOne)
        }else{
            const weekDaysWithAddedOne = [...weekDays, weekDay]
            setWeekDays(weekDaysWithAddedOne)
        }
    }

    return (
        <form
            onSubmit={createNewHabit}    
            className="w-full flex flex-col mt-6"
        >
            <label htmlFor="title" className="font-semibold leading-tight">
                Qual o comprometimento?
            </label>
            <input
                type="text"
                id="title"
                placeholder="Ex: Exercícios, tomar água..."
                autoFocus
                value={title}
                onChange={event => setTitle(event.target.value) }
                className="p-4 rounded-lg mt-3 mb-1 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-800 focus:ring-offset-2 focus:ring-offset-zinc-900"
            />
            <label htmlFor="" className="mt-3 font-semibold leading-tight">
                Qual a recorrência?
            </label>

            <div className='flex flex-col gap-2 mt-3'>
                {
                    availableWeekDays.map((weekDay, index) => {
                        return (
                             <Checkbox.Root
                                key={weekDay}
                                onCheckedChange={() => handleToggleWeekDay(index)}
                                className="flex items-center gap-3 group focus:outline-none"
                                checked={weekDays.includes(index)}
                                >
                                    <div
                                        className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 transition-colors group-focus:ring-2 group-focus:ring-violet-800 focus:ring-offset-2 focus:ring-offset-background"
                                    >
                                        <Checkbox.Indicator>
                                        <Check size={20} className="text-white" />
                                        </Checkbox.Indicator>
                                    </div>
                                    <span className="text-white leading-tight">
                                        { weekDay }
                                    </span>
                                </Checkbox.Root>
                        )
                    })
                }
            </div>

            <button
                type="submit"
                className="mt-4 rounded-lg font-semibold gap-3 bg-green-600 hover:bg-green-500 flex justify-center items-center p-4 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
                <Check size={20} weight="bold" />
                Confirmar
            </button>
        </form>
    )
}