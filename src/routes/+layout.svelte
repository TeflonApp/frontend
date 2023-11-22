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
		<nav>
			<button>
				<img src={closeIcon} alt="Close nav menu icon" />
			</button>
			<link>
        Home
      </link>
      <link>
        Support
      </link>
      <link>
        Company
      </link>
		</nav>
	</section>
	<slot />
</div>
