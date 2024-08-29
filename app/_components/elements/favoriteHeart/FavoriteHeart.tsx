"use client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeIcon from "@mui/icons-material/Home";
import styles from "./favoriteHeart.module.css";
import { SvgIcon } from "@mui/material";

const FavoriteHeart = () => {
		return (
			<div className="flex w-[24px] h-[24px] cursor-pointer drop-shadow" onClick={()=>{alert("clicked")}}>
				<SvgIcon className="mr-1 drop-shadow">
					<defs>
						<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop
								offset="0%"
								style={{ stopColor: "#ff8abd", stopOpacity: 1 }}
							/>
							<stop
								offset="100%"
								style={{ stopColor: "#fce7ba", stopOpacity: 1 }}
							/>
							{/* <stop offset="0%" style={{ stopColor: "#fa7f7f", stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: "#fce7ba", stopOpacity: 1 }} /> */}
						</linearGradient>
					</defs>
					<path
						d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
						fill={"url(#grad1)"}
					/>
				</SvgIcon>
			</div>
		);
};

export default FavoriteHeart;