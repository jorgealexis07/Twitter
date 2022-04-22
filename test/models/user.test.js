const User = require('./../../app/models/user')

describe("Unit Test for User class", () => {
    test('Create an User object', () => {
        //Aqui invocas el codigo que vas a usar en tu app
        const user = new User(1, "jorgealexis", "Alexis", "Bio")

        //Aqui validas los resultados de ese codigo.
        //Esta es una comparacion que va igualar el valor de la izquierda con el valor de la derecha (valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("jorgealexis")
        expect(user.name).toBe("Alexis")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    } )
})