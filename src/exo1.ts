export const exo1 = () => {
    const a = 5
    const b = 1

    const message1 = a>=Math.PI? 'a est supérieur à Pi' : 'a est inférieur à Pi'
    const message2 = b>=Math.PI? 'b est supérieur à Pi' : 'b est inférieur à Pi'
    const message3 = a>b? 'a est plus grand que b' : 'a est plus petit que b'
    console.log(message1)
    console.log(message2)
    console.log(message3)
};