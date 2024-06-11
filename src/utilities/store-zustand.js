import create from 'zustand'

export const useCounterStore = create((set) => ({
    // state
    count:0,
    showText:'',
    //actions
    increment: ()       => set((state) => ({count: state.count + 1})),
    decrement: ()       => set((state) => ({count: state.count -1})),
    incByValue: (value) => set((state) => ({count: state.count + value})),
    changeText: (value) => set(() => ({showText:`increased by: ${value} `}))
}))