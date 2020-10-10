import { courseListType } from "../../../types";
import { setWishlistFlag } from "../setWishlistFlag";

const stateDataMock = ({ course1WishlistStatus = false }): courseListType => [
    {
        courseId: 0,
        courseName: "Erste Cavaletti-Übungen für das 4-jährigen Pferdes",
        wishlistFlag: false,
    },
    {
        courseId: 1,
        courseName: "Erste Ausbildung für das 3-jährige Pferdes",
        wishlistFlag: course1WishlistStatus,
    },
    {
        courseId: 2,
        courseName: "Handarbeit in der klassischen Ausbildung’",
        wishlistFlag: true,
    },
];

describe("data manipulator action test: toggle wishlist", () => {
    it("should throw when not receiving a courseId", () => {
        expect(() => setWishlistFlag({ state: stateDataMock({}) })).toThrow();
    });
    it("should change the wishlist state of the course with the provided id", () => {
        const expected = stateDataMock({ course1WishlistStatus: true });
        const actual = setWishlistFlag({
            state: stateDataMock({}),
            courseId: 1,
        });
    });
});
