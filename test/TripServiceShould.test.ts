import "jest";
import UserNotLoggedInException from "../src/exception/UserNotLoggedInException";
import TripService from "../src/trip/TripService";
import UserSession from "../src/user/UserSession";

describe("The TripService", () => {
    let service: TripService;
    beforeEach(() => {
        jest.mock("../src/user/UserSession", _ => {
            return {
                __esModule: true,
                default: {
                    getLoggedUser: jest.fn(() => null)
                }
            }
        });
        service = new TripService;
        console.log(service.getTripsByUser(null))
    })

    it("adds 2 and 2", () => {
        expect(2 + 2).toBe(5);
    });

    it("given null user, throws UserNotLoggedInException", () => {
        expect(() => service.getTripsByUser(null)).toThrow(UserNotLoggedInException)
    });
});
