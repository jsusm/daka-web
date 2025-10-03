export default function Footer() {
	return (
		<footer className="bg-blue-900 text-white">
			<div className="mx-auto max-w-6xl px-4 py-12">
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
					<div>
						<h3 className="text-lg font-bold">About Us</h3>
						<ul className="mt-4 space-y-2">
							<li><a href="#" className="hover:underline">Our Story</a></li>
							<li><a href="#" className="hover:underline">Careers</a></li>
							<li><a href="#" className="hover:underline">Press</a></li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-bold">Customer Service</h3>
						<ul className="mt-4 space-y-2">
							<li><a href="#" className="hover:underline">Contact Us</a></li>
							<li><a href="#" className="hover:underline">FAQs</a></li>
							<li><a href="#" className="hover:underline">Shipping & Returns</a></li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-bold">Categories</h3>
						<ul className="mt-4 space-y-2">
							<li><a href="#" className="hover:underline">TVs</a></li>
							<li><a href="#" className="hover:underline">Refrigerators</a></li>
							<li><a href="#" className="hover:underline">Air Fryers</a></li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-bold">Follow Us</h3>
						<ul className="mt-4 space-y-2">
							<li><a href="#" className="hover:underline">Facebook</a></li>
							<li><a href="#" className="hover:underline">Twitter</a></li>
							<li><a href="#" className="hover:underline">Instagram</a></li>
						</ul>
					</div>
				</div>
				<div className="mt-12 border-t border-blue-700 pt-8 text-center">
					<p>&copy; {new Date().getFullYear()} Daka. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
