import React from "react";
import { IconButton } from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { actionTypes } from "../../actionTypes";
import { useDispatch } from "react-redux";

type ToggleWishlistButtonType = {
    wishlistFlag: boolean;
    courseId: number;
};

export const ToggleWishlistButton: React.FC<ToggleWishlistButtonType> = ({
    wishlistFlag,
    courseId,
}) => {
    const dispatch = useDispatch();
    const toggleWishlist = (): void => {
        dispatch({
            type: actionTypes.TOGGLE_WISHLIST_FLAG,
            courseId,
            isCourseWishedFor: !wishlistFlag,
        });
    };
    return wishlistFlag ? (
        <IconButton onClick={toggleWishlist} aria-label="remove from wishlist">
            <FavoriteBorderIcon fontSize="large" />
        </IconButton>
    ) : (
        <IconButton onClick={toggleWishlist} aria-label="add to wishlist">
            <FavoriteIcon color="secondary" fontSize="large" />
        </IconButton>
    );
};
