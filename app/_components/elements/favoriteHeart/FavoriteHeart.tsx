"use client";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeIcon from "@mui/icons-material/Home";

function FavoriteHeart() {
    const liked = () => {
        alert("liked")
    }
    return (
        <button onClick={liked} className="drop-shadow">
            <div
                className="bg-gradient-to-r from-pink-400 to-yellow-300"
                style={{
                    WebkitMaskImage:
                        "url(data:image/svg+xml;base64," +
                        btoa(
                        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"/></svg>'
                        ) +
                        ")",
                    width: "24px",
                    height: "24px",
                }}
            ></div>
        </button>
    );
}

export default FavoriteHeart;
