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

    test("2. Get all user data in a list", () => {
        //Aqui invocas el codigo que vas a usar en tu app
        const user = UserService.create(1, "jorgealexis", "Alexis")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("jorgealexis")
        expect(userInfoInList[2]).toBe("Alexis")
        expect(userInfoInList[3]).toBe("Sin bio")
    } )

    test("3. Update username", () => {
        const user = UserService.create(1, "jorgealexis", "Alexis")
        UserService.updateUserUsername(user, "Alexiss")
        expect(user.username).toBe("Alexiss")
    } )

    


})

