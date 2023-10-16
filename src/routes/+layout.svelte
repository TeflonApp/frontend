<script>
    import "../app.css"
</script>
<body class="bg-background-color w-screen h-screen text-text-color">
    <nav class="flex w-4/5 justify-between items-center mx-auto py-8 mb-10">
        <h1 class="text-5xl flex items-center">Teflon</h1>
        <div class="flex justify-between w-1/2">
            <p>Download</p>
            <p>Premium</p>
            <p>Discover</p>
            <p>Safety</p>
            <p>Support</p>
            <p>Blog</p>
            <p>Careers</p>
        </div>
        <div>
            <button>Login</button>
        </div>
    </nav>
    <slot />
</body>