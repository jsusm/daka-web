import { LucideSearch, LucideShoppingCart, LucideUser } from "lucide-react";
import Logo from "@/assets/images/logoDaka.webp"
import Image from "next/image";

export default function Header() {
	return (
		<header className="bg-[#ffdd00]">
			<div className="flex items-center h-20 justify-between mx-auto max-w-6xl px-4">
				<div>
					<Image alt="Logo de Tiendas Daka" className="h-16 w-auto" src={Logo} />
				</div>
				<div className="justify-end hidden sm:flex">
					<label htmlFor="search" className="w-lg h-11 bg-stone-50 flex items-center px-4 rounded-sm gap-4 border border-transparent">
						<input id="search" className="w-full outline-none text-base placeholder:text-stone-800/50" placeholder="Neveras, Lavadoras, Televisores ..." type="text" />
						<LucideSearch strokeWidth={3} className="text-blue-800" />
					</label>
				</div>
				<div className="flex items-center gap-4">
					<button className="h-12 flex items-center">
						<LucideShoppingCart className="text-blue-800" strokeWidth={3} />
					</button>
					<button className="h-12 flex items-center">
						<LucideUser className="text-blue-800" strokeWidth={3} />
					</button>
				</div>
			</div>
			<div className="flex justify-center px-4 sm:hidden">
				<label htmlFor="search" className="w-lg h-11 bg-stone-50 flex items-center px-4 rounded-sm gap-4 border border-transparent">
					<input id="search" className="w-full outline-none text-base placeholder:text-stone-800/50" placeholder="Neveras, Lavadoras, Televisores ..." type="text" />
					<LucideSearch strokeWidth={3} className="text-blue-800" />
				</label>
			</div>
			<nav className="flex justify-center py-2">
				<ul className="flex gap-y-1 gap-x-4 text-blue-800 font-medium font-sans flex-wrap sm:flex-nowrap justify-center px-4 text-sm sm:text-base">
					<li>
						Categorias
					</li>
					<li>
						Promociones
					</li>
					<li>
						Nuestras tiendas
					</li>
					<li>
						Contactanos
					</li>
				</ul>
			</nav>
		</header>
	)

}
