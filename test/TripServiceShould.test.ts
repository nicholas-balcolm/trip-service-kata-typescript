import "jest";
import UserNotLoggedInException from "../src/exception/UserNotLoggedInException";
import TripService from "../src/trip/TripService";

describe("The TripService", () => {
    let service: TripService;
    beforeEach(() => {
        service = new TripService;
    })

    it("adds 2 and 2", () => {
        expect(2 + 2).toBe(5);
    });

    it("given null user, throws UserNotLoggedInException", ()=> {
       expect(() => service.getTripsByUser(null)).toThrow(UserNotLoggedInException)
    });
});
