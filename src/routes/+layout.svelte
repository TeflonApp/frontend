<script>
	// import main css file
	import '../app.css'

	// import icons from assets folder
	import closeIcon from '$lib/assets/close.png'
</script>

<div>
	<section class="flex items-center">
		<h1>Teflon</h1>
		<button>Login</button>
		<nav class="flex flex-col">
			<button class="w-5 h-5">
				<img src={closeIcon} alt="Close nav menu icon" />
			</button>
			<a href="/">Home</a>
			<a href="/download">Download</a>
			<a href="/support">Support</a>
			<a href="/faq">Faq</a>
			<a href="/company">Company</a>
		</nav>
	</section>
</div>
