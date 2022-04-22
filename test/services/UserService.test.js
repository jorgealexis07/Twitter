const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {

    test('1. Create a new user using the UserService', () => {
        //Aqui invocas el codigo que vas a usar en tu app
        const user = UserService.create(1, "jorgealexis", "Alexis")
        expect(user.username).toBe("jorgealexis")
        expect(user.name).toBe("Alexis")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()  
    } )

})

