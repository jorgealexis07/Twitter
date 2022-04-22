const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {

    test('1. Create a new user using the UserService', () => {
        //Aqui invocas el codigo que vas a usar en tu app
        const user = new UserService.create(1, "jorgealexis", "Alexis")
        //Aqui validas los resultados de ese codigo.
        //Esta es una comparacion que va igualar el valor de la izquierda con el valor de la derecha (valor esperado)
        expect(user.username).toBe("jorgealexis")
        expect(user.name).toBe("Alexis")
        expect(user.id).toBe(1)
        expect(user.Bio).not.toBeUndefined()
        
    } )

})

