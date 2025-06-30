import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const team = [
	{
		name: "Rajarshi Chatterjee",
		role: "Computer Science and Engineering",
		img: "/rajarshi.jpg",
		socials: [
			{
				icon: "fa-facebook-f",
				url: "https://www.facebook.com/rajarshi.chatterjee.5815",
			},
			{
				icon: "fa-instagram",
				url: "https://www.instagram.com/rajarshi_chatterjee_715/",
			},
			{ icon: "fa-linkedin", url: "https://linkedin.com" },
		],
	},
	{
		name: "Anish Seth",
		role: "Computer Science and Business Systems",
		img: "/anish.jpg",
		socials: [
			{ icon: "fa-facebook-f", url: "https://www.facebook.com/anish.seth.313" },
			{ icon: "fa-instagram", url: "https://www.instagram.com/anish_seth.ai/" },
			{
				icon: "fa-linkedin",
				url: "https://www.linkedin.com/in/anish-seth-202200290/",
			},
		],
	},
	{
		name: "Anushka Adak",
		role: "Computer Science and Business Systems",
		img: "/anushka.jpg",
		socials: [
			{
				icon: "fa-facebook-f",
				url: "https://www.facebook.com/profile.php?id=100089632175205",
			},
			{ icon: "fa-instagram", url: "https://www.instagram.com/anushka.adak/" },
			{
				icon: "fa-linkedin",
				url: "https://www.linkedin.com/in/anushka-adak-4b0a76287/",
			},
		],
	},
	{
		name: "Neelotpal Dey",
		role: "Computer Science and Data Science",
		img: "/neel.jpg",
		socials: [],
	},
];

export default function Team({ theme }) {
	return (
		<>
			<Navbar />
			<div
				className={`min-h-screen flex flex-col transition-colors duration-300 ${
					theme === "dark" ? "bg-gray-900" : "bg-[#E4F2CE] text-[#2E312A]"
				}`}
				style={
					theme === "light"
						? { backgroundColor: "#FFFFFF", color: "#000000" }
						: {}
				}
			>
				<section className="py-16 px-4 min-h-[70vh]">
					<h1 className="text-4xl font-bold text-center mb-12">
						AI-WARRIORS
					</h1>
					<div className="flex flex-wrap justify-center gap-8">
						{team.map((member) => (
							<div
								key={member.name}
								className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-72 p-6 flex flex-col items-center hover:scale-105 transition-transform"
							>
								<img
									src={member.img}
									alt={member.name}
									className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-200"
								/>
								<h3 className="text-2xl font-semibold mb-1">
									{member.name}
								</h3>
								<p className="mb-2">{member.role}</p>
								<div className="flex gap-4 mt-2">
									{member.socials.map((s) => (
										<a
											key={s.icon}
											href={s.url}
											target="_blank"
											rel="noopener noreferrer"
											className="hover:text-green-700 text-xl"
										>
											<i className={`fa ${s.icon}`}></i>
										</a>
									))}
								</div>
							</div>
						))}
					</div>
				</section>
				<Footer />
			</div>
		</>
	);
}
