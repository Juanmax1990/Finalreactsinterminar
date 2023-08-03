const products = [
    {
        id: '1',
        name: 'Head Speed Mp Pro',
        price: 125999,
        category: 'Raquetas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_880871-MLA50348081957_062022-F.webp',
        stock: 6,
        descripcion: 'Peso 300g. Patron de cuerdas: 16x19. Aro 100.'
    },
    {
        id: '2',
        name: 'Wilson Pro Staff 97 V14 G3',
        price: 139999,
        category: 'Raquetas',
        img: 'https://cdn.shopify.com/s/files/1/2344/9529/products/ProStaff97V14A1_800x.png?v=1672356047',
        stock: 4,
        descripcion: 'Peso 315g. Patron de cuerdas: 16x19. Aro 97.'
    },
    {
        id: '3',
        name: 'Head Radical MP 2023',
        price: 120600,
        category: 'Raquetas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_725814-MLA70192722457_062023-O.webp',
        stock: 4,
        descripcion: 'Peso 300g. Patron de cuerdas: 16x19. Aro 97.'
    },
    {
        id: '4',
        name: 'Babolat Pure Aero Tour',
        price: 130000,
        category: 'Raquetas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_825876-MLU70100239113_062023-O.webp',
        stock: 7,
        descripcion: 'Peso 315g. Patron de cuerdas: 16x19. Aro 100.'
    },
    {
        id: '5',
        name: 'Urich Dropper Carbono Eva Soft',
        price: 89000,
        category: 'Paletas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_878471-MLA51524931018_092022-O.webp',
        stock: 12,
        descripcion: 'Peso 365-380g. Forma diamante. 18K TLCarbon. Nucleo de Eva Soft'
    },
    {
        id: '6',
        name: 'Urich Baffler X soft',
        price: 55000,
        category: 'Paletas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_699548-MLA69449363024_052023-O.webp',
        stock: 10,
        descripcion: 'Peso 365-380g. Forma redonda. Carbon Frame 3k. Nucleo de Foam'
    },
    {
        id: '7',
        name: 'Urich Baffler Foam',
        price: 43000,
        category: 'Paletas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_918509-MLA51329358932_082022-O.webp',
        stock: 8,
        descripcion: 'Peso 365-380g. Forma Lagrima. Fibra de vidrio 3K. Nucleo de Foam'
    },
    {
        id: '8',
        name: 'Head Graphene 360+ Alpha Elite',
        price: 99000,
        category: 'Paletas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_720270-MLA51287939203_082022-O.webp',
        stock: 6,
        descripcion: 'Peso 265-275g. Forma Lagrima. Fibra de vidrio. Nucleo Soft Foam'
    },
    {
        id: '9',
        name: 'Fila Axilus Ace 2.0 Clay Hombre',
        price: 35000,
        category: 'Calzado',
        img: 'https://filaar.vtexassets.com/arquivos/ids/6848381-1600-auto?v=638237390772900000&width=1600&height=auto&aspect=true',
        stock: 10,
        descripcion: 'Las Fila Axilus Ace 2.0 Clay son ideales para los tenistas que buscan estabilidad y seguridad en las canchas de polvo de ladrillo. Su renovado diseño deportivo aporta versatilidad y comodidad con las mejores tecnologías FILA para controlar tu juego. La parte superior está hecha de tela con una superposición estructurada de TPU flexible, con las tecnologías FLEXX CAGE y CAGE AMH, que son placas estabilizadoras situadas en la región del mediopié que proporcionan apoyo y flexibilidad durante los movimientos. También cuenta con la tecnología CAGE: placa antitorsión que evita los movimientos laterales del mediopié y proporciona la máxima estabilidad al pie. La suave plantilla de EVA cuenta con la tecnología SUPERFOAM: espuma anatómica que garantiza el máximo confort y un ajuste perfecto. La entrsuela exterior, ligera y suave, está construida en EVA con tecnología EVER-GRIP en la suela, que proporciona un agarre y una tracción superior, ya sea en superficies secas o húmedas.'
    },
    {
        id: '10',
        name: 'Lacoste Ag-Lt21 Ultra de tela',
        price: 65000,
        category: 'Calzado',
        img: 'https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw2ef51ddd/43SMA0010_082_01.jpg?imwidth=915&impolicy=product',
        stock: 7,
        descripcion: 'Empeine de tela, material sintético y goma. Suela de goma, material sintético y EVA. Cocodrilo de TPU en el lateral.Zapatilla de tenis única con rendimiento de élite dentro y fuera de la pista. Zapatilla de tenis única con rendimiento de élite dentro y fuera de la pista.'
    },
    {
        id: '11',
        name: 'Pollera con Calza Adidas',
        price: 24000,
        category: 'Indumentaria',
        img: 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/o/pollera-con-calza-de-tenis-adidas-club-mujer-blanca-100020hs1455001-1.jpg',
        stock: 11,
        descripcion: 'Estilo y rendimiento para la cancha de tenis. Esta pollera forma parte de la colección ADIDAS Club y cuenta con una cómoda cintura ancha y unas calzas cortas integradas pensadas para ayudarte a concentrarte en el partido. El dobladillo frontal curvado y superpuesto te permite moverte con total libertad cuando subes a la red o te mueves por la línea de fondo. El tejido AEROREADY absorbe el sudor para mantenerte cómoda y segura, incluso en los momentos más exigentes. Hecho con una serie de materiales reciclados y al menos un 70 % de contenido reciclado, este producto representa solo una de nuestras soluciones para ayudar a ponerle fin a la contaminación por plástico. Logo ADIDAS estampado.'
    },
    {
        id: '12',
        name: 'Short Babolat Strike verde.',
        price: 2000,
        category: 'Indumentaria',
        img: 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-de-tenis-babolat-strike-verde-720022116541125-1.jpg',
        stock: 7,
        descripcion: 'El Short BABOLAT Strike está desarrollado con un tejido con alta elasticidad para un mejor movimiento dentro de la cancha. Posee un diseño estampado en el lateral al tono de la prenda. Cintura con elástico y cordón con puntera plástica para mejorar el calce. Los bolsillos están confeccionados con una malla al tono de tejido principal.'
    },
    {
        id: '13',
        name: 'Babolar Bland Blanca',
        price: 11500,
        category: 'Indumentaria',
        img: 'https://media.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/r/e/remera-de-tenis-babolat-brand-blanca-720021116520101-1.jpg',
        stock: 6,
        descripcion: 'La remera Brand es la remera clásica BABOLAT. Logo BABOLAT estampado.'
    },
   
    {
        id: '14',
        name: 'Protector de paleta Cartri transparente',
        price: 5900,
        category: 'Accesorios',
        img: 'https://http2.mlstatic.com/D_NQ_NP_777797-MLA46331875022_062021-O.webp',
        stock: 50,
        descripcion: 'Protector para paleta de padel transparente, importado de España. Color : Transparente Rugoso con grabado.'
    },
    {
        id: '15',
        name: 'Overgrips Babolat',
        price: 700,
        category: 'Accesorios',
        img: 'https://http2.mlstatic.com/D_NQ_NP_648743-MLA49556228678_042022-O.webp',
        stock: 100,
        descripcion: 'El cubregrip de tenis Babolat My Grip, posee una textura adherente para un agarre perfecto del mango de la raqueta. En la superficie está grabado el modelo "My Overgrip" y tiene pequeñas perforaciones para mejor absorción de la transpiración de la mano. Sus colores divertidos te harán sobresalir de tus adversarios y su atractivo precio, te seducirá..'
    },
    {
        id: '16',
        name: 'Antivibradores para Tenis',
        price: 500,
        category: 'Accesorios',
        img: 'https://http2.mlstatic.com/D_NQ_NP_791519-MLA48294589120_112021-O.webp',
        stock: 100,
        descripcion: 'Tenemos de todos los colores y formas.'
    },
    {
        id: '17',
        name: 'Encordado Kirschbaum Pro Line 2',
        price: 43000,
        category: 'Encordados',
        img: 'https://http2.mlstatic.com/D_NQ_NP_789028-MLA31628770582_072019-O.webp',
        stock: 7,
        descripcion: 'Calibre 1.25 mm. Uno de los cordajes en poliéster más flexibles propuestos por Kirschbaum. Muy similar al cordaje P2, el Kirschbaum Pro Line No. II ofrece algo más de toque y tolerancia que la mayoría de los cordajes copoliéster. Este cordaje goza de gran durabilidad y de un mantenimiento de la tensión excepcional. Una excelente combinación de potencia y control.'
    },
    {
        id: '18',
        name: 'Encordado Babolat Rpm Blast',
        price: 75000,
        category: 'Encordados',
        img: 'https://http2.mlstatic.com/D_NQ_NP_839377-MLA47368013906_092021-O.webp',
        stock: 5,
        descripcion: 'RPM Blast ofrece mucho efecto y máximo control a tu juego. Cuando realizas un swing amplio con recorrido completo, RPM Blast reaccionará sistemáticamente a la altura de tus expectativas. Devolverás golpes ganadores, darás golpes de derecha bajos y crearás ángulos donde no los había. Pregúntaselo a Rafa. O a sus oponentes. Fabricado en Francia. La cuerda es el motor de tu raqueta. La mitad del rendimiento de tu raqueta viene de la cuerda. Por eso es importante elegir la adecuada. Inventamos la cuerda de tenis en 1875. Y hemos seguido innovando desde entonces para que puedas dar lo mejor de tu juego y disfrutar más que nunca. La estructura octogonal con copoliéster de alta densidad añade una rotación fantástica a la bola y ofrece un efecto excepcional. El compuesto de copoliéster da a los monofilamentos de nuestra familia RPM una gran durabilidad. Es ideal para los jugadores que golpean duro y que esperan un buen rendimiento del cordaje a lo largo del tiempo. La firme capacidad de respuesta de las cuerdas de nuestra familia RPM te ofrece un gran control para que obtengas precisión en cada uno de tus golpes y mantengas la pelota en la pista. Tipo de cuerda Monofilamento de poliéster. Calibre: 1.25 y 1.30'
    },
    {
        id: '19',
        name: 'Suplemento en polvo Star Nutrition Creatine Monohydrate',
        price: 12600,
        category: 'Suplementos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_705680-MLA48462687556_122021-O.webp',
        stock: 10,
        descripcion: 'Componente principal: creatina. Tamaño de la porción: 5g. Porciones por envase: 60. Edad mínima recomendada: 18 años. Consumir junto con alimentos para favorecer su asimilación. Las imágenes pueden ser ilustrativas. Este producto es un suplemento dietario, no es un medicamento. Suplementa dietas insuficientes. Consulte a su médico y/o farmacéutico.'
    },
    {
        id: '20',
        name: 'Energy Gel de Ena Sporte x 12 con cafeína',
        price: 4500,
        category: 'Suplementos',
        img: 'https://www.demusculos.com/shop/1665-medium_default/geles-ena-con-cafeina.jpg',
        stock: 17,
        descripcion: 'Aporte energía "en movimiento", ideal para todo trabajo aeróbico. Con sales de rehidratación. Aporta antioxidantes que actúan sobre los radicales libres.'
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory= (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

