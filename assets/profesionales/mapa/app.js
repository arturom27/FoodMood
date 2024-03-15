
        
        var map;
        var sidebar = document.getElementById('sidebar');
        var sidebarOpen = false;
        var userPosition = null;

        var profesionales = [
            {
                nombre: "PSICO MECHITA",
                direccion: "Benizar 3610, Sevilla, 21378 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: 123-456-7890",
                    whatsapp: "https://api.whatsapp.com/send?phone=1234567890",
                    paginaWeb: "https://www.psico-mechita.com",
                    correo: "psicomechita@example.com"
                },
                foto: "https://via.placeholder.com/150", // URL de la foto
                coordenadas: [32.6207938, -115.3744198] // Latitud y longitud
            },
            {
                nombre: "Nutriclub Palaco",
                direccion: "Av. San Pedro Mezquital, Elizaura, 21399 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526861240617",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861240617",
                    correo: "nutrinutre@example.com"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipPtTomSYD7rXNkYkXHmOzwzt4L0isrr-dAMVQ2W=w408-h306-k-no", // URL de la foto
                coordenadas: [32.6091514, -115.4128262] // Latitud y longitud
            },
            {
                nombre: "Club De Terapia Gurdjieff",
                direccion: "Rio hondo y, Octava 661, 21390 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526862632291",
                    whatsapp: "https://api.whatsapp.com/send?phone=6862632291",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=zS6R8RF_B_kIAN-fKkgDXQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=181.74112&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.5968888, -115.3905797] // Latitud y longitud
            },
            {
                nombre: "Psicólogo Jesús Rangel García",
                direccion: "Calle 7 y Rio Suchiate #610, González Ortega, 21397 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526863189886",
                    whatsapp: "https://api.whatsapp.com/send?phone=6863189886",
                    paginaWeb: "https://centropsicologicoclinico.negocio.site/?utm_source=gmb&utm_medium=referral",
                    correo: "No tiene"
                },
                foto: "https://lh3.googleusercontent.com/p/AF1QipNb4_E8ii1yDER7O9HrsEylBoXzvtDMP_Grm4dj=w960-h960-n-o-v1", // URL de la foto
                coordenadas: [32.5953874, -115.39160439999999] // Latitud y longitud
            },
            {
                nombre: "Cip Matteo",
                direccion: "Río Usumacinta 610-680, Haro Barnet, 21390 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526861449623",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861449623",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=1JY3Ui94m-bd1HdaIXg7Cw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=241.42665&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.5962086, -115.3914339] // Latitud y longitud
            },
            {
                nombre: "Psicóloga Viridian Olvera",
                direccion: "Palmar de Las Islas 341, Villas del Palmar, 21376 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526862107826",
                    whatsapp: "https://api.whatsapp.com/send?phone=6862107826",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "psicologa.viridianolvera@gmail.com"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=zS6R8RF_B_kIAN-fKkgDXQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=181.74112&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6224698,-115.3915852] // Latitud y longitud
            },
            {
                nombre: "Psicología Infantil | Multi-Aprendiz | Especialista en Trastornos del Neurodesarrollo",
                direccion: "Río Mizantla 2519, Nuevo Mexicali, 21399 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526864303320",
                    whatsapp: "https://api.whatsapp.com/send?phone=6864303320",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "multiaprendiz.desarrollo@gmail.com"
                },
                foto: "https://lh6.googleusercontent.com/iwtf-Y12dw63XyxOms65u65_InmdO7rmNg5tvYNDMhNals257gDC8cSowBNaCg9tGADbmcFsNhiadjhod6NyfFPyNzY6AB4w8W_W7oiziDeYiOLOId5WUENGRx2It5Tzdg=w1280", // URL de la foto
                coordenadas: [32.612494,-115.395203] // Latitud y longitud
            },
            {
                nombre: "Psicoterapeuta Irma Moreno",
                direccion: "Tlalnepantla 999, Villa Verde, 21395 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: No tiene",
                    whatsapp: "https://api.whatsapp.com/send?phone=",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=zLjS4i2t5N0B_E6xlS3fpw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=256.0983&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.5996104, -115.3819227] // Latitud y longitud
            },
            {
                nombre: "Psic. Xochitl Zavala",
                direccion: "C. Río Concepción 3408, Villa Verde, 21395 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526866219138",
                    whatsapp: "https://api.whatsapp.com/message/HPGB4RXWEG6GB1?autoload=1&app_absent=0",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "psicologaxochitlzavala@gmail.com"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipNWQQA88DxWIlFkZZFtiFtWZGa6_kkeXEx7h8R3=w408-h457-k-no", // URL de la foto
                coordenadas: [32.6011025, -115.3803538] // Latitud y longitud
            },
            {
                nombre: "LOREM Lenguaje y Psicología - Nuevo Mexicali",
                direccion: "C. Novena y Río tecolutla 2999-4, Nuevo Mexicali, 21396 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526862632291",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861516287",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "lorem.mexicali@gmail.com"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=csyvF5fy4aq4NMhj_qtcFg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=246.93506&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6026141, -115.3890598] // Latitud y longitud
            },
            {
                nombre: "SanaMente",
                direccion: "Río Moctezuma 330, González Ortega, 21397 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526865626151",
                    whatsapp: "https://api.whatsapp.com/send?phone=6862632291",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=EA8q-WPGcBNea-FiJzUwqQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=219.3213&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.5937794, -115.3951529] // Latitud y longitud
            },
            {
                nombre: "Psiconstruye",
                direccion: "Río Lerma 1863, Valle Dorado, 21399 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526865902527",
                    whatsapp: "https://api.whatsapp.com/send?phone=6865902527",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=gBOFwygbUq-1EK4tpcF5xw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=52.0086&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6101031, -115.4081123] // Latitud y longitud
            },
            {
                nombre: "PADI Psicología Infantil",
                direccion: "Av. Valle de las Californias 1855, Fraccionamiento Misión de San Carlos Residencial, 21379 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526861844029",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861844029",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "psicologia.padi@gmail.com"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipMnsOmHyVfKIamHEZjdjd5XrfMN0tIWXmHhdJdq=s1080-k-no", // URL de la foto
                coordenadas: [32.616248, -115.408168] // Latitud y longitud
            },
            {
                nombre: "CAPID",
                direccion: "Hacienda Arenas 58, Villas del Colorado, 21395 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526863881819",
                    whatsapp: "https://api.whatsapp.com/send?phone=6863881819",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "centro_capid@outlook.com"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipP7AzOc8Aabrdgr0K4RICXh7342UBbtXFll3Q8I=w420-h240-k-no", // URL de la foto
                coordenadas: [32.5881652, -115.372492] // Latitud y longitud
            },
            {
                nombre: "Psicóloga Karen Durán",
                direccion: "Av.Loreto Ruiz y Aquiles Serdán,Local 4, 21395 Puebla, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526862807242",
                    whatsapp: "https://api.whatsapp.com/send?phone=6862807242",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh3.googleusercontent.com/p/AF1QipMolczBq7aVT0m_fhPROdhhSpX8ElRTU6mdmdQ_=w1080-h608-p-no-v0", // URL de la foto
                coordenadas: [32.5968888, -115.3905797] // Latitud y longitud
            },
            {
                nombre: "CAIPP CENTRO DE ATENCIÓN INTEGRAL PSICOLOGÍCA Y PSICOPEDAGOGÍCA",
                direccion: "21386, Los Naranjos, 21386 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526864242388",
                    whatsapp: "https://api.whatsapp.com/send?phone=6864242388",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "psic.caipp@gmail.com"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=S_WuP1LVM3FeJqNP-T6msw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=292.10684&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.5873927, -115.440712] // Latitud y longitud
            },
            {
                nombre: "Terapsi",
                direccion: "C. Río Concepción 3408, Villa Verde, 21395 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526864061769",
                    whatsapp: "https://api.whatsapp.com/send?phone=6864061769",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipNWQQA88DxWIlFkZZFtiFtWZGa6_kkeXEx7h8R3=w408-h457-k-no", // URL de la foto
                coordenadas: [32.6011025, -115.3803538] // Latitud y longitud
            },
            {
                nombre: "Centro psicológico Instruye",
                direccion: "Atrisco, Benavente 900, Condesa, Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526861919040",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861919040",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=zS6R8RF_B_kIAN-fKkgDXQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=181.74112&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.5983204 -115.329406] // Latitud y longitud
            },
            {
                nombre: "Gerardo Díaz Psicólogo Mexicali",
                direccion: "De Lisboa 106 - 3, Villafontana, 21180 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526861144694",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861144694",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=dEzwEnqljU5rsiogBppObQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=340.9851&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6330748, -115.5024986] // Latitud y longitud
            },
            {
                nombre: "Psicologa Maria Fernanda Rojas Vazquez",
                direccion: "Av. Mineros 1800, Libertad, 21030 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526861564788",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861564788",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Oc-6HGHaWdVSlOAmz_2a7w&cb_client=search.gws-prod.gps&w=408&h=240&yaw=199.0661&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6508102, -115.4582994] // Latitud y longitud
            },
            {
                nombre: "PSICOLOGA ROSARIO HERRERA RANGEL",
                direccion: "Mar Blanco 30, Josué Molina, 21060 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526861916606",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861916606",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=7hu6sH4-FNZUZyuR5_lUJg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=177.09767&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6375507, -115.4794817] // Latitud y longitud
            },
            {
                nombre: "JOSE G. ANDALON S.",
                direccion: "Av. Yugoslavia 2849, Popular Nacionalista, 21165 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526861624819",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861624819",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh3.googleusercontent.com/gps-proxy/AMy85WIywItQJUU8pcnYHmmJ00pPbZSghfNl4ymu8_AB8X8lmZQIpn0EdQgOmYBHPqmrQsoC-yuQg2yc0ULVc8112d24HDgJWnuLxjJxYvnXOOOjGH4NHUluiWQG-qUYSRL49mgwFh_xR9JcNg7h_fv2oSYX1Ly1YUnXHOMFtJZerNO6kfuK9YBY_2pJZIyNIe4pOyY3Cw=w408-h726-k-no", // URL de la foto
                coordenadas: [32.6276362, -115.5228235] // Latitud y longitud
            },
            {
                nombre: "INTRO Centro Psicológico Infantil Integral",
                direccion: "Av Hermenegildo Galeana 964, Prohogar, 21040 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526866067838",
                    whatsapp: "https://api.whatsapp.com/send?phone=6866067838",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=h4NwB1NIgaXoOjCQuw7gmw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=148.889&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.652265, -115.4318717] // Latitud y longitud
            },
            {
                nombre: "Club De Terapia Gurdjieff",
                direccion: "Rio hondo y, Octava 661, 21390 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526862632291",
                    whatsapp: "https://api.whatsapp.com/send?phone=+526862632291",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=zS6R8RF_B_kIAN-fKkgDXQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=181.74112&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.5968888, -115.3905797] // Latitud y longitud
            },
            {
                nombre: "Hemisferios Psicología Integral",
                direccion: "C. I, Zaragoza, 21370 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526865246300",
                    whatsapp: "https://api.whatsapp.com/send?phone=6865246300",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "hemisferios.psicologia@gmail.com"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=pRxgIcxyA3fW93UD9Bn6NA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=252.32953&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6613936, -115.4619958] // Latitud y longitud
            },
            {
                nombre: "Paulina Chapa",
                direccion: "C. A 235, Col, Segunda, 21100 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526862413573",
                    whatsapp: "https://api.whatsapp.com/send?phone=6862413573",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipPkP33CEcqGmdHWST_vj-dM6LqevChV6Ccf60v0=w555-h240-k-no", // URL de la foto
                coordenadas: [32.663537, -115.4800183] // Latitud y longitud
            },
            {
                nombre: "Asesoria Psicológica (Mas que una Asesoría es una solución)",
                direccion: "Diamante, Nigeria Poniente, Privada Villanova Diamante 1453, Villanova, 21307 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526865678117",
                    whatsapp: "https://api.whatsapp.com/send?phone=6865678117",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipNHSIPlbvwlwuF2C6-_VAEM-8nwX5a7ynd4jAOT=w408-h408-k-no", // URL de la foto
                coordenadas: [32.6212428, -115.4968017] // Latitud y longitud
            },
            {
                nombre: "Centro Psicológico de Educación Especial y Emocional",
                direccion: "21340, Fernando Amilpa 1998, 21340 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526863501572",
                    whatsapp: "https://api.whatsapp.com/send?phone=6863501572",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "cipeyemexicali@gmail.com"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipODK8yemkzk42jMOVBuMFK20yUjV33DC4nlyGvd=w426-h240-k-no", // URL de la foto
                coordenadas: [32.613786, -115.478566] // Latitud y longitud
            },
            {
                nombre: "CENTRO PSICOLÓGICO PARA LA FAMILIA",
                direccion: "C. B 248-5, Segunda, 21100 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526864120291",
                    whatsapp: "https://api.whatsapp.com/send?phone=6864120291",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipMPRSS00vITVEaqpJxohIIPQjXb2nSBOCE5ETfJ=w408-h306-k-no", // URL de la foto
                coordenadas: [32.6633486, -115.4781038] // Latitud y longitud
            },
            {
                nombre: "SATI Centro de Consultas",
                direccion: "Av. Junípero Serra 1344, Vista Hermosa, 21225 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526864338286",
                    whatsapp: "https://api.whatsapp.com/send?phone=6864338286",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipOgc5j0rBoTZWBn24kdq8LpFpcPFCx5qire2cfd=w426-h240-k-no", // URL de la foto
                coordenadas: [32.6568487, -115.4208774] // Latitud y longitud
            },
            {
                nombre: "Psicoterapeuta Abraham Popocatl",
                direccion: "Av. Plateros y Calle K 1901-D, Burócratas, 21020 Mexicali, B.C. ",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526861867036",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861867036",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipPOF0IHXnd_WqlPZjhmYHGfj9tJGZowFUIPtPap=w408-h272-k-no", // URL de la foto
                coordenadas: [32.6570145, -115.457861] // Latitud y longitud
            },
            {
                nombre: "Psicólogo Efraín Molina",
                direccion: "C. G 650-5, Segunda, 21100 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526869465633",
                    whatsapp: "https://api.whatsapp.com/send?phone=6869465633",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipNsg9PeHfmctn92zFm9EK5sj_IglH6dNK_XLi2j=w533-h240-k-no", // URL de la foto
                coordenadas: [32.6586564, -115.4663407] // Latitud y longitud
            },
            {
                nombre: "Consultorio Psicóloga Melissa Ojeda",
                direccion: "Cataratas Iguazú 17, Sta Mónica, 21339 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526861703164",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861703164",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "psic.melissaojeda@gmail.com"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipOFZ3Tg_jTYGTtNehmX4l1_uVa7IksZdp5H4BPS=w630-h240-k-no", // URL de la foto
                coordenadas: [32.6180699, -115.4915204] // Latitud y longitud
            },
            {
                nombre: "Psicóloga Lupita Estrada",
                direccion: "Carroceros 1690-local 3, Industrial, 21010 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526861863360",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861863360",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=p_OxU3UrekyMcDchKAYhEQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=153.45802&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6534478, -115.4615898] // Latitud y longitud
            },
            {
                nombre: "Psicólogo FONSECA",
                direccion: "C. B 248-1, Segunda, 21100 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526861571337",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861571337",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipPSz4IGba47NAAvytHvhhizffF_dOQ5R9V0HErJ=w408-h306-k-no", // URL de la foto
                coordenadas: [32.6633579, -115.4779898] // Latitud y longitud
            },
            {
                nombre: "Psicóloga Paola Olmos",
                direccion: "",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: ",
                    whatsapp: "https://api.whatsapp.com/send?phone=",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "info@psicologapaolaolmos.com"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipOoZyEY5JPm20to1N47GY0E5L0VCohKtp1Fu9VO=w408-h408-k-no", // URL de la foto
                coordenadas: [] // Latitud y longitud
            },
            {
                nombre: "Carlos Andrés",
                direccion: "Calz. Cetys No. 2901, Rivera, 21225 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526861572161",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861572161",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png", // URL de la foto
                coordenadas: [32.6546551, -115.3878294] // Latitud y longitud
            },
            {
                nombre: "Lic. Xochitl Ana Lilia López Chávez, Psicólogo",
                direccion: "C. Novena 1321, Residencial Verona, Plutarco Elías Calles, 21376 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: ",
                    whatsapp: "https://api.whatsapp.com/send?phone=",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=AyD9iT8QsRdkmWH6V-Z91A&cb_client=search.gws-prod.gps&w=408&h=240&yaw=142.80801&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6453559, -115.3809265] // Latitud y longitud
            },
            {
                nombre: "Asesoría Psicológica E Hipnopterapeitica",
                direccion: "San Pedro 53, Fraccionamiento San Pedro, 21259 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526869050282",
                    whatsapp: "https://api.whatsapp.com/send?phone=6869050282",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png", // URL de la foto
                coordenadas: [32.6508887, -115.4087963] // Latitud y longitud
            },
            {
                nombre: "Rizo Rosales Arturo",
                direccion: "Mision San Diego 698 esquina Calle del Pozo Misión San Diego, Del Pozo 698 esquina, 21376 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526861104107",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861104107",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=3odooJiueG9mHVE2h4Gb6Q&cb_client=search.gws-prod.gps&w=408&h=240&yaw=252.7883&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6350194, -115.3884466] // Latitud y longitud
            },
            {
                nombre: "Psicóloga Marissa",
                direccion: "Av. Misión de Zuni 376, Misión Santo Domingo, 21298 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526862016515",
                    whatsapp: "https://api.whatsapp.com/send?phone=6862016515",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipNnlCuxbHYJu1pDb8JITSn8BWyIsLVYqtde7aD0=w408-h306-k-no", // URL de la foto
                coordenadas: [32.6346285, -115.4049791] // Latitud y longitud
            },
            {
                nombre: "Psic. Cindy Lucero",
                direccion: "Av. de los Magistrados 199, Burócratas Federales, 21298 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526862408330",
                    whatsapp: "https://api.whatsapp.com/send?phone=6862408330",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=eq0PaiKWVhfOYKrUmdCWnA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=312.4301&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6360798, -115.4091359] // Latitud y longitud
            },
            {
                nombre: "Psic. Patricia Jaime Encinas",
                direccion: "C. Río Fuerte 600, Independencia, 21290 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526865684709",
                    whatsapp: "https://api.whatsapp.com/send?phone=6865684709",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipMYFJ9iAflYPBlJgmupmsBNTUk_ob6aqWhxQOw6=w427-h240-k-no", // URL de la foto
                coordenadas: [32.63687, -115.438171] // Latitud y longitud
            },
            {
                nombre: "Ezequiel Juárez, Psicólogo",
                direccion: "Av Francisco Javier Mina 699, Independencia, 21290 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526861700148",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861700148",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipNvqBDaG2qP7vkgfDdsfgHSWjykkkIi2Gtp1Vm0=w408-h408-k-no", // URL de la foto
                coordenadas: [32.6376777, -115.4370719] // Latitud y longitud
            },
            {
                nombre: "Psicología Industrial Aplicada",
                direccion: "Av. Gral. Lucio Blanco 472, Sta Teresa, 21270 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526865684370",
                    whatsapp: "https://api.whatsapp.com/send?phone=6865684370",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=SLkD3XswrKWLdOq8QbQvug&cb_client=search.gws-prod.gps&w=408&h=240&yaw=173.65544&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.640991, -115.4406622] // Latitud y longitud
            },
            {
                nombre: "Psicóloga Irene Villegas",
                direccion: "Poder Legislativo 1201, Lázaro Cárdenas, 21370 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: ",
                    whatsapp: "https://api.whatsapp.com/send?phone=",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=DOKLwK9x2NlAtgowwET6Yg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=5.7136393&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6234815, -115.4251225] // Latitud y longitud
            },
            {
                nombre: "Dra. Gloria Andrea Trejo Sández",
                direccion: "Plaza Arcoiris, Calz. Manuel Gómez Morín 1247-Interior 10, Xochicali, 21353 Mexicali, B.C.",
                especialidad: "Psicólogo",
                contacto: {
                    telefono: "Teléfono: +526865536750",
                    whatsapp: "https://api.whatsapp.com/send?phone=6865536750",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=nbuUtsUtG3_7HO3ZkU2MXA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=10.737463&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.60098, -115.453778] // Latitud y longitud
            },
            {
                nombre: "Nutriologo Mexicali - ELYA Nutrition Center",
                direccion: "Av Reforma 1022-Segundo Piso, entre Calle B, Segunda, 21000 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526863929301",
                    whatsapp: "https://api.whatsapp.com/send?phone=6863929301",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipNTrj0xzpLuLONDeM6PLie1GvE82dhvL2wsy-jc=w408-h544-k-no", // URL de la foto
                coordenadas: [32.6641038, -115.4765648] // Latitud y longitud
            },
            {
                nombre: "Protein Club Checoslovaquia",
                direccion: "Av. Checoslovaquia 2674, Conjunto Urbano Orizaba, 21160 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526862324019",
                    whatsapp: "https://api.whatsapp.com/send?phone=+526862324019",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipNks-9yC7r2cs6tVaMzj9c6tbwFMGdJOdXtpAMn=w408-h544-k-no", // URL de la foto
                coordenadas: [32.6378667, -115.5180659] // Latitud y longitud
            },
            {
                nombre: "Mtra. Itzel Anahi Rascon Acuña, Nutricionista",
                direccion: "PENDIENTE, Baja California, 00000 Baja California, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: ",
                    whatsapp: "https://api.whatsapp.com/send?phone=",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=DkMj4jWbhnXlfLRPdNn47g&cb_client=search.gws-prod.gps&w=408&h=240&yaw=171.08307&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6529461 -115.5162858] // Latitud y longitud
            },
            {
                nombre: "LN.Jacqueline Valle Islas",
                direccion: "Blvd. Lázaro Cárdenas 1201, Villafontana, 21180 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526861402000",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861402000",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipMuzRlMptCqkF8G8I9VZXg6_pAs3UfugQP35lyB=w408-h408-k-no", // URL de la foto
                coordenadas: [32.6241571, -115.4970928] // Latitud y longitud
            },
            {
                nombre: "Nutrición Con Victoria",
                direccion: "21050, Av. Quintana Roo #460, Nueva Esperanza, 21050 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526862689317",
                    whatsapp: "https://api.whatsapp.com/send?phone=6862689317",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Rl6vTqST0pUF5l6PuLTt9Q&cb_client=search.gws-prod.gps&w=408&h=240&yaw=5.485678&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6393615, -115.4867791] // Latitud y longitud
            },
            {
                nombre: "Nutrióloga Karelly Díaz de León VERYEL",
                direccion: "Av los dorados 1300, Villanova, 21307 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526862333548",
                    whatsapp: "https://api.whatsapp.com/send?phone=6862333548",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipOtpCNFgAZqTC1gw5ZVOipvJwjtPPNBWM8f_l_5=w426-h240-k-no", // URL de la foto
                coordenadas: [32.6173873, -115.494529] // Latitud y longitud
            },
            {
                nombre: "Club de Nutrición Estefani",
                direccion: "La Galatea #288, Entre Monarcas y Paseo del Real, casa de dos pisos, Villas del Rey, 21353 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526863333570",
                    whatsapp: "https://api.whatsapp.com/send?phone=6863333570",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=ZWKOFNuYIPPDS8JkhdtepA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=203.00891&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.606947, -115.483852] // Latitud y longitud
            },
            {
                nombre: "Nutriologa Ma del Pilar Sanchez. (Nutrición Clínica)",
                direccion: "C. B 248, Segunda, 21100 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526865541254",
                    whatsapp: "https://api.whatsapp.com/send?phone=6865541254",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=pZFDUzoxm_KmmggNSmn3Rw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=274.27905&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6633486 -115.4781038] // Latitud y longitud
            },
            {
                nombre: "Isela Gasca Nutricionista",
                direccion: "Avenida madero 1053-7 segunda seccion , Mexico, 21100 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526862210888",
                    whatsapp: "https://api.whatsapp.com/send?phone=6862210888",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=0YroAxwnV2kU_Jpzltfxzg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=341.22934&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.665789, -115.4768885] // Latitud y longitud
            },
            {
                nombre: "Cien Centro de Nutrición",
                direccion: "Av Reforma 949-5, Segunda, 21100 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526865556020",
                    whatsapp: "https://api.whatsapp.com/send?phone=6865556020",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Wub-3e3uU03lX2KiE8hlJA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=332.43817&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6641944, -115.47888] // Latitud y longitud
            },
            {
                nombre: "Nutriologo Mexicali - ELYA Nutrition Center",
                direccion: "Av Reforma 1022-Segundo Piso, entre Calle B, Segunda, 21000 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526863929301",
                    whatsapp: "https://api.whatsapp.com/send?phone=6863929301",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipNTrj0xzpLuLONDeM6PLie1GvE82dhvL2wsy-jc=w408-h544-k-no", // URL de la foto
                coordenadas: [32.6641038, -115.4765648] // Latitud y longitud
            },
            {
                nombre: "Sandra Quiñones-Nutrición Clínica",
                direccion: "C. E 133, Segunda, 21100 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526861402004",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861402004",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=A0jpQ4SVmvqQdkQfcDnkUw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=65.694435&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6654144, -115.4710186] // Latitud y longitud
            },
            {
                nombre: "Atención Nutricional",
                direccion: "C. B 199, Nueva Esperanza, 21100 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526861225730",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861225730",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipN_WFatcsSA9PQe8qXhEiLiamrySWR-7xGicjiK=w426-h240-k-no", // URL de la foto
                coordenadas: [32.6643629, -115.4777867] // Latitud y longitud
            },
            {
                nombre: "Nutrióloga Dania Morales",
                direccion: "Avenida madero 998 Colonia nueva, Segunda, 21100 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526862621750",
                    whatsapp: "https://api.whatsapp.com/send?phone=6862621750",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=qiyqAD-agJ0I63hyDLt7wg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=183.79263&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6651925, -115.4783298] // Latitud y longitud
            },
            {
                nombre: "Nutricionista Rubí Ortega",
                direccion: "Carroceros 1789, Burócratas, 21010 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526863456310",
                    whatsapp: "https://api.whatsapp.com/send?phone=6863456310",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=RllUlEaQ3l3YjE4O9hj8dA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=12.837855&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6539677, -115.4593115] // Latitud y longitud
            },
            {
                nombre: "Clínica de Nutrición Funcional",
                direccion: "Av. Alvaro Obregon 1047, Segunda, 21100 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526865784907",
                    whatsapp: "https://api.whatsapp.com/send?phone=6865784907",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=BLTPf-11A-xJTeCNynnKtw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=1.0606062&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6629967, -115.4766106] // Latitud y longitud
            },
            {
                nombre: "Mtro. Fernando Salvat, Nutricionista",
                direccion: "Av. Mariano Arista 1433, Nueva, 21100 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: ",
                    whatsapp: "https://api.whatsapp.com/send?phone=",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=6HvAg95ZkX_FP1woFDGuXA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=359.15533&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6596377, -115.4675946] // Latitud y longitud
            },
            {
                nombre: "Centro De Nutricion Y Salud",
                direccion: "Cristóbal Colón 1914, Nueva, 21100 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526862426670",
                    whatsapp: "https://api.whatsapp.com/send?phone=6862426670",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=3TEYR9PoQOVU1TcEeXFeLQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=157.349&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6674578, -115.4586214] // Latitud y longitud
            },
            {
                nombre: "Club Nutrición Juan Luna",
                direccion: "Avenida Ayuntamiento 1489, Lázaro Cárdenas, 21370 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526862311959",
                    whatsapp: "https://api.whatsapp.com/send?phone=6862311959",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=M3xhMvnGq5LoKKXp1FWR_A&cb_client=search.gws-prod.gps&w=408&h=240&yaw=312.90533&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6211451, -115.4189476] // Latitud y longitud
            },
            {
                nombre: "Vitta club herbalife HR",
                direccion: "CALLE VILLA OBREGON Y RIO CONGO 1610, Hacienda del Río, 21399 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526861240436",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861240436",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipOJspmi3LsNMCt9NDahl6TBdQi8P95KVSLsURW5=w426-h240-k-no", // URL de la foto
                coordenadas: [32.6129963, -115.3774049] // Latitud y longitud
            },
            {
                nombre: "NUTREE",
                direccion: "Ola Verde 244, Hacienda del Río, 21399 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526863685036",
                    whatsapp: "https://api.whatsapp.com/send?phone=6863685036",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipPwLIYIaorC7e1bbCmx2-e5eIJ-OruFcepjVpjS=w408-h510-k-no", // URL de la foto
                coordenadas: [32.6088301, -115.3749815] // Latitud y longitud
            },
            {
                nombre: "NATUVIT NOVENA",
                direccion: "C. Novena 1769, Puerta del Sol, 21376 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526862842028",
                    whatsapp: "https://api.whatsapp.com/send?phone=6862842028",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh5.googleusercontent.com/p/AF1QipPTlVXppUontT-sl2CnHASwuy7hBeRFUJhT-11g=w408-h407-k-no", // URL de la foto
                coordenadas: [32.6337586, -115.3850645] // Latitud y longitud
            },
            {
                nombre: "Smart Shakers",
                direccion: "calle Novena y Rio Bravo 2998, Local1, Vivienda Magisterial, 21399 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526863303403",
                    whatsapp: "https://api.whatsapp.com/send?phone=6863303403",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=iCWhS6CBLKhQ0TXKHG7q6w&cb_client=search.gws-prod.gps&w=408&h=240&yaw=211.66092&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6049234, -115.3890081] // Latitud y longitud
            },
            {
                nombre: "Martha Romo García Nutricionista",
                direccion: "Armenta y López 1021 Centro, 21399 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +529511716822",
                    whatsapp: "https://api.whatsapp.com/send?phone=9511716822",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=cto8kX1ofURBvcbVkf0X-Q&cb_client=search.gws-prod.gps&w=408&h=240&yaw=169.05644&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6027412, -115.393879] // Latitud y longitud
            },
            {
                nombre: "MÉDICO CONTROL DE PESO COLESTEROL",
                direccion: "C. Primera 1483, González Ortega, 21397 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526865610510",
                    whatsapp: "https://api.whatsapp.com/send?phone=6865610510",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://lh3.googleusercontent.com/gps-proxy/AMy85WJzdEnm5ct_gOw2eWYdQvxCXSV1AYuQW9RM0V4AxqffhrIyccyiq3BWRen6xT_G53v-X2Tm6iF2V6-BgGvYgVDyz-iGMopFf6Xf-BYO2VL2gKJmKYywIr3nMWyrQ_voDQPutzW8mIVCPwouVYISLZW5HOSSR4kI-GmG-77laPUxZXqXQAfppZxZKTbE41ryZ5pw3w=w427-h240-k-no", // URL de la foto
                coordenadas: [32.6020582, -115.3991815] // Latitud y longitud
            },
            {
                nombre: "Nutrióloga Laura Campos",
                direccion: "Av. Río Champotón Sur, González Ortega, 21397 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526862568188",
                    whatsapp: "https://api.whatsapp.com/send?phone=6862568188",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=HfFhaHqKXEAvEF93mTflMA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=49.577415&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.5944944, -115.3952736] // Latitud y longitud
            },
            {
                nombre: "IRTRO - Asesoría Nutricional",
                direccion: "José Santos Valdez 665, Fraccionamiento Villas San Ángel, 21255 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526862096359",
                    whatsapp: "https://api.whatsapp.com/send?phone=6862096359",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://maps.gstatic.com/tactile/pane/default_geocode-2x.png", // URL de la foto
                coordenadas: [32.6473802, -115.3860842] // Latitud y longitud
            },
            {
                nombre: "Nutriologa Rosa Maria Garcia",
                direccion: "Blvr. Venustiano Carranza 2598, Residencial Veredas del Sol, 21259 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: ",
                    whatsapp: "https://api.whatsapp.com/send?phone=",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Sfu_vY1DPp7uLGYtanbYvQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=280.7142&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6523482, -115.4011921] // Latitud y longitud
            },
            {
                nombre: "Gn-Nutrición",
                direccion: "C. Rio Presidio, Mártires de 1906, 21250 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526861567002",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861567002",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "gexole_19@hotmail.com"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=U9jWCdVUVijpHKmGhmZvfA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=217.24162&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6432258, -115.4238085] // Latitud y longitud
            },
            {
                nombre: "Miguel Castro Nutricion y Deporte Mexicali",
                direccion: "Av. Saltillo 466, Ex-Ejido Coahuila, 21360 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526863128787",
                    whatsapp: "https://api.whatsapp.com/send?phone=6863128787",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=o3xOxRU0j8pb-qmiozDmVQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=151.48479&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.626501, -115.4414202] // Latitud y longitud
            },
            {
                nombre: "Magdaleno P. Dulce Palmira Nutriologo",
                direccion: "Calz Independencia Local 3, Centro Cívico, 21100 Mexicali, B.C. ",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: ",
                    whatsapp: "https://api.whatsapp.com/send?phone=",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=BcX0GvI9hBQZHIIG-reeiQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=62.822197&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6391607, -115.4358021] // Latitud y longitud
            },
            {
                nombre: "Nutriologa Paloma O. Lomeli",
                direccion: "Av Pedro Moreno 735, Independencia, 21290 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526862600605",
                    whatsapp: "https://api.whatsapp.com/send?phone=6862600605",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Ui9ucuA5tmILBzCUyLCnCg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=30.356173&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6327334, -115.4360169] // Latitud y longitud
            },
            {
                nombre: "Nutrióloga Claudia Rivera",
                direccion: "Av Ignacio López Rayón 901, Independencia, 21290 Mexicali, B.C.",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: +526861981650",
                    whatsapp: "https://api.whatsapp.com/send?phone=6861981650",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=OxuuRbNrdWuKLLbA_vKBqw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=338.29236&pitch=0&thumbfov=100", // URL de la foto
                coordenadas: [32.6348996, -115.4318891] // Latitud y longitud
            },
            {
                nombre: "",
                direccion: "",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: ",
                    whatsapp: "https://api.whatsapp.com/send?phone=",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "", // URL de la foto
                coordenadas: [] // Latitud y longitud
            },
            {
                nombre: "",
                direccion: "",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: ",
                    whatsapp: "https://api.whatsapp.com/send?phone=",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "", // URL de la foto
                coordenadas: [] // Latitud y longitud
            },
            {
                nombre: "",
                direccion: "",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: ",
                    whatsapp: "https://api.whatsapp.com/send?phone=",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "", // URL de la foto
                coordenadas: [] // Latitud y longitud
            },
            {
                nombre: "",
                direccion: "",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: ",
                    whatsapp: "https://api.whatsapp.com/send?phone=",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "", // URL de la foto
                coordenadas: [] // Latitud y longitud
            },
            {
                nombre: "",
                direccion: "",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: ",
                    whatsapp: "https://api.whatsapp.com/send?phone=",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "", // URL de la foto
                coordenadas: [] // Latitud y longitud
            },
            {
                nombre: "",
                direccion: "",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: ",
                    whatsapp: "https://api.whatsapp.com/send?phone=",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "", // URL de la foto
                coordenadas: [] // Latitud y longitud
            },
            {
                nombre: "",
                direccion: "",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: ",
                    whatsapp: "https://api.whatsapp.com/send?phone=",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "", // URL de la foto
                coordenadas: [] // Latitud y longitud
            },
            {
                nombre: "",
                direccion: "",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: ",
                    whatsapp: "https://api.whatsapp.com/send?phone=",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "", // URL de la foto
                coordenadas: [] // Latitud y longitud
            },
            {
                nombre: "",
                direccion: "",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: ",
                    whatsapp: "https://api.whatsapp.com/send?phone=",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "", // URL de la foto
                coordenadas: [] // Latitud y longitud
            },
            {
                nombre: "",
                direccion: "",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: ",
                    whatsapp: "https://api.whatsapp.com/send?phone=",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "", // URL de la foto
                coordenadas: [] // Latitud y longitud
            },
            {
                nombre: "",
                direccion: "",
                especialidad: "Nutricionista",
                contacto: {
                    telefono: "Teléfono: ",
                    whatsapp: "https://api.whatsapp.com/send?phone=",
                    paginaWeb: "https://arturom27.github.io/FoodMood/",
                    correo: "No tiene"
                },
                foto: "", // URL de la foto
                coordenadas: [] // Latitud y longitud
            },
            
            // Puedes agregar más profesionales aquí
        ];

// Establecer un fondo predeterminado para el contenedor del mapa
document.getElementById('map').style.backgroundColor = '#f0f0f0'; // Cambiar a cualquier color de fondo deseado

// Función para mostrar el mapa después de la carga completa
function mostrarMapaDespuesDeCargar() {
    document.getElementById('map').style.backgroundColor = 'transparent'; // Restaurar el fondo transparente
    document.getElementById('map').style.visibility = 'visible'; // Mostrar el mapa
}

// Inicializar el mapa y llamar a la función para mostrarlo después de cargar completamente
document.addEventListener('DOMContentLoaded', function () {
    initMap();
    map.on('load', mostrarMapaDespuesDeCargar); // Esperar a que el mapa se cargue completamente
});


        var circle = null; // Almacena la referencia al círculo de búsqueda anterior

        // Define un icono personalizado para los psicólogos
        var psicologoIcon = L.icon({
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/2732/2732589.png',
            iconSize: [32, 32], // Tamaño del icono
            iconAnchor: [16, 16], // Punto de anclaje del icono (la posición donde se encuentra el marcador)
            popupAnchor: [0, -16] // Desplazamiento del popup del marcador
        });

        // Define un icono personalizado para los nutricionistas
        var nutricionistaIcon = L.icon({
            iconUrl: 'https://static.thenounproject.com/png/171195-200.png',
            iconSize: [32, 32], // Tamaño del icono
            iconAnchor: [16, 16], // Punto de anclaje del icono (la posición donde se encuentra el marcador)
            popupAnchor: [0, -16] // Desplazamiento del popup del marcador
        });

// Función para actualizar la ubicación del usuario en tiempo real
function actualizarUbicacion() {
    if (localStorage.getItem('ubicacionAutorizada') === 'true') {
        userPosition = {
            latitude: parseFloat(localStorage.getItem('userLatitude')),
            longitude: parseFloat(localStorage.getItem('userLongitude'))
        };
        // Actualizar el mapa para centrarlo en la nueva ubicación del usuario
        // Volver a buscar profesionales dentro del radio especificado
        buscarProfesionales();
    }
}

// Llamar a la función de actualización de ubicación cada 5 segundos
setInterval(actualizarUbicacion, 10000); // 5 segundos



// Función para inicializar el mapa 
function initMap() {
    // Crea un nuevo mapa
    map = L.map('map-container').setView([32.6629, -115.4683], 12); // Centrado en la primera ubicación

    // Capa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Verificar si el usuario ya ha autorizado el uso de la ubicación en el navegador
    if (localStorage.getItem('ubicacionAutorizada') !== 'true') {
        // Si no ha autorizado, solicitar permiso y recordar la decisión del usuario
        navigator.geolocation.getCurrentPosition(function(position) {
            userPosition = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            // Guardar en el almacenamiento local que se ha autorizado el uso de la ubicación
            localStorage.setItem('ubicacionAutorizada', 'true');
            localStorage.setItem('userLatitude', userPosition.latitude);
            localStorage.setItem('userLongitude', userPosition.longitude);
            mostrarMapa(); // Llama a la función mostrarMapa() para mostrar la ubicación del usuario en el mapa
            buscarProfesionales(); // Llama a buscarProfesionales() una vez que se obtiene la ubicación del usuario
            generarBotonesRuta(); // Generar botones de "Obtener Ruta" después de cargar la ubicación del usuario
        }, function(error) {
            // Manejar cualquier error al obtener la ubicación del usuario
            console.error('Error al obtener la ubicación del usuario:', error);
        });
    } else {
        // Si ya se autorizó, obtener la ubicación almacenada y continuar
        userPosition = {
            latitude: parseFloat(localStorage.getItem('userLatitude')),
            longitude: parseFloat(localStorage.getItem('userLongitude'))
        };
        mostrarMapa(); // Llama a la función mostrarMapa() para mostrar la ubicación del usuario en el mapa
        buscarProfesionales(); // Llama a buscarProfesionales() una vez que se obtiene la ubicación del usuario
        generarBotonesRuta(); // Generar botones de "Obtener Ruta" después de cargar la ubicación del usuario
    }

    // Actualizar la ubicación del usuario cada 30 segundos
    setInterval(actualizarUbicacion, 10000); // Llama a la función de actualización de ubicación cada 30 segundos
}

// Inicializar el mapa y llamar a la función para mostrarlo después de cargar completamente
document.addEventListener('DOMContentLoaded', function () {
    initMap();
    map.on('load', mostrarMapaDespuesDeCargar); // Esperar a que el mapa se cargue completamente
});


        // Función para obtener la ubicación del usuario
        function obtenerUbicacion() {
            navigator.geolocation.getCurrentPosition(function(position) {
                userPosition = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };

                mostrarMapa(); // Llama a la función mostrarMapa() para mostrar la ubicación del usuario en el mapa
                buscarProfesionales(); // Llama a buscarProfesionales() una vez que se obtiene la ubicación del usuario
                generarBotonesRuta(); // Generar botones de "Obtener Ruta" después de cargar la ubicación del usuario
            });
        }

        // Función para mostrar el mapa con la ubicación del usuario
        function mostrarMapa() {
            map.setView([userPosition.latitude, userPosition.longitude], 12);

            // Eliminar el círculo de búsqueda anterior, si existe
            if (circle !== null) {
                map.removeLayer(circle);
            }

            // Agregar un círculo para mostrar el radio de búsqueda
            circle = L.circle([userPosition.latitude, userPosition.longitude], { radius: 10000 }).addTo(map);
        }

// Función para buscar profesionales dentro del radio especificado
function buscarProfesionales() {
    var radiusInput = document.getElementById('radius');
    var radius = parseInt(radiusInput.value);

    // Eliminar el círculo de búsqueda anterior, si existe
    if (circle !== null) {
        map.removeLayer(circle);
    }

    // Agregar un círculo para mostrar el radio de búsqueda
    circle = L.circle([userPosition.latitude, userPosition.longitude], { radius: radius }).addTo(map);

    // Limpiar el contenido de la barra lateral
    document.getElementById('profesional-info').innerHTML = '';

    // Iterar sobre los profesionales y mostrar solo los que están dentro del radio
    profesionales.forEach(function(profesional) {
        var distance = calcularDistancia(userPosition.latitude, userPosition.longitude, profesional.coordenadas[0], profesional.coordenadas[1]);
        console.log('Distancia a ' + profesional.nombre + ': ' + distance + ' metros');
        if (distance <= radius) {
            // Determinar el icono según la especialidad
            var icon = (profesional.especialidad === "Psicólogo") ? psicologoIcon : nutricionistaIcon;

            // Agregar un marcador con el icono correspondiente
            var marker = L.marker(profesional.coordenadas, { icon: icon }).addTo(map);
            marker.bindPopup(profesional.nombre); // Mostrar el nombre del profesional en el popup
            marker.on('click', function() {
                mostrarInformacion(profesional, profesionales.indexOf(profesional)); // Pasar el índice del profesional seleccionado
            });
        }
    });

    // Mostrar la barra lateral solo si se selecciona un profesional
    closeSidebar();
}

        // Función para mostrar la información del profesional en la barra lateral
        function mostrarInformacion(profesional, index) {
    var infoHTML = '<b>' + profesional.nombre + '</b><br>' +
        profesional.direccion + '<br>' +
        profesional.especialidad + '<br>' +
        profesional.contacto.telefono + '<br>' +
        'Correo: <a href="mailto:' + profesional.contacto.correo + '">' + profesional.contacto.correo + '</a><br>' +
        '<a href="' + profesional.contacto.whatsapp + '" target="_blank" style="justify-content: center;"><img src="whatsapp.png" width="140" height="200" alt="WhatsApp" style="margin: auto;"></a><br>' +
        '<img src="' + profesional.foto + '" alt="Foto del profesional" width="550">';
    document.getElementById('profesional-info').innerHTML = infoHTML;

    // Mostrar la barra lateral
    openSidebar();

// Función para verificar si la resolución corresponde a la de un dispositivo móvil
function esDispositivoMovil() {
    return window.innerWidth <= 768 && window.innerHeight <= 1024;
}

// Obtener el elemento del mapa
var mapa = document.getElementById('map');

// Verificar si la resolución corresponde a la de un dispositivo móvil
if (esDispositivoMovil()) {
    // Si es un dispositivo móvil, establecer el ancho del mapa como 0%
    mapa.style.width = '0%';
} else {
    // Si no es un dispositivo móvil, establecer el ancho del mapa como 70%
    mapa.style.width = '70%';
}


    // Generar el botón de "Obtener Ruta" para el profesional actual
    generarBotonRuta(index);
}

        // Función para abrir la barra lateral
        function openSidebar() {
            sidebar.classList.add('open');
            sidebarOpen = true;
        }

        // Función para cerrar la barra lateral
        function closeSidebar() {
            sidebar.classList.remove('open');
            sidebarOpen = false;
            // Restaurar el ancho del mapa al 100% cuando se cierra la barra lateral
            document.getElementById('map').style.width = '100%';
        }

        function generarBotonRuta(index) {
    var container = document.getElementById('radius-container');
    container.innerHTML = ''; // Limpiar el contenido actual del contenedor

    var profesional = profesionales[index];
    
    var button = document.createElement('button');
    button.textContent = 'Obtener Ruta para ' + profesional.nombre;
    button.onclick = function() {
        obtenerRuta(index); // Llamar a obtenerRuta con el índice del profesional correspondiente
    };
    container.appendChild(button);
}

        // Función para calcular la distancia entre dos puntos en coordenadas geográficas
        function calcularDistancia(lat1, lon1, lat2, lon2) {
            var R = 6371; // Radio de la Tierra en kilómetros
            var dLat = deg2rad(lat2 - lat1);
            var dLon = deg2rad(lon2 - lon1);
            var a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var distance = R * c; // Distancia en kilómetros
            return distance * 1000; // Convertir a metros
        }

        function deg2rad(deg) {
            return deg * (Math.PI / 180);
        }

        // Función para verificar si la resolución corresponde a la de un dispositivo móvil
function esDispositivoMovil() {
    return window.innerWidth <= 768 && window.innerHeight <= 1024;
}

        // Función para obtener la ruta desde la ubicación del usuario hasta el profesional
        function obtenerRuta(index) {
            var profesional = profesionales[index];

            // Coordenadas del punto final (ubicación del profesional)
            var endLat = profesional.coordenadas[0];
            var endLon = profesional.coordenadas[1];

            // Limpiar la capa de rutas existente, si la hay
            if (window.routeControl) {
                map.removeControl(window.routeControl);
            }

            // Iniciar la navegación desde la ubicación del usuario hasta el punto final
            window.routeControl = L.Routing.control({
                waypoints: [
                    L.latLng(userPosition.latitude, userPosition.longitude),
                    L.latLng(endLat, endLon)
                ],
                routeWhileDragging: true
            }).addTo(map);

// Cerrar la barra lateral al iniciar la navegación en dispositivos móviles
if (esDispositivoMovil()) {
    closeSidebar();
}
}

        // Función para generar los botones de "Obtener Ruta" para cada profesional
        function generarBotonesRuta() {
            var container = document.getElementById('radius-container');
            container.innerHTML = ''; // Limpiar el contenido actual del contenedor

            // Iterar sobre los profesionales y generar un botón para cada uno
            profesionales.forEach(function(profesional, index) {
                var button = document.createElement('button');
                button.textContent = 'Obtener Ruta para ' + profesional.nombre;
                button.onclick = function() {
                    obtenerRuta(index); // Llamar a obtenerRuta con el índice del profesional correspondiente
                };
                container.appendChild(button);
            });
        }

        // Inicializa el mapa cuando la página se carga completamente
        document.addEventListener('DOMContentLoaded', function () {
            initMap();
        });

// Define un icono personalizado para el marcador del usuario
var userIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/6615/6615039.png', // URL de la imagen del icono del usuario
    iconSize: [32, 32], // Tamaño del icono
    iconAnchor: [16, 16], // Punto de anclaje del icono
});

// Variable para almacenar la referencia al marcador del usuario
var userMarker = null;

// Función para actualizar la posición y la orientación del marcador del usuario
function actualizarMarcadorUsuario(latitude, longitude, heading) {
    // Crear o actualizar el marcador del usuario
    if (userMarker === null) {
        // Si el marcador no existe, crear uno nuevo
        userMarker = L.marker([latitude, longitude], { icon: userIcon, rotationAngle: heading }).addTo(map);
    } else {
        // Si el marcador ya existe, actualizar su posición y orientación
        userMarker.setLatLng([latitude, longitude]);
        userMarker.setRotationAngle(heading);
    }
}

// Función para obtener la orientación del dispositivo
function obtenerOrientacion() {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function(event) {
            var alpha = event.alpha; // Valor de la brújula en grados

            // Actualizar la posición y la orientación del marcador del usuario
            if (userPosition) {
                actualizarMarcadorUsuario(userPosition.latitude, userPosition.longitude, alpha);
            }
        }, false);
    } else {
        alert('La orientación del dispositivo no está soportada en este navegador.');
    }
}

// Llamar a la función para obtener la orientación del dispositivo
obtenerOrientacion();
