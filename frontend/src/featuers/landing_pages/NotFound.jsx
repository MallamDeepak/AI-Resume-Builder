import React, { memo } from "react";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<main className="min-h-screen flex items-center justify-center bg-white" role="main">
			<section className="text-center" aria-labelledby="not-found-title">
				<h1 id="not-found-title" className="text-6xl font-bold">404</h1>
				<p className="mt-4 text-lg">Page not found.</p>
				<Link to="/" className="mt-6 inline-block text-blue-600 underline">Go home</Link>
			</section>
		</main>
	);
}

export default memo(NotFound);

