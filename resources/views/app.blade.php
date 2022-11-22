<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">
    
    {{-- style scroll --}}
    <style>
        /* For Firefox Browser */
        .myscroll {
            scrollbar-width: thin;
            scrollbar-color: rgb(6, 175, 110) #fff;
        }


        /* For Chrome, EDGE, Opera, Others */
        .myscroll::-webkit-scrollbar {
            width: 5px;
        }

        .myscroll::-webkit-scrollbar-track {
            background: #fff;
        }

        .myscroll::-webkit-scrollbar-thumb {
            background: rgb(4, 177, 162);
        }
    </style>
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased ">
    @inertia
</body>

</html>
